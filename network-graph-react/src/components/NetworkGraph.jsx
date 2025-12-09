
import React, { useMemo, useRef, useState, useCallback } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import networkgraph from 'highcharts/modules/networkgraph';
import exporting from 'highcharts/modules/exporting';
import accessibility from 'highcharts/modules/accessibility';
import useEurostatGraphData from '../hooks/useEurostatGraphData';
import NodeDetailModal from './NodeDetailModal';
import FloatingToolbar from './FloatingToolbar';
import balanceCodes from '../data/balanceCodes';

// Default chart configuration
const DEFAULT_CONFIG = {
    geo: 'EU27_2020',
    time: '2023',
    unit: 'KTOE',
    nrg_bal: 'NRGSUP',
    decimals: 0
};

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
    yellow: '#FFC617',     // EU Yellow - Level 1 (Main categories)
    darkBlue: '#0e47cb',   // Dark Blue - Level 2
    teal: '#00a0b0',       // Teal - Level 3
    lightBlue: '#5bc0de',  // Light Blue - Level 4+
    grey: '#404040',
    white: '#FFFFFF'       // White (TOTAL fill)
};

// Memoized chart component that never re-renders when modal state changes
const Chart = React.memo(({ seriesData, gravConstant, onNodeClick, chartConfig }) => {
    const chartRef = useRef(null);
    const decimals = chartConfig?.decimals ?? 0;
    const unit = chartConfig?.unit ?? 'KTOE';

    const options = useMemo(() => ({
        chart: {
            type: 'networkgraph',
            height: 1000,
            scrollablePlotArea: {
                minHeight: 800,
                scrollPositionY: 0
            },
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
            text: `Eurostat Energy Balance: ${balanceCodes.find(b => b.code === chartConfig?.nrg_bal)?.label || 'Total energy supply'}`,
            align: 'left',
            style: {
                fontFamily: 'Arial, sans-serif',
                fontWeight: '700',
                fontSize: '22px',
                color: EU_COLORS.blue
            }
        },
        subtitle: {
            text: `${chartConfig?.geo || 'EU27_2020'} • ${chartConfig?.time || '2023'} • ${unit}`,
            align: 'left',
            style: {
                fontFamily: 'Arial, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                color: EU_COLORS.grey
            }
        },
        tooltip: {
            enabled: true,
            useHTML: true,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: EU_COLORS.blue,
            borderRadius: 8,
            shadow: true,
            style: {
                fontSize: '13px',
                fontFamily: 'Arial, sans-serif'
            },
            formatter: function() {
                const point = this.point;
                if (!point) return false;
                
                const name = point.name || point.id;
                const value = point.value;
                
                let html = `<div style="padding: 8px;">`;
                html += `<strong style="color: ${EU_COLORS.blue}; font-size: 14px;">${name}</strong>`;
                
                if (value !== undefined && value !== null) {
                    const formattedValue = value.toLocaleString(undefined, {
                        minimumFractionDigits: decimals,
                        maximumFractionDigits: decimals
                    });
                    html += `<br/><span style="color: ${EU_COLORS.grey};">Value: </span>`;
                    html += `<strong style="color: ${EU_COLORS.darkBlue};">${formattedValue} ${unit}</strong>`;
                }
                
                if (point.depth !== undefined) {
                    html += `<br/><span style="color: ${EU_COLORS.grey}; font-size: 11px;">Level: ${point.depth}</span>`;
                }
                
                html += `</div>`;
                return html;
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
                        const centerY = plotHeight / 2;

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

                        // Position main categories (level 1) in a circle around TOTAL
                        const mainCategories = [
                            'C0000X0350-0370', 'C0350-0370', 'P1000', 'S2000', 'G3000', 
                            'O4000XBIO', 'RA000', 'W6100_6220', 'N900H', 'E7000', 'H8000'
                        ];
                        const mainNodes = nodes.filter(n => mainCategories.includes(n.id));
                        const angleStep = (2 * Math.PI) / mainNodes.length;
                        const radius = Math.min(plotWidth, plotHeight) * 0.12;

                        mainNodes.forEach((node, i) => {
                            const angle = i * angleStep - Math.PI / 2; // Start from top
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
                    // Use the isMainCategory flag from the hook
                    const isMainCategory = node.isMainCategory;
                    const isTotal = node.id === 'TOTAL';
                    const depth = node.depth || 0;
                    
                    // Determine color based on hierarchy depth:
                    // Level 0: TOTAL = White with Blue border
                    // Level 1: Main categories = EU Yellow
                    // Level 2: Sub-categories = EU Dark Blue
                    // Level 3: Products = EU Teal
                    // Level 4+: Sub-products = EU Light Blue
                    let nodeColor = EU_COLORS.lightBlue; // Default: deepest levels
                    let borderColor = 'rgba(91, 192, 222, 0.5)';
                    let borderWidth = 1;
                    
                    if (isTotal) {
                        // TOTAL: White fill with blue border
                        nodeColor = EU_COLORS.white;
                        borderColor = EU_COLORS.blue;
                        borderWidth = 4;
                    } else if (isMainCategory) {
                        // Main categories (level 1): Yellow
                        nodeColor = EU_COLORS.yellow;
                        borderColor = EU_COLORS.grey;
                        borderWidth = 2;
                    } else if (depth === 2) {
                        // Level 2: Dark Blue
                        nodeColor = EU_COLORS.darkBlue;
                        borderColor = 'rgba(14, 71, 203, 0.5)';
                        borderWidth = 1;
                    } else if (depth === 3) {
                        // Level 3: Teal
                        nodeColor = EU_COLORS.teal;
                        borderColor = 'rgba(0, 160, 176, 0.5)';
                        borderWidth = 1;
                    } else if (depth >= 4) {
                        // Level 4+: Light Blue
                        nodeColor = EU_COLORS.lightBlue;
                        borderColor = 'rgba(91, 192, 222, 0.5)';
                        borderWidth = 1;
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
                        // Store formatted value directly on the node for data labels
                        formattedValue: node.value !== undefined && node.value !== null 
                            ? node.value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
                            : null,
                        // Add data labels for all nodes except TOTAL
                        dataLabels: !isTotal ? {
                            enabled: true,
                            formatter: function() {
                                const name = this.point.name || this.point.id;
                                const formattedVal = this.point.formattedValue;
                                if (formattedVal !== null) {
                                    return `${name}<br/>${formattedVal} ${unit}`;
                                }
                                return name;
                            },
                            verticalAlign: 'bottom',
                            y: -5,
                            style: {
                                fontSize: depth <= 2 ? '10px' : '8px',
                                fontWeight: depth === 1 ? '600' : '400',
                                color: EU_COLORS.grey,
                                textOutline: '2px white'
                            }
                        } : {
                            enabled: true,
                            format: balanceCodes.find(b => b.code === chartConfig?.nrg_bal)?.label || 'Total energy supply',
                            style: {
                                fontSize: '14px',
                                fontWeight: '700',
                                color: EU_COLORS.blue
                            }
                        },
                        events: {
                            click: function () {
                                const nodeData = {
                                    id: this.id,
                                    name: this.name,
                                    value: this.value,
                                    depth: this.depth
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
    }), [seriesData, gravConstant, onNodeClick, chartConfig, decimals, unit]);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartRef}
            immutable={true}
            updateArgs={[false, false, false]}
            containerProps={{ style: { width: '100%', minHeight: '1000px' } }}
        />
    );
});

const NetworkGraph = () => {
    // Chart configuration state
    const [chartConfig, setChartConfig] = useState(DEFAULT_CONFIG);
    const [appliedConfig, setAppliedConfig] = useState(DEFAULT_CONFIG);
    
    const { graph, loading, error, currentQuery } = useEurostatGraphData(appliedConfig);
    const [selectedNode, setSelectedNode] = useState(null);
    const gravConstant = typeof window !== 'undefined' && window.innerWidth < 500 ? 0.2 : 0.06;

    // Handle config change from toolbar (doesn't trigger refetch)
    const handleConfigChange = useCallback((newConfig) => {
        setChartConfig(newConfig);
    }, []);

    // Handle apply button click (triggers refetch)
    const handleApply = useCallback(() => {
        setAppliedConfig(chartConfig);
    }, [chartConfig]);

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
            <FloatingToolbar
                config={chartConfig}
                onConfigChange={handleConfigChange}
                onApply={handleApply}
            />
            <Chart 
                seriesData={seriesData}
                gravConstant={gravConstant}
                onNodeClick={handleNodeClick}
                chartConfig={appliedConfig}
            />
            <NodeDetailModal
                open={!!selectedNode}
                node={selectedNode}
                onClose={() => setSelectedNode(null)}
                unit={appliedConfig.unit}
                decimals={appliedConfig.decimals}
            />
        </>
    );
};

export default NetworkGraph;