/**
 * Standard International Energy Product Classification (SIEC) codes from nrg_bal_c
 * Following Eurostat Energy Balance methodology and IRES standards
 * 
 * Code Structure:
 * - C: Coal and coal products
 * - P: Peat and peat products
 * - S: Oil shale and oil sands
 * - G: Natural gas
 * - O: Oil and petroleum products
 * - R: Renewables and biofuels
 * - W: Waste
 * - N: Nuclear
 * - E: Electricity
 * - H: Heat
 * 
 * Format: { code, label }
 */

const siecCodes = [
    // TOTAL
    { code: 'TOTAL', label: 'Total' },

    // ============================================
    // SOLID FOSSIL FUELS (C)
    // ============================================
    { code: 'C0000X0350-0370', label: 'Solid fossil fuels' },
    
    // Hard Coal
    { code: 'C0100', label: 'Hard coal' },
    { code: 'C0110', label: 'Anthracite' },
    { code: 'C0121', label: 'Coking coal' },
    { code: 'C0129', label: 'Other bituminous coal' },
    
    // Brown Coal
    { code: 'C0200', label: 'Brown coal' },
    { code: 'C0210', label: 'Sub-bituminous coal' },
    { code: 'C0220', label: 'Lignite' },
    
    // Derived Coal Products
    { code: 'C0300', label: 'Derived coal products' },
    { code: 'C0311', label: 'Coke oven coke' },
    { code: 'C0312', label: 'Gas coke' },
    { code: 'C0320', label: 'Patent fuel' },
    { code: 'C0330', label: 'Brown coal briquettes' },
    { code: 'C0340', label: 'Coal tar' },
    
    // Manufactured Gases
    { code: 'C0350-0370', label: 'Manufactured gases' },
    { code: 'C0350', label: 'Coke oven gas' },
    { code: 'C0360', label: 'Gas works gas' },
    { code: 'C0371', label: 'Blast furnace gas' },
    { code: 'C0379', label: 'Other recovered gases' },

    // ============================================
    // PEAT (P)
    // ============================================
    { code: 'P1000', label: 'Peat and peat products' },
    { code: 'P1100', label: 'Peat' },
    { code: 'P1200', label: 'Peat products' },

    // ============================================
    // OIL SHALE (S)
    // ============================================
    { code: 'S2000', label: 'Oil shale and oil sands' },

    // ============================================
    // NATURAL GAS (G)
    // ============================================
    { code: 'G3000', label: 'Natural gas' },

    // ============================================
    // OIL AND PETROLEUM PRODUCTS (O)
    // ============================================
    { code: 'O4000XBIO', label: 'Oil and petroleum products (excl. biofuel portion)' },
    
    // Primary Oil Products
    { code: 'O4100_TOT', label: 'Crude oil' },
    { code: 'O4200', label: 'Natural gas liquids (NGL)' },
    { code: 'O4300', label: 'Refinery feedstocks' },
    { code: 'O4400X4410', label: 'Additives and oxygenates (excl. biofuel portion)' },
    { code: 'O4500', label: 'Other hydrocarbons' },
    
    // Refinery Products
    { code: 'O4600', label: 'Refinery products' },
    { code: 'O4610', label: 'Refinery gas' },
    { code: 'O4620', label: 'Ethane' },
    { code: 'O4630', label: 'Liquefied petroleum gases (LPG)' },
    { code: 'O4640', label: 'Naphtha' },
    
    // Gasoline Products
    { code: 'O4650', label: 'Gasoline products' },
    { code: 'O4651', label: 'Aviation gasoline' },
    { code: 'O4652XR5210B', label: 'Motor gasoline (excl. biofuel portion)' },
    { code: 'O4653', label: 'Gasoline-type jet fuel' },
    
    // Kerosene and Middle Distillates
    { code: 'O4660', label: 'Kerosene and middle distillates' },
    { code: 'O4661XR5230B', label: 'Kerosene-type jet fuel (excl. biofuel portion)' },
    { code: 'O4669', label: 'Other kerosene' },
    { code: 'O4671XR5220B', label: 'Gas oil and diesel oil (excl. biofuel portion)' },
    { code: 'O4680', label: 'Fuel oil' },
    
    // Other Petroleum Products
    { code: 'O4690', label: 'Other petroleum products' },
    { code: 'O4691', label: 'White spirit and SBP spirits' },
    { code: 'O4692', label: 'Lubricants' },
    { code: 'O4693', label: 'Paraffin waxes' },
    { code: 'O4694', label: 'Petroleum coke' },
    { code: 'O4695', label: 'Bitumen' },
    { code: 'O4699', label: 'Other oil products n.e.c.' },

    // ============================================
    // RENEWABLES AND BIOFUELS (RA, R)
    // ============================================
    { code: 'RA000', label: 'Renewables and biofuels' },
    
    // Primary Renewables (non-combustible)
    { code: 'RA100', label: 'Hydro power' },
    { code: 'RA200', label: 'Geothermal energy' },
    { code: 'RA300', label: 'Wind energy' },
    { code: 'RA400', label: 'Solar energy' },
    { code: 'RA410', label: 'Solar thermal' },
    { code: 'RA420', label: 'Solar photovoltaic' },
    { code: 'RA500', label: 'Tide, wave and ocean' },
    { code: 'RA600', label: 'Ambient heat (heat pumps)' },
    
    // Biofuels (combustible)
    { code: 'R5000', label: 'Biofuels' },
    
    // Solid Biofuels
    { code: 'R5100', label: 'Solid biofuels' },
    { code: 'R5110-5150_W6000RI', label: 'Primary solid biofuels' },
    { code: 'R5160', label: 'Charcoal' },
    
    // Liquid Biofuels
    { code: 'R5200', label: 'Liquid biofuels' },
    { code: 'R5210', label: 'Biogasoline' },
    { code: 'R5210P', label: 'Pure biogasoline' },
    { code: 'R5210B', label: 'Blended biogasoline' },
    { code: 'R5220', label: 'Biodiesels' },
    { code: 'R5220P', label: 'Pure biodiesels' },
    { code: 'R5220B', label: 'Blended biodiesels' },
    { code: 'R5230', label: 'Bio jet kerosene' },
    { code: 'R5230P', label: 'Pure bio jet kerosene' },
    { code: 'R5230B', label: 'Blended bio jet kerosene' },
    { code: 'R5290', label: 'Other liquid biofuels' },
    
    // Gaseous Biofuels
    { code: 'R5300', label: 'Biogases' },

    // ============================================
    // WASTE (W)
    // ============================================
    { code: 'W6100_6220', label: 'Non-renewable waste' },
    { code: 'W6100', label: 'Industrial waste (non-renewable)' },
    { code: 'W6200', label: 'Municipal waste' },
    { code: 'W6210', label: 'Renewable municipal waste' },
    { code: 'W6220', label: 'Non-renewable municipal waste' },

    // ============================================
    // NUCLEAR (N)
    // ============================================
    { code: 'N900H', label: 'Nuclear heat' },

    // ============================================
    // ELECTRICITY (E)
    // ============================================
    { code: 'E7000', label: 'Electricity' },

    // ============================================
    // HEAT (H)
    // ============================================
    { code: 'H8000', label: 'Derived heat' }
];

export default siecCodes;
