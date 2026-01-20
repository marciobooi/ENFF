import NetworkGraph from './components/NetworkGraph';
import PieChart from './components/PieChart';

const sampleData = [
  { name: 'Renewables', y: 45.2 },
  { name: 'Fossil fuels', y: 35.7 },
  { name: 'Nuclear', y: 14.1 },
  { name: 'Others', y: 5.0 }
];

function App() {
  return (
    <div style={{ padding: '24px' }}>
      <div className="chartContainer" style={{ marginBottom: '48px' }}>
        <NetworkGraph />
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <PieChart
          title="Sample energy mix"
          subtitle="Demo pie chart"
          data={sampleData}
          innerSize="40%"
          height={420}
          showLegend={true}
          decimals={1}
          unit="%"
          onPointClick={(p) => console.log('pie point clicked', p)}
        />
      </div>
    </div>
  );
}

export default App;
