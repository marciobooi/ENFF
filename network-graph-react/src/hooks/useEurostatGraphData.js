import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import fuelFamilies from '../data/fuelFamilies';
import siecCodes from '../data/siecCodes';

// Hard-coded query parameters per request
const QUERY = {
    geo: 'EU27_2020',
    time: '2023',
    unit: 'KTOE',
    nrg_bal: 'NRGSUP', // Total energy supply (pick one balance to anchor values)
    freq: 'A'
};

const API_URL = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_bal_c';

const buildFamilyEdges = () => {
    const edges = [];
    const nodes = new Map();
    nodes.set('TOTAL', { id: 'TOTAL', name: 'Total Energy' });

    const walk = (node, parentId) => {
        const { id, name, children = [] } = node;
        nodes.set(id, { id, name });
        if (parentId) {
            edges.push([parentId, id, 1]);
        } else {
            edges.push(['TOTAL', id, 1]);
        }
        children.forEach(child => walk(child, id));
    };

    fuelFamilies.forEach(root => walk(root, null));
    return { familyEdges: edges, familyNodes: Array.from(nodes.values()) };
};

const buildValueBySiec = (dataset) => {
    const value = dataset?.value || {};
    const dimensions = dataset?.dimension || {};
    const siecDimension = dimensions?.siec;
    
    if (!siecDimension) {
        console.error('No SIEC dimension found');
        return new Map();
    }

    const siecIndex = siecDimension.category?.index || {};
    const valBySiec = new Map();

    // Map numeric index directly to SIEC code
    Object.entries(value).forEach(([indexStr, val]) => {
        const index = parseInt(indexStr, 10);
        
        // Find SIEC code with this index
        const siecCode = Object.keys(siecIndex).find(code => siecIndex[code] === index);
        
        if (siecCode) {
            valBySiec.set(siecCode, val);
        }
    });

    console.log('Parsed values by SIEC:', valBySiec.size, 'entries');
    if (valBySiec.size > 0) {
        console.log('Sample parsed values:', Array.from(valBySiec.entries()).slice(0, 5));
    }
    
    return valBySiec;
};

const useEurostatGraphData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams({
                    time: QUERY.time,
                    geo: QUERY.geo,
                    unit: QUERY.unit,
                    nrg_bal: QUERY.nrg_bal,
                    freq: QUERY.freq
                });
                const response = await axios.get(`${API_URL}?${params.toString()}`);
                if (!mounted) return;
                setData(response.data);
                setError(null);
            } catch (err) {
                if (!mounted) return;
                setError(err?.message || 'Eurostat fetch failed');
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchData();
        return () => {
            mounted = false;
        };
    }, []);

    const graph = useMemo(() => {
        if (!data) return null;

        const { familyEdges, familyNodes } = buildFamilyEdges();
        const valBySiec = buildValueBySiec(data);

        console.log('Total nodes in hierarchy:', familyNodes.length);
        console.log('Total edges in hierarchy:', familyEdges.length);
        console.log('SIEC values from API:', valBySiec.size);
        console.log('Sample SIEC values:', Array.from(valBySiec.entries()).slice(0, 5));

        // Define color scheme for main categories
        const colorMap = {
            'TOTAL': '#2c3e50',
            'FE': '#e74c3c',
            'RA000': '#27ae60',
            'N900H': '#9b59b6',
            'E7000': '#f39c12',
            'H8000': '#e67e22',
            'W6100_6220': '#95a5a6'
        };

        // Build parent-child relationships for value aggregation
        const childrenMap = new Map();
        familyEdges.forEach(([from, to]) => {
            if (!childrenMap.has(from)) childrenMap.set(from, []);
            childrenMap.get(from).push(to);
        });

        // Calculate aggregated values (sum of children) for parent nodes
        const nodeValues = new Map();
        
        const calculateNodeValue = (nodeId) => {
            if (nodeValues.has(nodeId)) return nodeValues.get(nodeId);
            
            // If node has direct value from Eurostat, use it
            const directValue = valBySiec.get(nodeId);
            if (directValue !== undefined) {
                nodeValues.set(nodeId, directValue);
                return directValue;
            }
            
            // Otherwise, sum children values
            const children = childrenMap.get(nodeId) || [];
            if (children.length === 0) {
                nodeValues.set(nodeId, 0);
                return 0;
            }
            
            const sum = children.reduce((acc, childId) => {
                return acc + calculateNodeValue(childId);
            }, 0);
            
            nodeValues.set(nodeId, sum);
            return sum;
        };

        // Calculate values for all nodes
        familyNodes.forEach(n => calculateNodeValue(n.id));

        console.log('Node values calculated:', nodeValues.size);
        console.log('Sample node values:', Array.from(nodeValues.entries()).slice(0, 10));

        // Find min/max values for scaling (excluding zero values)
        const nonZeroValues = Array.from(nodeValues.values()).filter(v => v > 0);
        const minValue = Math.min(...nonZeroValues);
        const maxValue = Math.max(...nonZeroValues);

        console.log('Value range:', { minValue, maxValue, nonZeroCount: nonZeroValues.length });

        const nodes = new Map();
        familyNodes.forEach(n => {
            const value = nodeValues.get(n.id) || 0;
            const isRoot = n.id === 'TOTAL';
            const isMainCategory = colorMap[n.id] !== undefined && n.id !== 'TOTAL';
            const hasValue = value > 0;
            
            // Determine node properties
            let color = '#3498db'; // default blue for leaf nodes
            let markerRadius = 8;
            
            if (isRoot) {
                // TOTAL node - largest, special color
                color = colorMap['TOTAL'];
                markerRadius = 40;
            } else if (isMainCategory) {
                // Main categories - color-coded, size based on aggregated value
                color = colorMap[n.id];
                const normalizedValue = (value - minValue) / (maxValue - minValue);
                markerRadius = 15 + normalizedValue * 25; // 15-40 range
            } else if (hasValue) {
                // Leaf/intermediate nodes with data - size based on value
                const normalizedValue = (value - minValue) / (maxValue - minValue);
                markerRadius = Math.max(4, 6 + normalizedValue * 18); // 4-24 range
                // Use parent's color for sub-nodes
                const parentEdge = familyEdges.find(([from, to]) => to === n.id);
                if (parentEdge) {
                    const parentColor = colorMap[parentEdge[0]];
                    if (parentColor) {
                        // Lighter shade for children
                        color = parentColor + 'aa'; // add transparency
                    }
                }
            } else {
                // Nodes without values
                markerRadius = 6;
                color = '#bdc3c7';
            }
            
            nodes.set(n.id, { 
                id: n.id, 
                name: n.name,
                color: color,
                marker: { 
                    radius: markerRadius,
                    fillColor: color
                },
                ...(hasValue && { 
                    dataLabels: { 
                        format: `{point.name}<br/>${value.toFixed(1)} KTOE` 
                    },
                    value: value // store for tooltips
                })
            });
        });

        console.log('Final nodes:', nodes.size);
        console.log('Final edges:', familyEdges.length);

        const edges = [...familyEdges];

        // Update edge weights with actual/aggregated values
        edges.forEach((edge, idx) => {
            const [from, to, weight] = edge;
            const nodeValue = nodeValues.get(to) || 1;
            edges[idx] = [from, to, nodeValue];
        });

        return {
            edges,
            nodes: Array.from(nodes.values()),
            meta: QUERY
        };
    }, [data]);

    return { graph, error, loading };
};

export default useEurostatGraphData;
