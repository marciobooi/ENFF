// Hierarchical fuel families following Eurostat NRG_BAL_C SIEC structure
// Structure: { id, name, children: [] }
// TOTAL → aggregates (FE, RA000) → main products → detailed sub-products

const fuelFamilies = [
    {
        id: 'FE',
        name: 'Fossil Energy',
        children: [
            {
                id: 'C0000X0350-0370',
                name: 'Solid Fossil Fuels',
                children: [
                    { id: 'C0110', name: 'Anthracite', children: [] },
                    { id: 'C0121', name: 'Coking Coal', children: [] },
                    { id: 'C0129', name: 'Other Bituminous Coal', children: [] },
                    { id: 'C0210', name: 'Sub-bituminous Coal', children: [] },
                    { id: 'C0220', name: 'Lignite', children: [] },
                    { id: 'C0311', name: 'Coke Oven Coke', children: [] },
                    { id: 'C0312', name: 'Gas Coke', children: [] },
                    { id: 'C0320', name: 'Patent Fuel', children: [] },
                    { id: 'C0330', name: 'Brown Coal Briquettes', children: [] },
                    { id: 'C0340', name: 'Coal Tar', children: [] },
                    {
                        id: 'C0350-0370',
                        name: 'Manufactured Gases',
                        children: [
                            { id: 'C0350', name: 'Coke Oven Gas', children: [] },
                            { id: 'C0360', name: 'Gas Works Gas', children: [] },
                            { id: 'C0371', name: 'Blast Furnace Gas', children: [] },
                            { id: 'C0379', name: 'Other Recovered Gases', children: [] }
                        ]
                    }
                ]
            },
            {
                id: 'P1000',
                name: 'Peat & Peat Products',
                children: [
                    { id: 'P1100', name: 'Peat', children: [] },
                    { id: 'P1200', name: 'Peat Products', children: [] }
                ]
            },
            {
                id: 'S2000',
                name: 'Oil Shale & Oil Sands',
                children: []
            },
            {
                id: 'G3000',
                name: 'Natural Gas',
                children: []
            },
            {
                id: 'O4000XBIO',
                name: 'Oil & Petroleum Products',
                children: [
                    { id: 'O4100_TOT', name: 'Crude Oil', children: [] },
                    { id: 'O4200', name: 'Natural Gas Liquids', children: [] },
                    { id: 'O4300', name: 'Refinery Feedstocks', children: [] },
                    { id: 'O4400X4410', name: 'Additives & Oxygenates', children: [] },
                    { id: 'O4500', name: 'Other Hydrocarbons', children: [] },
                    { id: 'O4610', name: 'Refinery Gas', children: [] },
                    { id: 'O4620', name: 'Ethane', children: [] },
                    { id: 'O4630', name: 'Liquefied Petroleum Gases', children: [] },
                    { id: 'O4640', name: 'Naphtha', children: [] },
                    { id: 'O4651', name: 'Aviation Gasoline', children: [] },
                    { id: 'O4652XR5210B', name: 'Motor Gasoline', children: [] },
                    { id: 'O4653', name: 'Gasoline-type Jet Fuel', children: [] },
                    { id: 'O4661XR5230B', name: 'Kerosene-type Jet Fuel', children: [] },
                    { id: 'O4669', name: 'Other Kerosene', children: [] },
                    { id: 'O4671XR5220B', name: 'Gas Oil & Diesel Oil', children: [] },
                    { id: 'O4680', name: 'Fuel Oil', children: [] },
                    { id: 'O4691', name: 'White Spirit & SBP Spirits', children: [] },
                    { id: 'O4692', name: 'Lubricants', children: [] },
                    { id: 'O4693', name: 'Paraffin Waxes', children: [] },
                    { id: 'O4694', name: 'Petroleum Coke', children: [] },
                    { id: 'O4695', name: 'Bitumen', children: [] },
                    { id: 'O4699', name: 'Other Oil Products', children: [] }
                ]
            }
        ]
    },
    {
        id: 'RA000',
        name: 'Renewables & Biofuels',
        children: [
            { id: 'RA100', name: 'Hydro', children: [] },
            { id: 'RA200', name: 'Geothermal', children: [] },
            { id: 'RA300', name: 'Wind', children: [] },
            { id: 'RA410', name: 'Solar Thermal', children: [] },
            { id: 'RA420', name: 'Solar Photovoltaic', children: [] },
            { id: 'RA500', name: 'Tide, Wave, Ocean', children: [] },
            { id: 'RA600', name: 'Ambient Heat (Heat Pumps)', children: [] },
            {
                id: 'BIOE',
                name: 'Bioenergy',
                children: [
                    { id: 'R5110-5150_W6000RI', name: 'Primary Solid Biofuels', children: [] },
                    { id: 'R5160', name: 'Charcoal', children: [] },
                    { id: 'R5210P', name: 'Pure Biogasoline', children: [] },
                    { id: 'R5210B', name: 'Blended Biogasoline', children: [] },
                    { id: 'R5220P', name: 'Pure Biodiesels', children: [] },
                    { id: 'R5220B', name: 'Blended Biodiesels', children: [] },
                    { id: 'R5230P', name: 'Pure Bio Jet Kerosene', children: [] },
                    { id: 'R5230B', name: 'Blended Bio Jet Kerosene', children: [] },
                    { id: 'R5290', name: 'Other Liquid Biofuels', children: [] },
                    { id: 'R5300', name: 'Biogases', children: [] }
                ]
            }
        ]
    },
    {
        id: 'W6100_6220',
        name: 'Non-Renewable Waste',
        children: [
            { id: 'W6100', name: 'Industrial Waste', children: [] },
            { id: 'W6210', name: 'Renewable Municipal Waste', children: [] },
            { id: 'W6220', name: 'Non-renewable Municipal Waste', children: [] }
        ]
    },
    {
        id: 'N900H',
        name: 'Nuclear Heat',
        children: []
    },
    {
        id: 'E7000',
        name: 'Electricity',
        children: []
    },
    {
        id: 'H8000',
        name: 'Heat',
        children: []
    }
];

export default fuelFamilies;
