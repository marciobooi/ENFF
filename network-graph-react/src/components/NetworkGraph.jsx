
import React, { useMemo, useRef, useState, useCallback } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import networkgraph from 'highcharts/modules/networkgraph';
import exporting from 'highcharts/modules/exporting';
import accessibility from 'highcharts/modules/accessibility';
import useEurostatGraphData from '../hooks/useEurostatGraphData';
import NodeDetailModal from './NodeDetailModal';

// Initialize modules safely
const initModule = (mod) => {
    if (!mod) return;
    const fn = typeof mod === 'function' ? mod : mod.default;
    if (typeof fn === 'function') fn(Highcharts);
};

initModule(networkgraph);
initModule(exporting);
initModule(accessibility);

// EU Official Colors for chart
const EU_COLORS = {
    blue: '#004494',       // EU Blue - Primary (TOTAL)
    yellow: '#FFC617',     // EU Yellow
    darkBlue: '#0e47cb',   // Dark Blue (Sub-products)
    grey: '#404040',
    white: '#FFFFFF'       // White (Main categories fill)
};

// Memoized chart component that never re-renders when modal state changes
const Chart = React.memo(({ seriesData, gravConstant, onNodeClick }) => {
    const chartRef = useRef(null);

    const options = useMemo(() => ({
        chart: {
            type: 'networkgraph',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            margin: [50, 50, 50, 50],
            spacing: [10, 10, 10, 10],
            style: {
                borderRadius: '24px',
                boxShadow: '0 18px 45px rgba(15, 23, 42, 0.18)',
                overflow: 'hidden'
            },
           
        },
        title: {
            text: 'Eurostat Energy Supply Network',
            align: 'left',
            style: {
                fontFamily: 'Arial, sans-serif',
                fontWeight: '700',
                fontSize: '22px',
                color: EU_COLORS.blue
            }
        },
        subtitle: {
            text: 'EU27_2020 • 2023 • KTOE (NRGSUP)',
            align: 'left',
            style: {
                fontFamily: 'Arial, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                color: EU_COLORS.grey
            }
        },
        plotOptions: {
            networkgraph: {
                keys: seriesData.keys,
                linkColor: 'rgba(0, 68, 148, 0.25)',
                linkLineWidth: 1.5,
                linkOpacity: 0.7,
                layoutAlgorithm: {
                    enableSimulation: true,
                    linkLength: 20,
                    friction: -0.85,
                    gravitationalConstant: gravConstant * 1.5,
                    maxIterations: 500,
                    approximation: 'barnes-hut',
                    theta: 0.5,
                    initialPositionRadius: 80,
                    initialPositions: function () {
                        const chart = this.series && this.series[0] && this.series[0].chart;
                        if (!chart) return;
                        
                        const plotWidth = chart.plotWidth || 800;
                        const plotHeight = chart.plotHeight || 600;
                        const centerX = plotWidth / 2;
                        const centerY = plotHeight / 4;

                        const nodes = this.nodes || (this.series && this.series[0] && this.series[0].nodes);
                        if (!nodes || !nodes.length) return;

                        // Position TOTAL at logical center and lock it
                        const totalNode = nodes.find(n => n.id === 'TOTAL');
                        if (totalNode) {
                            totalNode.plotX = centerX;
                            totalNode.plotY = centerY;
                            totalNode.fixedPosition = {
                                x: centerX - 50,
                                y: centerY
                            };
                        }

                        // Position main categories in a circle around TOTAL
                        const mainCategories = ['FE', 'RA000', 'N900H', 'E7000', 'H8000', 'W6100_6220'];
                        const mainNodes = nodes.filter(n => mainCategories.includes(n.id));
                        const angleStep = (2 * Math.PI) / mainNodes.length;
                        const radius = Math.min(plotWidth, plotHeight) * 0.1;

                        mainNodes.forEach((node, i) => {
                            const angle = i * angleStep;
                            node.plotX = centerX + radius * Math.cos(angle);
                            node.plotY = centerY + radius * Math.sin(angle);
                        });

                        // Position other nodes closer to center with some spread
                        nodes.forEach(node => {
                            if (!node.plotX || node.plotX === 0) {
                                const spreadRadius = Math.min(plotWidth, plotHeight) * 0.15;
                                node.plotX = centerX + (Math.random() - 0.5) * spreadRadius;
                                node.plotY = centerY + (Math.random() - 0.5) * spreadRadius;
                            }
                        });
                    }
                }
            }
        },
        series: [
            {
                accessibility: { enabled: false },
                dataLabels: {
                    enabled: true,
                    linkFormat: '',
                    style: {
                        fontSize: '0.75em',
                        fontWeight: '600',
                        textOutline: 'none',
                        color: EU_COLORS.grey,
                        fontFamily: 'Arial, sans-serif'
                    }
                },
                id: 'eurostat',
                data: seriesData.data,
                nodes: seriesData.nodes.map(node => {
                    // Main categories (products)
                    const mainCategories = ['FE', 'RA000', 'N900H', 'E7000', 'H8000', 'W6100_6220'];
                    const isMainCategory = mainCategories.includes(node.id);
                    const isTotal = node.id === 'TOTAL';
                    
                    // Determine color based on level:
                    // 1. TOTAL = White with Blue border
                    // 2. Main categories = EU Yellow
                    // 3. Sub-products = EU Dark Blue
                    let nodeColor = EU_COLORS.darkBlue; // Default: sub-products
                    let borderColor = 'rgba(0, 55, 118, 0.3)';
                    let borderWidth = 2;
                    
                    if (isTotal) {
                        // TOTAL: White fill with blue border
                        nodeColor = EU_COLORS.white;
                        borderColor = EU_COLORS.blue;
                        borderWidth = 4;
                    } else if (isMainCategory) {
                        // Main categories: Yellow
                        nodeColor = EU_COLORS.yellow;
                        borderColor = EU_COLORS.grey;
                        borderWidth = 2;
                    }
                    
                    const baseNode = {
                        ...node,
                        color: nodeColor,
                        marker: {
                            ...(node.marker || {}),
                            lineWidth: borderWidth,
                            lineColor: borderColor,
                            fillColor: nodeColor
                        },
                        events: {
                            click: function () {
                                const nodeData = {
                                    id: this.id,
                                    name: this.name,
                                    value: this.value
                                };
                                setTimeout(() => onNodeClick(nodeData), 0);
                            }
                        }
                    };

                    // Fixed position for TOTAL
                    if (isTotal) {
                        return {
                            ...baseNode,
                            mass: 10,
                            fixed: {
                                x: true,
                                y: true
                            }
                        };
                    }

                    return baseNode;
                }),
                keys: ['from', 'to', 'weight']
            }
        ],
        exporting: { enabled: false },
        credits: { enabled: false }
    }), [seriesData, gravConstant, onNodeClick]);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartRef}
            immutable={true}
            updateArgs={[false, false, false]}
            containerProps={{ style: { width: '100%', height: '90vh' } }}
        />
    );
});

