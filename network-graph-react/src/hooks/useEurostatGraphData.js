import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import fuelFamilies from '../data/fuelFamilies';
import siecCodes from '../data/siecCodes';
import balanceCodes from '../data/balanceCodes';

// Default query parameters
const DEFAULT_QUERY = {
    geo: 'EU27_2020',
    time: '2023',
    unit: 'KTOE',
    nrg_bal: 'NRGSUP', // Total energy supply (pick one balance to anchor values)
    freq: 'A',
    decimals: 0
};

const API_URL = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_bal_c';

const buildFamilyEdges = (balanceLabel = 'Total Energy') => {
    const edges = [];
    const nodes = new Map();
    nodes.set('TOTAL', { id: 'TOTAL', name: balanceLabel });

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

const useEurostatGraphData = (queryParams = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Serialize queryParams for stable dependency comparison
    const queryParamsKey = JSON.stringify(queryParams);

    // Merge provided params with defaults
    const QUERY = useMemo(() => ({
        ...DEFAULT_QUERY,
        ...queryParams
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [queryParamsKey]);

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
    }, [QUERY.time, QUERY.geo, QUERY.unit, QUERY.nrg_bal, QUERY.freq]);

    const graph = useMemo(() => {
        if (!data) return null;

        // Get the balance label for the TOTAL node
        const balanceLabel = balanceCodes.find(b => b.code === QUERY.nrg_bal)?.label || 'Total Energy';
        
        const { familyEdges, familyNodes } = buildFamilyEdges(balanceLabel);
        const valBySiec = buildValueBySiec(data);

        console.log('Total nodes in hierarchy:', familyNodes.length);
        console.log('Total edges in hierarchy:', familyEdges.length);
        console.log('SIEC values from API:', valBySiec.size);
        console.log('Sample SIEC values:', Array.from(valBySiec.entries()).slice(0, 5));

        // Main categories directly under TOTAL (level 1)
        // These are the first-level aggregates in the SIEC hierarchy
        const mainCategoryIds = [
            'C0000X0350-0370', // Solid Fossil Fuels
            'C0350-0370',      // Manufactured Gases
            'P1000',           // Peat
            'S2000',           // Oil Shale
            'G3000',           // Natural Gas
            'O4000XBIO',       // Oil & Petroleum Products
            'RA000',           // Renewables & Biofuels
            'W6100_6220',      // Non-Renewable Waste
            'N900H',           // Nuclear Heat
            'E7000',           // Electricity
            'H8000'            // Heat
        ];

        // Build parent-child relationships for value aggregation
        const childrenMap = new Map();
        const parentMap = new Map(); // Track parent of each node
        familyEdges.forEach(([from, to]) => {
            if (!childrenMap.has(from)) childrenMap.set(from, []);
            childrenMap.get(from).push(to);
            parentMap.set(to, from);
        });

        // Calculate node depth (distance from TOTAL)
        const nodeDepths = new Map();
        const calculateDepth = (nodeId, depth = 0) => {
            nodeDepths.set(nodeId, depth);
            const children = childrenMap.get(nodeId) || [];
            children.forEach(child => calculateDepth(child, depth + 1));
        };
        calculateDepth('TOTAL', 0);

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
        console.log('Node depths:', Array.from(nodeDepths.entries()).slice(0, 15));

        // Find min/max values for scaling (excluding zero values)
        const nonZeroValues = Array.from(nodeValues.values()).filter(v => v > 0);
        const minValue = nonZeroValues.length > 0 ? Math.min(...nonZeroValues) : 0;
        const maxValue = nonZeroValues.length > 0 ? Math.max(...nonZeroValues) : 1;

        console.log('Value range:', { minValue, maxValue, nonZeroCount: nonZeroValues.length });

        const nodes = new Map();
        familyNodes.forEach(n => {
            const value = nodeValues.get(n.id) || 0;
            const depth = nodeDepths.get(n.id) || 0;
            const isRoot = n.id === 'TOTAL';
            const isMainCategory = mainCategoryIds.includes(n.id);
            const hasValue = value > 0;
            
            // Calculate normalized value for sizing
            const normalizedValue = maxValue > minValue 
                ? (value - minValue) / (maxValue - minValue) 
                : 0;
            
            // Determine marker radius based on depth and value
            let markerRadius;
            if (isRoot) {
                markerRadius = 40; // TOTAL is largest
            } else if (isMainCategory) {
                markerRadius = 12 + normalizedValue * 20; // 12-32 range for main categories
            } else if (depth === 2) {
                markerRadius = 8 + normalizedValue * 14; // 8-22 range for level 2
            } else if (depth === 3) {
                markerRadius = 5 + normalizedValue * 10; // 5-15 range for level 3
            } else {
                markerRadius = 4 + normalizedValue * 8; // 4-12 range for deeper levels
            }
            
            // Ensure minimum visible size for nodes with values
            if (hasValue && markerRadius < 4) {
                markerRadius = 4;
            }
            
            nodes.set(n.id, { 
                id: n.id, 
                name: n.name,
                depth: depth,
                isMainCategory: isMainCategory,
                marker: { 
                    radius: markerRadius
                },
                value: value
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
            meta: QUERY,
            decimals: QUERY.decimals
        };
    }, [data, QUERY]);

    return { graph, error, loading, currentQuery: QUERY };
};

export default useEurostatGraphData;
