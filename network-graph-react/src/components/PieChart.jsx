import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';
import accessibility from 'highcharts/modules/accessibility';

// Initialize modules safely (same pattern used in NetworkGraph)
const initModule = (mod) => {
  if (!mod) return;
  const fn = typeof mod === 'function' ? mod : mod.default;
  if (typeof fn === 'function') fn(Highcharts);
};

initModule(exporting);
initModule(accessibility);

// EU style colors used across the app
const EU_COLORS = {
  blue: '#004494',
  yellow: '#FFC617',
  darkBlue: '#0e47cb',
  teal: '#00a0b0',
  lightBlue: '#5bc0de',
  grey: '#404040',
};


// helper to create monochromatic blue shades
const getBlueShades = (count) => {
  const start = EU_COLORS.lightBlue;
  const end = EU_COLORS.darkBlue;
  const hexToRgb = (hex) => hex.replace('#','').match(/.{2}/g).map(h=>parseInt(h,16));
  const rgbToHex = (r,g,b) => `#${[r,g,b].map(n=>n.toString(16).padStart(2,'0')).join('')}`;
  const [sr, sg, sb] = hexToRgb(start);
  const [er, eg, eb] = hexToRgb(end);
  if (!count || count <= 1) return [end];
  const shades = [];
  for (let i = 0; i < count; i++) {
    const t = i / Math.max(1, count - 1);
    const r = Math.round(sr + (er - sr) * t);
    const g = Math.round(sg + (eg - sg) * t);
    const b = Math.round(sb + (eb - sb) * t);
    shades.push(rgbToHex(r,g,b));
  }
  return shades;
};

// Small inline SVG pie generator for embedding inside tooltips (now optimized as donut and monochrome blues)
export function createMiniPieSvg(items = [], size = 100, inner = 38, highlightId = null, decimals = 0, unit = '', pad = 6) {
  const total = items.reduce((s, it) => s + (Number(it.y) || 0), 0);
  const width = size;
  const height = Math.max(size * 0.75, size);
  const cx = width / 2;
  const cy = height / 2;
  const padVal = Math.max(2, Number(pad) || 6);
  // reduce outer radius to leave padding space inside the svg container
  const r = Math.min(width, height) / 2 - padVal;
  let rInner = Math.max(0, inner - Math.round(padVal / 2));
  if (rInner >= r) rInner = Math.max(0, Math.floor(r - 3));

  if (!items || !items.length || total === 0) {
    // return a simple empty donut (respect padding using r)
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><circle cx="${cx}" cy="${cy}" r="${rInner || r}" fill="#f7fbff" stroke="#e6eefc"/></svg>`;
  }

  const colors = getBlueShades(items.length || 1);

  let angle = -Math.PI / 2; // start at top
  const slices = items.map((it, idx) => {
    const value = Number(it.y) || 0;
    const fraction = value / total;
    const angleSpan = Math.max(0.0001, fraction * Math.PI * 2);
    const start = angle;
    const end = angle + angleSpan;
    const largeArc = angleSpan > Math.PI ? 1 : 0;

    // outer arc coords
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    // inner arc coords
    const xi1 = cx + rInner * Math.cos(end);
    const yi1 = cy + rInner * Math.sin(end);
    const xi2 = cx + rInner * Math.cos(start);
    const yi2 = cy + rInner * Math.sin(start);

    const mid = (start + end) / 2;
    const isHighlight = highlightId !== null && (it.id === highlightId || it.name === highlightId);
    const offset = isHighlight ? 6 : 1; // tiny offset for non-highlight to give separation
    const dx = offset * Math.cos(mid);
    const dy = offset * Math.sin(mid);

    angle = end;

    const path = `M ${x1 + dx} ${y1 + dy} A ${r} ${r} 0 ${largeArc} 1 ${x2 + dx} ${y2 + dy} L ${xi1 + dx} ${yi1 + dy} A ${rInner} ${rInner} 0 ${largeArc} 0 ${xi2 + dx} ${yi2 + dy} Z`;
    const isActive = isHighlight;
    const fill = colors[idx % colors.length]; // monochrome shades only
    const stroke = isActive ? EU_COLORS.darkBlue : '#ffffff';
    const strokeWidth = isActive ? 1.8 : 0.8;
    const fillOpacity = isActive ? 1 : 0.96;

    return `<path d="${path}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" fill-opacity="${fillOpacity}"/>`;
  }).join('');

  // optional central label for highlighted slice (show percentage)
  let centerText = '';
  if (highlightId) {
    const h = items.find(i => i.id === highlightId || i.name === highlightId);
    if (h) {
      const pct = total ? ((Number(h.y) || 0) / total * 100).toFixed(decimals) : '0';
      centerText = `<text x="${cx}" y="${cy}" text-anchor="middle" alignment-baseline="central" font-size="10" font-weight="700" fill="${EU_COLORS.blue}">${pct}%</text>`;
    }
  }

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">${slices}${centerText}</svg>`;
}

// Main PieChart component (simple donut, monochrome blues)
const PieChart = ({
  data = [],
  title = '',
  subtitle = '',
  height = 360,
  innerSize = '40%',
  decimals = 0,
  unit = '',
  showLegend = false,
  onPointClick = null
}) => {
  const colors = getBlueShades(data ? data.length : 1);

  const options = useMemo(() => ({
    chart: {
      type: 'pie',
      height,
      backgroundColor: 'rgba(255,255,255,0.98)'
    },
    title: {
      text: title,
      align: 'center',
      style: {
        fontFamily: 'Arial, sans-serif',
        fontWeight: '700',
        fontSize: '16px',
        color: EU_COLORS.blue
      }
    },
    subtitle: {
      text: subtitle,
      align: 'center',
      style: {
        fontFamily: 'Arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        color: EU_COLORS.grey
      }
    },
    colors,
    tooltip: { enabled: false },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: innerSize,
        dataLabels: { enabled: false },
        point: {
          events: {
            click: function () {
              if (typeof onPointClick === 'function') {
                setTimeout(() => onPointClick({ id: this.id, name: this.name, y: this.y }), 0);
              }
            }
          }
        }
      }
    },
    series: [
      {
        type: 'pie',
        name: title || 'Share',
        data: data
      }
    ],
    legend: { enabled: showLegend },
    credits: { enabled: false },
    exporting: { enabled: false }
  }), [data, title, subtitle, height, innerSize, decimals, unit, showLegend, onPointClick]);

  if (!data || !data.length) {
    return (
      <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>No data available for pie chart</div>
    );
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      immutable={true}
      containerProps={{ style: { width: '100%' } }}
    />
  );
};

export default PieChart;