const NetworkGraph = () => {
    const { graph, loading, error } = useEurostatGraphData();
    const [selectedNode, setSelectedNode] = useState(null);
    const gravConstant = typeof window !== 'undefined' && window.innerWidth < 500 ? 0.2 : 0.06;

    const seriesData = useMemo(() => {
        if (graph?.edges?.length && graph?.nodes?.length) {
            return {
                data: graph.edges,
                nodes: graph.nodes,
                keys: ['from', 'to', 'weight']
            };
        }

        return {
            data: [],
            nodes: [],
            keys: ['from', 'to', 'weight']
        };
    }, [graph]);

    const handleNodeClick = useCallback((nodeData) => {
        setSelectedNode(nodeData);
    }, []);

    // Show loading state
    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%',
                fontSize: '1.5rem',
                color: '#666'
            }}>
                Loading Eurostat data...
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%',
                fontSize: '1.2rem',
                color: '#d32f2f',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <div>Error loading data</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>{error}</div>
            </div>
        );
    }

    // Don't render chart until we have data
    if (!graph || !seriesData.data.length || !seriesData.nodes.length) {
        return (
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%',
                fontSize: '1.2rem',
                color: '#666'
            }}>
                No data available
            </div>
        );
    }

    return (
        <>
            <Chart 
                seriesData={seriesData}
                gravConstant={gravConstant}
                onNodeClick={handleNodeClick}
            />
            <NodeDetailModal
                open={!!selectedNode}
                node={selectedNode}
                onClose={() => setSelectedNode(null)}
            />
        </>
    );
};

export default NetworkGraph;