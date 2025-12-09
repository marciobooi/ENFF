const definitions = {
    'C0371': `Blast Furnace Gas (BFG) is a by-product gas generated during iron production in blast furnaces, rich in carbon monoxide (CO) and nitrogen (N2) but with low heating value, primarily used as a fuel within steelworks or for power generation after cleaning. It's a key energy source for steel plants, supporting operations like preheating blast air and producing steam, reducing reliance on external fuels.
What it is:
A combustible gas produced from the chemical reactions when coke burns and reduces iron ore in a blast furnace.
Composed mainly of nitrogen (~51%), carbon dioxide (~22%), carbon monoxide (~22%), and hydrogen (~5%).
How it's used (according to Eurostat/EEA guidance):
Internal Fuel: Recovered and burned within the steel plant for heat, power, and steam.
Air Heating: Used to preheat the hot air (blast) fed into the furnace.
Energy Generation: Can fuel boilers and power plants.
Energy Balance: For statistical reporting, BFG use is often treated as part of the energy sector's transformation processes, not final consumption, to avoid double counting.
Key Characteristics:
Low Heating Value: Due to high N2 and CO2 content.
High Density: One of the densest industrial gases.
By-product: A valuable energy source recovered from primary iron making.`,

    'C0000X0350-0370': `solid fossil fuels are fossil fuels in solid form, primarily different types of coal (like hard coal, brown coal, anthracite, lignite), along with derived coal products (coke, briquettes), peat, oil shale, and oil sands, all consisting of carbonized plant matter used for energy. These are distinct from liquid (petroleum) or gaseous (natural gas) fossil fuels and represent a significant, though declining, part of the EU's energy mix, often used in industry and power generation.
Key Components (Eurostat's classification):
Primary Coal: Hard coal (anthracite, coking coal, bituminous), brown coal (lignite).
Derived Coal Products: Coke oven coke, gas coke, coal tar, brown coal briquettes.
Peat: Peat and peat products.
Other Solids: Oil shale and oil sands.
Usage:
Industrial Energy: A major source for industries, especially in the iron and steel sector, for producing manufactured gases like coke oven gas.
Power Generation: Historically significant, though its share has been decreasing in favor of renewables and natural gas.
Trends:
Eurostat data shows a long-term downward trend in the consumption and production of solid fossil fuels in the EU, interrupted by occasional fluctuations, with renewables increasingly taking a larger share.`,

    'C0100': `hard coal is a high-rank, high-energy fossil fuel (like anthracite or bituminous coal) with a gross calorific value over 24,000 kJ/kg, characterized by high fixed carbon and low volatile matter, primarily used in industry (like steelmaking) and electricity generation, though its use in the EU is declining rapidly as solar power overtakes it as a source.
Key Characteristics & Uses:
High Energy Content: It has a greater heating value than lower-ranked coals like brown coal (lignite).
High Carbon Content: Contains a high percentage of fixed carbon.
Industrial Applications: Crucial for industries such as steelmaking (as coking coal) and also used for electricity generation.
Types: Includes anthracite (highest rank) and bituminous coal (coking coal and steam coal).
Eurostat Context:
Declining Trend: Eurostat data shows a significant decrease in hard coal production and consumption in the EU, with its share in electricity generation falling behind renewables and natural gas.
Key Producers & Consumers: Poland and Czechia are the main EU producers, while countries like Poland, Germany, Italy, and the Netherlands are major consumers.
Supply Shifts: Following sanctions on Russia, the EU diversified its suppliers, with Australia and the U.S. becoming major sources.`,

    'C0110': `Anthracite is the highest rank of coal, a hard, lustrous, black coal with the highest carbon content (typically over 90%) and lowest volatile matter, making it a high-quality fuel for industrial and residential heating, often classified under "hard coal" in energy statistics. It's formed under intense heat and pressure, making it very dense and slow-burning, distinct from lower-rank coals like lignite (brown coal).
Key Characteristics (Eurostat/Statistical Context):
High Rank: It's the most mature form of coal, with the highest fixed carbon content.
High Calorific Value: It provides significant heat energy, with a gross calorific value over 24,000 kJ/kg (ash-free, moist basis).
Low Volatile Matter: Contains less than 10% volatile matter, meaning it burns cleanly and slowly.
Hard Coal: Anthracite falls under the broader category of "hard coal" in EU energy statistics, along with coking coal and other bituminous coals.
Usage:
Primarily used for industrial and residential heating.
Its quality makes it suitable for specific solid fuel appliances.
EU Context:
Production and consumption of anthracite (hard coal) have significantly declined in the EU as the bloc moves away from fossil fuels, with solar power surpassing hard coal as an electricity source in 2022.`,

    'C0121': `coking coal is high-grade bituminous coal with specific caking properties (swelling and fusing when heated) that allow it to be transformed into coke for the iron and steel industry, acting as an energy source, chemical agent, and structural support in blast furnaces. It's crucial for steelmaking, making it a critical raw material for the EU due to high import dependency, with Eurostat tracking its production, imports, and consumption within energy statistics.
Key Characteristics & Role:
Caking Properties: It softens, swells, and binds together when heated without oxygen, forming strong, porous coke.
Metallurgical Use: Primarily processed into coke for blast furnaces, where it reduces iron ore to iron.
Energy & Chemistry: Serves as both a fuel (energy source) and a carbon source (chemical agent) in steel production.
Critical Raw Material: The EU lists it as critical due to its importance for strategic sectors like automotive and its high import reliance, with Eurostat monitoring its flow.
Eurostat's Role:
Collects data on coking coal's transformation (inputs/outputs in coke ovens), stocks, imports, and consumption across energy sectors.
Uses detailed instructions for reporting to ensure consistent energy statistics for policy and analysis.`,

    'C0129': `Other bituminous coal also called thermal coal, is a hard coal used primarily for steam-raising (power generation), distinguished from coking coal (for steelmaking) and anthracite. It's a shiny, layered coal with more volatile matter than anthracite (over 10%) but less fixed carbon (under 90%), and a high heating value (over 24,000 kJ/kg).
Key Characteristics:
Use: Primarily for electricity generation (steam raising).
Classification: Falls under "hard coal" but is not coking coal or anthracite.
Composition: Higher volatile matter than anthracite (over 10%) and lower fixed carbon (under 90%).
Energy: High calorific value (over 24,000 kJ/kg) on an ash-free, moist basis, hence also known as thermal coal.
Appearance: Often shiny and smooth, potentially with dull/shiny layers, and generally black.
In essence, if it's a bituminous coal that isn't good enough for coking (making coke for blast furnaces) and isn't anthracite, it's classified as "other bituminous coal" for thermal energy purposes.`,

    'C0200': `Brown coal, also known as lignite in many contexts, is a low-rank coal with high moisture content (typically 30-60%) and low energy density, formed from compressed peat under moderate heat and pressure. It's primarily used for electricity generation in power plants, especially in countries like Germany, Poland, and Greece, though its use is declining in the EU due to environmental concerns, high CO2 emissions, and the transition to renewables.
What it is:
A sedimentary rock that is the lowest rank of coal, intermediate between peat and sub-bituminous coal.
Composed of high moisture (up to 60%), high volatile matter (over 40%), and low fixed carbon (under 60%).
Often brown or brownish-black in color, soft and crumbly.
How it's used (according to Eurostat/EEA guidance):
Power Generation: Main use is in lignite-fired power plants for electricity production, often with carbon capture technologies in modern plants.
Industrial Processes: Some use in cement production or as a reducing agent.
Energy Balance: Reported under solid fossil fuels, with significant domestic production in certain EU countries.
Key Characteristics:
Low Heating Value: Due to high moisture and ash content.
High Ash Content: Often contains minerals that leave ash after burning.
Environmental Impact: High CO2 emissions per unit of energy compared to other fuels.
EU Context:
Major producers include Germany (Rhineland lignite), Poland, and Czech Republic.
Eurostat data shows declining consumption as the EU phases out coal by 2030, with renewables taking a larger share.`,

    'C0210': `Sub-bituminous coal is a coal rank between lignite (brown coal) and bituminous coal, characterized by higher energy content and lower moisture than lignite but still containing significant volatile matter. It's used primarily for electricity generation and industrial heating, with moderate sulfur content, and is found in regions like the Powder River Basin in the US, though in EU context it's less common than lignite or hard coal.
What it is:
A black coal with properties intermediate between lignite and bituminous coal.
Typically has moisture content of 20-30%, volatile matter 30-45%, and fixed carbon 40-60%.
Forms under greater heat and pressure than lignite but less than bituminous coal.
How it's used:
Electricity Generation: Primary use in power plants, especially in regions with abundant sub-bituminous deposits.
Industrial Heating: Used in boilers for process heat.
Coking: Can be used for some metallurgical purposes, though not as effectively as bituminous coal.
Energy Balance: Classified under brown coal in some systems, but distinguished in detailed SIEC classifications.
Key Characteristics:
Moderate Energy Content: Gross calorific value typically 19,000-26,000 kJ/kg.
Lower Sulfur: Generally lower sulfur content than bituminous coal, making it cleaner burning.
Ash Content: Moderate ash, often with high sodium content.
EU Context:
Less prevalent in EU energy mix compared to lignite or hard coal.
Eurostat tracks it under brown coal category, with production mainly in Germany and Poland.
Declining use as EU transitions away from fossil fuels.`,

    'C0220': `Lignite, also known as brown coal, is the lowest rank of coal with the highest moisture content (up to 75%) and lowest energy density among coals, formed from compressed peat in swampy environments. It's primarily used for electricity generation in dedicated power plants, particularly in Germany and Poland, where large open-pit mines exist, though its environmental impact and declining competitiveness are leading to phase-out in the EU.
What it is:
The youngest and lowest rank of coal, formed from peat under low heat and pressure.
High moisture (45-75%), high volatile matter (over 40%), low fixed carbon (under 50%).
Soft, brown, crumbly material that often crumbles when exposed to air.
How it's used (according to Eurostat/EEA guidance):
Power Generation: Main application in lignite-fired power plants, often with flue gas desulfurization.
Drying and Upgrading: Sometimes dried to improve energy content or converted to briquettes.
Energy Balance: Reported as part of solid fossil fuels, with significant transformation losses due to moisture.
Key Characteristics:
Very Low Heating Value: Gross calorific value typically 8,000-15,000 kJ/kg (as received).
High Moisture: Leads to low energy efficiency and high transportation costs.
High Reactivity: Burns easily but produces more CO2 per unit energy than higher-rank coals.
EU Context:
Major EU producers: Germany (largest), Poland, Czech Republic, Greece.
Eurostat data shows lignite providing about 7% of EU electricity in recent years, but declining rapidly.
Environmental concerns include high CO2 emissions and land use impacts from open-pit mining.`,

    'C0300': `Derived coal products are secondary products obtained from the processing of primary coal, including coke, briquettes, patent fuel, and coal tar, used in various industrial applications like steelmaking and energy production. They represent transformed coal that has undergone chemical or physical processes to enhance properties or recover byproducts, playing a key role in the EU's industrial energy balance.
What it is:
Products derived from coal through processes like coking, briquetting, or distillation.
Includes coke (for metallurgy), briquettes (for fuel), patent fuel (compressed fuel), and coal tar (chemical feedstock).
Not primary coal but processed forms with different energy and chemical properties.
How it's used (according to Eurostat/EEA guidance):
Industrial Fuel: Coke for blast furnaces in steel production.
Energy Generation: Briquettes and patent fuel for heating and power.
Chemical Feedstock: Coal tar for producing chemicals, pharmaceuticals, and materials.
Energy Balance: Reported under solid fossil fuels, with transformation processes tracked separately.
Key Characteristics:
Higher Energy Density: Often more concentrated than raw coal.
Byproducts: Many are recovered from coke production, reducing waste.
Varied Composition: Depending on the parent coal and processing method.
EU Context:
Significant in steel industry, with Germany and Poland major producers.
Eurostat monitors production, imports, and consumption in energy statistics.
Declining use as steel industry modernizes and shifts to low-carbon alternatives.`,

    'C0311': `Coke oven coke is a high-carbon fuel produced by heating coking coal in the absence of air in coke ovens, resulting in a porous, strong material used primarily as a reducing agent and fuel in blast furnaces for iron and steel production. It's a critical byproduct of the coking process, essential for the metallurgical industry, and its production is closely monitored in Eurostat energy balances.
What it is:
A solid carbon product obtained by carbonizing bituminous coal at high temperatures (around 1000°C) in coke ovens.
Composed of nearly pure carbon (over 90%), with low ash and sulfur content.
Porous structure allows it to act as both fuel and structural support in furnaces.
How it's used (according to Eurostat/EEA guidance):
Blast Furnaces: Primary use as fuel and reducing agent in ironmaking, supporting the chemical reduction of iron ore.
Industrial Heating: In foundries and other metallurgical processes.
Energy Balance: Reported as a derived solid fuel, with production linked to coke oven gas recovery.
Key Characteristics:
High Carbon Content: Provides energy and carbon for steel production.
Low Impurities: High-quality coke has minimal ash and sulfur.
Mechanical Strength: Must withstand furnace conditions without crumbling.
EU Context:
Major producers: Poland, Germany, Czech Republic.
Eurostat tracks coke production and consumption, noting decline due to steel industry changes.
Critical for EU's strategic raw materials, with import dependencies.`,

    'C0312': `Gas coke, also known as gasworks coke or retort coke, is a byproduct of the gas manufacturing process from coal, where coal is heated to produce town gas, leaving a residual coke with lower quality than metallurgical coke. It's used as a fuel in industrial boilers and kilns, though its production has declined with the shift away from manufactured gas.
What it is:
A low-grade coke produced as a residue from coal gasification in gas works or retorts.
Similar to coke oven coke but with higher ash and lower carbon content due to different production process.
Often contains impurities from the gasification.
How it's used (according to Eurostat/EEA guidance):
Industrial Fuel: Burned in boilers for heat and power generation.
Kilns and Furnaces: In cement and lime production.
Energy Balance: Reported under derived coal products, with production tied to gas manufacturing.
Key Characteristics:
Lower Quality: Higher ash content (10-20%) and lower calorific value than metallurgical coke.
Byproduct: Recovered from gas production processes.
Variable Composition: Depends on the coal used and gasification method.
EU Context:
Production largely phased out in EU due to natural gas dominance.
Eurostat includes it in historical energy balances, with minimal current production.
Used in niche industrial applications where low-cost fuel is needed.`,

    'C0320': `Patent fuel is a manufactured solid fuel produced by compressing coal fines with a binder (like pitch or tar) into dense briquettes, designed for easy handling and burning in domestic or industrial applications. It was historically important for improving coal utilization but has largely been replaced by other fuels in modern energy systems.
What it is:
A compressed fuel made from coal dust or small coal pieces bound together.
Typically contains 80-90% coal with binders like coal tar pitch.
Forms uniform briquettes for better combustion and transport.
How it's used (according to Eurostat/EEA guidance):
Domestic Heating: In households and small boilers.
Industrial Fuel: In kilns and furnaces where uniform fuel is needed.
Energy Balance: Classified under derived coal products, with production from coal processing.
Key Characteristics:
Improved Handling: Easier to store and feed into furnaces than loose coal.
Higher Density: Better energy density than raw coal fines.
Binder Content: Adds to the fuel's properties but can affect emissions.
EU Context:
Historically produced in UK and other coal regions, but production declined.
Eurostat tracks it in energy statistics, though it's now marginal.
Replaced by cleaner alternatives like gas and electricity.`,

    'C0330': `Brown coal briquettes are compressed blocks made from lignite or brown coal fines, often with binders, used for residential heating and industrial purposes in regions with abundant brown coal. They improve the usability of low-quality brown coal by increasing density and reducing moisture-related issues.
What it is:
Briquettes formed by compressing brown coal (lignite) with or without binders.
Higher density than raw lignite, making it easier to transport and burn.
Often produced in areas with large lignite deposits.
How it's used (according to Eurostat/EEA guidance):
Residential Heating: In homes and small boilers in lignite-producing regions.
Industrial Applications: In kilns and as fuel for processes.
Energy Balance: Reported under derived coal products, linked to lignite processing.
Key Characteristics:
Reduced Moisture: Compression helps remove some water, improving heating value.
Higher Energy Density: Better than loose lignite for combustion.
Binder Use: Sometimes added to improve cohesion.
EU Context:
Common in Germany and Poland for domestic use.
Eurostat includes it in solid fuel statistics, with production tied to lignite mining.
Declining as residential coal use decreases.`,

    'C0340': `Coal tar is a thick, black liquid byproduct of the coke-making process, obtained by condensing volatile compounds released during coal carbonization. It's a valuable chemical feedstock used in producing materials like asphalt, plastics, and pharmaceuticals, and is tracked in Eurostat energy balances as a derived coal product.
What it is:
A complex mixture of hydrocarbons produced during coke oven operations.
Contains aromatic compounds, phenols, and other chemicals.
Dark, viscous liquid with a characteristic odor.
How it's used (according to Eurostat/EEA guidance):
Chemical Feedstock: For producing dyes, plastics, synthetic fibers, and medicines.
Road Construction: As a component in asphalt and sealants.
Energy Recovery: Can be burned as fuel, though primarily valued for chemicals.
Energy Balance: Reported under derived coal products, with production from coke ovens.
Key Characteristics:
High Chemical Value: Rich in organic compounds for industrial synthesis.
Toxicity: Contains carcinogenic substances, requiring careful handling.
Variable Composition: Depends on coal type and coking conditions.
EU Context:
Produced alongside coke in steel industry, with Germany and Poland major sources.
Eurostat monitors coal tar production and use in chemical industry statistics.
Valued for its role in manufacturing, despite environmental concerns.`,

    'C0350-0370': `Manufactured gases are combustible gases produced through industrial processes from coal or other carbon sources, including coke oven gas, gas works gas, blast furnace gas, and other recovered gases. They were historically important for town gas supply but are now mainly byproducts used for energy recovery in industrial processes, tracked in Eurostat energy balances under solid fossil fuels.
What it is:
Gases manufactured from coal via pyrolysis, gasification, or other chemical processes.
Includes hydrogen, methane, carbon monoxide, and other hydrocarbons.
Often recovered as byproducts of coke production or steelmaking.
How it's used (according to Eurostat/EEA guidance):
Industrial Fuel: Burned in furnaces, boilers, and power generation within steel plants.
Energy Recovery: Captured to reduce emissions and provide heat/power.
Chemical Feedstock: Some components used in synthesis.
Energy Balance: Reported under manufactured gases, with production linked to coal processing.
Key Characteristics:
High Calorific Value: Typically 4,000-6,000 kcal/m³.
Variable Composition: Depends on production method and coal type.
Byproduct Nature: Often recovered rather than primary products.
EU Context:
Major producers: Germany, Poland, Czech Republic in steel industry.
Eurostat tracks production and use, noting decline as natural gas dominates.
Important for energy efficiency in heavy industry.`,

    'C0350': `Coke oven gas is a flammable gas mixture produced as a byproduct during the carbonization of coal in coke ovens, consisting mainly of hydrogen, methane, and carbon monoxide. It's a valuable energy source used within steel plants for heating and power generation, and is closely monitored in Eurostat energy statistics as part of manufactured gases.
What it is:
A gaseous byproduct of coke production, containing about 50-60% hydrogen, 20-30% methane, and 5-10% carbon monoxide.
Produced when coal is heated without air in coke ovens.
Cleaned and purified before use.
How it's used (according to Eurostat/EEA guidance):
Internal Fuel: Burned in coke ovens, blast furnaces, and boilers within steel mills.
Power Generation: Used in gas turbines or engines for electricity.
Energy Balance: Reported under manufactured gases, with recovery improving energy efficiency.
Key Characteristics:
High Heating Value: Around 4,000-5,000 kcal/m³.
Toxic Components: Contains CO, requiring safety measures.
Byproduct Recovery: Captured to avoid emissions and provide energy.
EU Context:
Produced in integrated steel plants, with Germany and Poland major sources.
Eurostat includes it in energy balances, emphasizing its role in reducing fossil fuel consumption.
Declining as steel production modernizes.`,

    'C0360': `Gas works gas, also known as town gas or coal gas, is a manufactured gas produced by heating coal in gas works or retorts to create a fuel gas for lighting and heating. Historically important for urban gas supply, its production has largely ceased in the EU due to natural gas availability, though it's still tracked in energy statistics.
What it is:
A synthetic gas made by coal gasification at lower temperatures than coke ovens.
Composed of hydrogen (40-50%), methane (30-40%), carbon monoxide (5-10%), and carbon dioxide.
Produced in gas works for municipal supply.
How it's used (according to Eurostat/EEA guidance):
Municipal Gas Supply: For lighting, heating, and cooking in historical contexts.
Industrial Fuel: In boilers and kilns.
Energy Balance: Reported under manufactured gases, with production now minimal.
Key Characteristics:
Lower Heating Value: Around 4,000 kcal/m³, similar to coke oven gas.
Impure: Contains tars and ammonia, requiring purification.
Historical Significance: Predecessor to natural gas networks.
EU Context:
Production phased out in EU since 1970s with natural gas imports.
Eurostat maintains records for historical energy balances.
Rarely produced today, replaced by cleaner alternatives.`,

    'C0379': `Other recovered gases include various gaseous byproducts recovered from industrial processes beyond coke ovens and blast furnaces, such as gases from chemical plants, refineries, or other coal processing. They are used for energy recovery and are tracked in Eurostat energy balances under manufactured gases.
What it is:
Miscellaneous gaseous byproducts from industrial operations involving carbon sources.
May include gases from pyrolysis, gasification, or chemical reactions.
Often low-volume but valuable for energy recovery.
How it's used (according to Eurostat/EEA guidance):
Industrial Fuel: Burned in process heaters or boilers.
Energy Recovery: Captured to improve efficiency and reduce emissions.
Chemical Use: Some components recovered for synthesis.
Energy Balance: Reported under other recovered gases, with varied sources.
Key Characteristics:
Variable Composition: Depends on the source process.
Low Volume: Often site-specific and not standardized.
Byproduct Focus: Emphasizes recovery over primary production.
EU Context:
Produced in chemical and petrochemical industries.
Eurostat aggregates them in energy statistics, noting their role in circular economy.
Limited data due to diverse sources.`,

    'P1000': `Peat and peat products encompass peat (the raw, partially decomposed organic matter) and processed peat products like briquettes or milled peat, used primarily for energy in countries with peatlands. As a renewable but slow-regenerating resource, it's tracked in Eurostat energy balances under solid fossil fuels, though its use is declining due to environmental concerns.
What it is:
Organic material formed from partially decomposed plants in wetland environments.
Includes raw peat and processed forms like sod peat, milled peat, and briquettes.
Accumulates slowly over centuries in bogs and marshes.
How it's used (according to Eurostat/EEA guidance):
Energy Fuel: Burned in power plants and boilers for heat and electricity.
Horticulture: As a soil amendment, though energy use dominates.
Energy Balance: Reported under peat and peat products, with extraction and consumption tracked.
Key Characteristics:
High Moisture: Up to 90%, affecting energy content.
Low Energy Density: Gross calorific value around 3,000-4,000 kJ/kg.
Renewable but Slow: Regenerates over decades to centuries.
EU Context:
Major producers: Finland, Ireland, Sweden, Baltic states.
Eurostat monitors production and use, noting decline due to sustainability issues.
Limited role in EU energy mix, with focus on conservation.`,

    'P1100': `Peat is a soft, organic material formed from partially decomposed plant remains in wetland areas, harvested for energy production in peat-fired power plants. It's considered a fossil fuel in energy statistics due to its slow formation, and its extraction is regulated due to environmental impacts on ecosystems.
What it is:
A carbon-rich, fibrous material from ancient plant decomposition in acidic, waterlogged conditions.
Composed of lignin, cellulose, and humic substances.
Harvested from peat bogs using mechanical methods.
How it's used (according to Eurostat/EEA guidance):
Power Generation: Burned in dedicated peat plants for electricity and heat.
Domestic Heating: In some rural areas.
Energy Balance: Reported as primary peat, with transformation to energy products.
Key Characteristics:
High Water Content: 85-95% moisture when harvested.
Low Ash: Clean burning compared to coal.
Environmental Impact: Extraction damages wetlands and releases CO2.
EU Context:
Harvested in Finland (major producer), Ireland, and Sweden.
Eurostat tracks peat extraction and consumption, emphasizing sustainable practices.
Use declining as EU shifts to renewables.`,

    'P1200': `Peat products are processed forms of peat, such as sod peat, milled peat, or peat briquettes, designed for easier handling and burning in energy applications. They improve the usability of raw peat by reducing moisture and increasing density, and are tracked in Eurostat energy balances as transformed peat.
What it is:
Processed peat forms created by drying, milling, or briquetting raw peat.
Includes sod peat (blocks), milled peat (powder), and compressed briquettes.
Aimed at improving combustion properties.
How it's used (according to Eurostat/EEA guidance):
Energy Fuel: In boilers, stoves, and power plants.
Horticultural: As growing media.
Energy Balance: Reported under peat products, derived from raw peat processing.
Key Characteristics:
Lower Moisture: Dried to 20-50% for better burning.
Higher Density: Easier storage and transport.
Variable Quality: Depends on processing method.
EU Context:
Produced from raw peat in Finland and Ireland.
Eurostat includes them in solid fuel statistics, with processing losses accounted for.
Niche use, declining with peat bans in some countries.`,

    'S2000': `Oil shale and oil sands are sedimentary rocks containing organic matter that can be processed to extract oil, used as an alternative to conventional crude oil. Oil shale requires heating to release oil, while oil sands contain bitumen that can be extracted. They are tracked in Eurostat energy balances under solid fossil fuels, with production mainly in Estonia for oil shale.
What it is:
Oil shale: Fine-grained sedimentary rock with kerogen that yields oil when heated.
Oil sands: Sandstone impregnated with heavy crude oil (bitumen).
Both are unconventional oil sources requiring special extraction methods.
How it's used (according to Eurostat/EEA guidance):
Oil Production: Processed in retorts or mines to extract synthetic crude oil.
Energy Fuel: Some direct combustion, though inefficient.
Energy Balance: Reported under oil shale and oil sands, with transformation to oil products.
Key Characteristics:
Low Energy Density: Oil shale has low heating value until processed.
High Processing Cost: Requires significant energy input.
Environmental Impact: Mining and processing affect landscapes and water.
EU Context:
Major producer: Estonia for oil shale, used in power generation.
Eurostat tracks production and imports, noting limited EU reserves.
Declining use due to economics and environmental concerns.`,

    'G3000': `Natural gas is a fossil fuel consisting primarily of methane, found in underground reservoirs, used for heating, electricity generation, and industrial processes. It's the cleanest-burning fossil fuel and is tracked extensively in Eurostat energy balances, with significant imports to the EU from Russia, Norway, and Algeria.
What it is:
A mixture of hydrocarbons, mainly methane (CH4), with small amounts of ethane, propane, and impurities.
Formed from ancient organic matter under heat and pressure.
Extracted from wells and transported via pipelines or LNG.
How it's used (according to Eurostat/EEA guidance):
Power Generation: In gas turbines and combined cycle plants.
Heating: Residential and commercial space heating.
Industrial: As feedstock for chemicals and processes.
Energy Balance: Reported under natural gas, with imports, production, and consumption tracked.
Key Characteristics:
High Heating Value: Around 35-40 MJ/m³.
Clean Burning: Low emissions compared to coal and oil.
Versatile: Can be stored and transported easily.
EU Context:
Major producers: Netherlands, UK, Norway (non-EU).
Eurostat monitors gas flows, noting dependency on imports.
Increasing role in EU energy mix as transition fuel.`,

    'O4000XBIO': `Oil and petroleum products (excluding biofuel portion) encompass all refined products from crude oil, including gasoline, diesel, jet fuel, and other derivatives, used across transportation, industry, and heating. This category excludes biofuels to focus on fossil-based petroleum products, and is central to Eurostat energy balances.
What it is:
Products derived from crude oil refining, including motor fuels, heating oils, and petrochemical feedstocks.
Excludes biofuels to isolate fossil fuel consumption.
Covers the full range of refinery outputs.
How it's used (according to Eurostat/EEA guidance):
Transportation: Gasoline and diesel for vehicles.
Industrial: Fuel oils and naphtha for processes.
Heating: Kerosene and fuel oils for buildings.
Energy Balance: Reported under oil products, with detailed breakdowns by type.
Key Characteristics:
High Energy Density: Efficient for transport and storage.
Variable Quality: Different grades for different uses.
Global Trade: Major EU imports from Middle East and Russia.
EU Context:
Refined in EU refineries or imported as products.
Eurostat tracks consumption by sector, noting transport dominance.
Declining share as electrification advances.`,

    'TOTAL': `Total energy represents the aggregate of all energy sources and forms in the Eurostat energy balance, providing a comprehensive view of energy supply, transformation, and consumption across the EU. It includes fossil fuels, renewables, nuclear, electricity, and heat, and is used for policy analysis and monitoring energy security.
What it is:
The sum of all energy commodities in physical units (typically ktoe - thousand tonnes of oil equivalent).
Covers primary energy supply, final consumption, and losses.
A top-level indicator for energy statistics.
How it's used (according to Eurostat/EEA guidance):
Policy Monitoring: Tracking total energy trends and dependencies.
Sector Analysis: Breaking down by consumption sectors (transport, industry, etc.).
Energy Balances: Ensuring consistency across all energy flows.
Energy Balance: The overarching total in energy balance tables.
Key Characteristics:
Comprehensive: Includes all energy forms and sources.
Standardized Units: ktoe for comparability.
Dynamic: Reflects changes in energy mix over time.
EU Context:
Eurostat publishes annual totals for EU27 and member states.
Used in EU energy policy, like the Green Deal targets.
Shows declining fossil fuel share and rising renewables.`,

    'O4100_TOT': `Crude oil is the unrefined petroleum extracted from underground reservoirs, serving as the primary feedstock for refineries to produce fuels and other products. It's the most traded commodity globally and is tracked extensively in Eurostat energy balances, with the EU heavily dependent on imports.
What it is:
Raw petroleum consisting of hydrocarbons, extracted from oil wells.
Varies in density and sulfur content (light/heavy, sweet/sour).
The base material for all refined oil products.
How it's used (according to Eurostat/EEA guidance):
Refining: Processed into gasoline, diesel, jet fuel, etc.
Energy Balance: Reported as crude oil imports, production, and refinery input.
Direct Use: Limited, mainly in some industrial processes.
Key Characteristics:
Variable Quality: API gravity and sulfur content affect refining.
Global Market: Priced on international markets (Brent, WTI).
High Value: Major economic and geopolitical importance.
EU Context:
Minimal EU production; major importers from Middle East, Russia, Norway.
Eurostat tracks refinery runs and stock changes.
Declining demand as transport electrifies.`,

    'O4200': `Natural gas liquids (NGL) are hydrocarbon liquids separated from natural gas during processing, including ethane, propane, butane, and pentane, used as fuels or petrochemical feedstocks. They are lighter than crude oil and are tracked in Eurostat energy balances under oil products.
What it is:
Liquid hydrocarbons extracted from natural gas streams.
Includes ethane (C2), propane (C3), butane (C4), and pentanes plus (C5+).
Separated at gas processing plants.
How it's used (according to Eurostat/EEA guidance):
Petrochemicals: Ethane and propane as feedstock for plastics.
Fuel: Propane and butane for heating and transport.
Energy Balance: Reported under NGL, often aggregated with natural gas.
Key Characteristics:
Light Liquids: Low boiling points, easy to vaporize.
Energy Dense: High calorific value.
Byproduct: Recovered from gas production.
EU Context:
Produced in Netherlands and Norway; imported as LNG.
Eurostat includes in oil balances, noting petrochemical use.
Growing role in chemical industry.`,

    'O4300': `Refinery feedstocks are heavy oil residues or imported intermediates used as input to refineries for further processing into finished products. They include vacuum gas oil and other refinery byproducts, and are tracked in Eurostat energy balances to account for complex refinery operations.
What it is:
Heavy petroleum fractions or imported oils used in secondary refining.
Includes vacuum residues, coker feeds, and imported intermediates.
Not final products but processing inputs.
How it's used (according to Eurostat/EEA guidance):
Further Refining: Converted to lighter products via cracking or coking.
Energy Balance: Reported as refinery feedstocks, with transformation tracked.
Key Characteristics:
Heavy Fractions: High viscosity and boiling points.
Complex Processing: Requires advanced refinery units.
Trade Item: Imported from Middle East refineries.
EU Context:
EU refineries import feedstocks for complex processing.
Eurostat monitors feedstock imports and refinery yields.
Part of integrated oil supply chain.`,

    'O4400X4410': `Additives and oxygenates (excluding biofuel portion) are chemical compounds added to gasoline to improve performance, such as octane boosters and oxygen-containing additives like MTBE. They enhance fuel properties but are tracked separately in Eurostat energy balances to isolate fossil-based additives.
What it is:
Chemical additives blended into motor fuels.
Includes oxygenates (MTBE, ETBE) and other performance enhancers.
Excludes biofuels to focus on petrochemical additives.
How it's used (according to Eurostat/EEA guidance):
Fuel Improvement: Boosting octane and reducing emissions.
Energy Balance: Reported under additives, with small volumes.
Key Characteristics:
Low Volume: Used in small quantities (ppm levels).
Performance Focused: Improve combustion and emissions.
Regulatory: Governed by fuel quality standards.
EU Context:
Phased out in some countries due to groundwater concerns.
Eurostat tracks usage in fuel statistics.
Declining with cleaner fuel mandates.`,

    'O4500': `Other hydrocarbons include various petroleum-derived products not classified elsewhere, such as petroleum jelly, waxes, and specialty oils. They are minor products from refining and are tracked in Eurostat energy balances under oil products.
What it is:
Miscellaneous petroleum products from refining.
Includes lubricating oils, greases, and specialty hydrocarbons.
Not major fuels but niche applications.
How it's used (according to Eurostat/EEA guidance):
Industrial: Lubricants and specialty applications.
Energy Balance: Reported under other hydrocarbons, with low volumes.
Key Characteristics:
Specialized: Tailored for specific uses.
Low Energy Content: Not primary fuels.
Byproduct: From refinery processes.
EU Context:
Produced in EU refineries or imported.
Eurostat aggregates in oil statistics.
Stable but minor component.`,

    'O4600': `Refinery products is an aggregate category encompassing all outputs from oil refineries, including gases, gasoline, diesel, and residuals. It represents the total refined petroleum products and is used in Eurostat energy balances to summarize refinery output.
What it is:
The sum of all products from crude oil refining.
Includes gases, liquids, and solids from distillation and conversion.
Excludes biofuels for fossil focus.
How it's used (according to Eurostat/EEA guidance):
Energy Supply: Distributed to various sectors.
Energy Balance: Aggregate refinery output.
Key Characteristics:
Diverse Mix: From gases to heavy fuels.
Yield Dependent: Varies by refinery configuration.
Trade Flows: Major export/import item.
EU Context:
EU refineries produce for domestic and export markets.
Eurostat tracks refinery yields and product balances.
Adapting to demand changes.`,

    'O4610': `Refinery gas is a gaseous byproduct of oil refining, consisting of light hydrocarbons like methane and ethane, used as fuel within refineries or sold as energy. It's tracked in Eurostat energy balances as a refinery product.
What it is:
Light gaseous hydrocarbons from refinery processes.
Includes methane, ethane, and propane from cracking.
Produced in large volumes at refineries.
How it's used (according to Eurostat/EEA guidance):
Internal Fuel: Fired in refinery furnaces.
Energy Sales: Sold to gas networks.
Energy Balance: Reported under refinery gas.
Key Characteristics:
High Calorific Value: Efficient fuel.
Variable Composition: Depends on refinery type.
Byproduct: Recovered for energy.
EU Context:
Used in integrated refinery operations.
Eurostat includes in gas balances.
Supports refinery energy needs.`,

    'O4620': `Ethane is a light hydrocarbon gas, often separated from natural gas or refinery gas, used primarily as a petrochemical feedstock for ethylene production. It's tracked in Eurostat energy balances under refinery products.
What it is:
C2H6, a saturated hydrocarbon gas.
Separated from NGL or refinery streams.
Key building block for chemicals.
How it's used (according to Eurostat/EEA guidance):
Petrochemicals: Cracked to ethylene for plastics.
Energy Balance: Reported under ethane.
Key Characteristics:
Light Gas: Low boiling point.
High Purity: Required for chemical use.
Byproduct: From gas processing.
EU Context:
Imported from US as LNG.
Eurostat tracks in chemical balances.
Growing with plastics demand.`,

    'O4630': `Liquefied petroleum gases (LPG) are propane and butane mixtures, stored as liquids under pressure, used for heating, cooking, and transport fuel. They are tracked in Eurostat energy balances as refinery products.
What it is:
Mixtures of propane (C3H8) and butane (C4H10).
Liquefied for storage and transport.
Derived from refining or gas processing.
How it's used (according to Eurostat/EEA guidance):
Residential: Heating and cooking.
Transport: As autogas.
Industrial: Process fuel.
Energy Balance: Reported under LPG.
Key Characteristics:
Portable: Easy storage and transport.
Clean Burning: Low emissions.
Versatile: Multiple applications.
EU Context:
Produced in refineries and imported.
Eurostat tracks consumption by sector.
Stable demand in rural areas.`,

    'O4640': `Naphtha is a volatile hydrocarbon mixture from refining, used as a feedstock for petrochemicals and as a solvent or fuel. It's tracked in Eurostat energy balances under refinery products.
What it is:
Light distillate from crude oil, boiling range 30-200°C.
Mixture of paraffins, naphthenes, and aromatics.
Produced in large quantities.
How it's used (according to Eurostat/EEA guidance):
Petrochemicals: Reformed to aromatics and gasoline.
Solvents: Industrial cleaning.
Energy Balance: Reported under naphtha.
Key Characteristics:
Volatile: Low flash point.
High Value: Chemical feedstock.
Refinery Output: Major product.
EU Context:
Used in EU petrochemical industry.
Eurostat monitors production and trade.
Declining with refinery changes.`,

    'O4650': `Gasoline products is an aggregate category for all gasoline types, including motor gasoline and aviation gasoline, used primarily for transportation. It's tracked in Eurostat energy balances under refinery products.
What it is:
Liquid fuels for spark-ignition engines.
Includes various blends and grades.
Major refinery output.
How it's used (according to Eurostat/EEA guidance):
Transportation: Cars and light vehicles.
Energy Balance: Aggregate gasoline consumption.
Key Characteristics:
High Octane: For engine performance.
Blended: With additives for quality.
Global Product: Major trade item.
EU Context:
EU produces and imports gasoline.
Eurostat tracks by type and biofuel content.
Declining with EV adoption.`,

    'O4651': `Aviation gasoline is a high-octane fuel for piston-engine aircraft, blended for aviation use. It's a niche product tracked in Eurostat energy balances under gasoline products.
What it is:
Specialized gasoline for aircraft engines.
High octane (100-130) with lead additives historically.
Low volume compared to motor gasoline.
How it's used (according to Eurostat/EEA guidance):
Aviation: Piston-engine planes.
Energy Balance: Reported under aviation gasoline.
Key Characteristics:
High Performance: For high-altitude operation.
Specialized: Aviation standards.
Low Demand: Niche market.
EU Context:
Produced in EU refineries.
Eurostat tracks aviation fuel use.
Stable but small sector.`,

    'O4652XR5210B': `Motor gasoline (excluding biofuel portion) is the fossil-based component of gasoline used in cars and light vehicles. It's tracked separately in Eurostat energy balances to isolate biofuel blending.
What it is:
Fossil gasoline for road transport.
Excludes bioethanol and other biofuels.
Major transport fuel.
How it's used (according to Eurostat/EEA guidance):
Road Transport: Passenger cars.
Energy Balance: Fossil gasoline consumption.
Key Characteristics:
Blended Fuel: With additives.
High Energy: For vehicle performance.
EU Standards: Quality regulated.
EU Context:
EU refineries produce base gasoline.
Eurostat tracks fossil share in transport.
Declining with biofuels and EVs.`,

    'O4653': `Gasoline-type jet fuel is a kerosene-based fuel for jet engines, similar to diesel but optimized for aviation. It's tracked in Eurostat energy balances under gasoline products.
What it is:
Kerosene fraction for jet turbines.
High flash point and stability.
Aviation-specific fuel.
How it's used (according to Eurostat/EEA guidance):
Aviation: Commercial and military jets.
Energy Balance: Reported under jet fuel.
Key Characteristics:
High Quality: Strict specifications.
Cold Resistant: For high altitudes.
Major Fuel: Global aviation.
EU Context:
Refined in EU or imported.
Eurostat tracks aviation consumption.
Growing with air travel.`,

    'O4660': `Kerosene and middle distillates is an aggregate category for kerosene-type fuels and diesel oils, used for heating, transport, and industry. It's tracked in Eurostat energy balances under refinery products.
What it is:
Middle-range refinery products.
Includes kerosene, diesel, and heating oils.
Major energy carriers.
How it's used (according to Eurostat/EEA guidance):
Transport: Diesel vehicles.
Heating: Kerosene stoves.
Industrial: Process fuels.
Energy Balance: Aggregate middle distillates.
Key Characteristics:
Versatile: Multiple applications.
High Density: Energy efficient.
Global Trade: Major commodity.
EU Context:
EU produces and imports distillates.
Eurostat tracks by use.
Transport dominant.`,

    'O4661XR5230B': `Kerosene-type jet fuel (excluding biofuel portion) is the fossil-based component of jet fuel for aviation. It's tracked separately in Eurostat energy balances for biofuel accounting.
What it is:
Fossil kerosene for jet engines.
Excludes bio-kerosene.
High-performance fuel.
How it's used (according to Eurostat/EEA guidance):
Aviation: Turbine aircraft.
Energy Balance: Fossil jet fuel.
Key Characteristics:
Stable: High temperature resistance.
Low Freeze Point: Aviation safety.
Major Product: Aviation fuel.
EU Context:
EU refineries produce base fuel.
Eurostat tracks fossil share.
Biofuel blending increasing.`,

    'O4669': `Other kerosene includes kerosene products not classified as jet fuel, used for heating and lighting. It's tracked in Eurostat energy balances under middle distillates.
What it is:
Kerosene for non-aviation uses.
Includes heating and lamp oil.
Traditional fuel.
How it's used (according to Eurostat/EEA guidance):
Heating: Portable heaters.
Lighting: Lamps in remote areas.
Energy Balance: Reported under other kerosene.
Key Characteristics:
Clean Burning: For indoor use.
Low Sulfur: Quality standards.
Declining Use: Replaced by electricity.
EU Context:
Used in rural and developing areas.
Eurostat tracks niche consumption.
Minor component.`,

    'O4671XR5220B': `Gas oil and diesel oil (excluding biofuel portion) is the fossil-based diesel fuel for compression-ignition engines. It's tracked separately in Eurostat energy balances for biofuel isolation.
What it is:
Fossil diesel for vehicles and heating.
Excludes biodiesel.
Major transport fuel.
How it's used (according to Eurostat/EEA guidance):
Road Transport: Trucks and cars.
Heating: Industrial boilers.
Energy Balance: Fossil diesel consumption.
Key Characteristics:
High Cetane: For engine starting.
Blended: With additives.
EU Standards: Emission controls.
EU Context:
EU refineries produce diesel.
Eurostat tracks fossil share.
Declining with EVs and biofuels.`,

    'O4680': `Fuel oil is a heavy residual oil from refining, used for heating and industrial processes. It's tracked in Eurostat energy balances under refinery products.
What it is:
Heavy oil residue from distillation.
High viscosity and sulfur.
Low-value product.
How it's used (according to Eurostat/EEA guidance):
Industrial Heating: Boilers and furnaces.
Marine: Bunker fuel.
Energy Balance: Reported under fuel oil.
Key Characteristics:
High Sulfur: Environmental concern.
Low Price: Bottom of barrel.
Declining Use: Due to regulations.
EU Context:
Used in industry and shipping.
Eurostat tracks consumption.
Phased out in many uses.`,

    'O4690': `Other petroleum products is an aggregate for miscellaneous refined products like lubricants, waxes, and coke. It's tracked in Eurostat energy balances under oil products.
What it is:
Non-fuel refinery outputs.
Includes lubricants, bitumen, coke.
Specialty products.
How it's used (according to Eurostat/EEA guidance):
Industrial: Lubrication and construction.
Energy Balance: Aggregate other products.
Key Characteristics:
Diverse: Various applications.
Low Volume: Compared to fuels.
Byproducts: From refining.
EU Context:
Produced in EU refineries.
Eurostat aggregates in balances.
Stable demand.`,

    'O4691': `White spirit and SBP spirits are solvents and thinners used in paints, varnishes, and cleaning. They are tracked in Eurostat energy balances under other petroleum products.
What it is:
Light hydrocarbon solvents.
Includes mineral spirits and special boiling point spirits.
Refinery products.
How it's used (according to Eurostat/EEA guidance):
Paints: Thinners and solvents.
Cleaning: Industrial degreasers.
Energy Balance: Reported under solvents.
Key Characteristics:
Volatile: Low boiling.
Non-toxic: Compared to alternatives.
Specialized: Paint industry.
EU Context:
Produced in petrochemical plants.
Eurostat tracks industrial use.
Stable market.`,

    'O4692': `Lubricants are oils and greases used for machinery lubrication, derived from petroleum refining. They are tracked in Eurostat energy balances under other products.
What it is:
Refined oils for friction reduction.
Includes motor oils and industrial lubricants.
Additive-blended.
How it's used (according to Eurostat/EEA guidance):
Machinery: Engines and equipment.
Energy Balance: Reported under lubricants.
Key Characteristics:
Viscous: Tailored viscosity.
Additives: Performance enhancers.
Recycled: Often reused.
EU Context:
Major consumer of lubricants.
Eurostat tracks production and imports.
Growing with machinery use.`,

    'O4693': `Paraffin waxes are solid hydrocarbons used in candles, packaging, and coatings. They are tracked in Eurostat energy balances under other petroleum products.
What it is:
Crystalline hydrocarbons from refining.
Solid at room temperature.
Various melting points.
How it's used (according to Eurostat/EEA guidance):
Packaging: Food and industrial.
Candles: Household products.
Coatings: Protective layers.
Energy Balance: Reported under waxes.
Key Characteristics:
Solid: Easy to handle.
Inert: Chemical stability.
Byproduct: From dewaxing.
EU Context:
Produced in refineries.
Eurostat tracks specialty use.
Niche but stable.`,

    'O4694': `Petroleum coke is a solid carbon residue from oil refining, used as fuel or in aluminum production. It's tracked in Eurostat energy balances under other products.
What it is:
Carbon-rich solid from coking.
High carbon, low ash.
Two types: fuel and anode grade.
How it's used (according to Eurostat/EEA guidance):
Fuel: Industrial boilers.
Aluminum: Anode production.
Energy Balance: Reported under coke.
Key Characteristics:
High Carbon: Energy dense.
Low Value: Fuel grade.
Byproduct: From heavy oil processing.
EU Context:
Imported for aluminum industry.
Eurostat tracks use in industry.
Growing with refining.`,

    'O4695': `Bitumen is a viscous petroleum product used in road construction and roofing. It's tracked in Eurostat energy balances under other petroleum products.
What it is:
Heavy hydrocarbon residue.
Used as binder in asphalt.
Refinery product.
How it's used (according to Eurostat/EEA guidance):
Roads: Asphalt concrete.
Roofing: Waterproofing.
Energy Balance: Reported under bitumen.
Key Characteristics:
Viscous: Heated for application.
Durable: Long-lasting.
Major Use: Construction.
EU Context:
Produced in EU refineries.
Eurostat tracks construction demand.
Stable with infrastructure.`,

    'O4699': `Other oil products n.e.c. includes miscellaneous petroleum products not elsewhere classified, such as greases and specialty oils. It's tracked in Eurostat energy balances.
What it is:
Residual category for oil products.
Includes greases, insulating oils.
Not standardized.
How it's used (according to Eurostat/EEA guidance):
Specialty: Various industrial uses.
Energy Balance: Aggregate residual.
Key Characteristics:
Miscellaneous: Diverse items.
Low Volume: Minor products.
Byproduct: From refining.
EU Context:
Aggregated in statistics.
Eurostat uses for completeness.
Minor component.`,

    'RA000': `Renewables and biofuels encompass all renewable energy sources, including hydro, wind, solar, geothermal, and bioenergy. This aggregate category is tracked in Eurostat energy balances to monitor the transition to sustainable energy.
What it is:
All renewable energy forms.
Includes primary (hydro, wind) and secondary (biofuels).
Excludes fossil-based.
How it's used (according to Eurostat/EEA guidance):
Energy Supply: Electricity and heat.
Energy Balance: Aggregate renewables.
Key Characteristics:
Sustainable: Low carbon emissions.
Variable: Weather-dependent.
Growing Share: EU policy focus.
EU Context:
EU leads in renewables adoption.
Eurostat tracks progress toward 2030 targets.
Major component of energy mix.`,

    'RA100': `Hydro power is electricity generated from water flow in dams, rivers, and reservoirs. It's a primary renewable tracked in Eurostat energy balances.
What it is:
Electricity from kinetic energy of water.
Includes large dams and small run-of-river.
Clean and renewable.
How it's used (according to Eurostat/EEA guidance):
Electricity Generation: Grid supply.
Energy Balance: Reported under hydro.
Key Characteristics:
Reliable: Base load power.
Storage: Pumped hydro for storage.
Environmental: Ecosystem impacts.
EU Context:
Major in Norway, Austria, Sweden.
Eurostat tracks generation and capacity.
Stable but mature.`,

    'RA200': `Geothermal energy is heat from the Earth's interior, used for electricity and heating. It's tracked in Eurostat energy balances under renewables.
What it is:
Thermal energy from underground.
Used for power and direct heat.
Renewable and constant.
How it's used (according to Eurostat/EEA guidance):
Electricity: Steam turbines.
Heating: District heating.
Energy Balance: Reported under geothermal.
Key Characteristics:
Constant: Not weather-dependent.
High Efficiency: Direct use.
Limited Sites: Geological constraints.
EU Context:
Used in Iceland, Italy, Turkey.
Eurostat tracks geothermal use.
Growing in heating.`,

    'RA300': `Wind energy is electricity generated from wind turbines, a primary renewable source. It's tracked in Eurostat energy balances.
What it is:
Kinetic energy from wind converted to electricity.
Onshore and offshore turbines.
Clean and scalable.
How it's used (according to Eurostat/EEA guidance):
Electricity: Grid integration.
Energy Balance: Reported under wind.
Key Characteristics:
Variable: Intermittent supply.
Low Cost: Competitive with fossils.
High Growth: Rapid expansion.
EU Context:
EU leader in wind capacity.
Eurostat tracks onshore/offshore.
Major renewable source.`,

    'RA400': `Solar energy is electricity and heat from sunlight, using photovoltaic panels and thermal collectors. It's tracked in Eurostat energy balances.
What it is:
Radiant energy from sun.
PV for electricity, thermal for heat.
Renewable and abundant.
How it's used (according to Eurostat/EEA guidance):
Electricity: PV panels.
Heating: Solar thermal.
Energy Balance: Aggregate solar.
Key Characteristics:
Intermittent: Day/night cycle.
Distributed: Rooftop potential.
Low Maintenance: Long life.
EU Context:
Rapid growth in EU.
Eurostat tracks PV and thermal.
Key for decarbonization.`,

    'RA410': `Solar thermal energy is heat captured from sunlight using collectors for water heating and space heating. It's tracked in Eurostat energy balances under solar.
What it is:
Thermal energy from concentrated sunlight.
Collectors for hot water and heat.
Direct use application.
How it's used (according to Eurostat/EEA guidance):
Heating: Buildings and industry.
Energy Balance: Reported under solar thermal.
Key Characteristics:
Efficient: Direct heat use.
Storage: Thermal storage possible.
Complementary: To PV.
EU Context:
Used in Spain, Greece.
Eurostat tracks thermal installations.
Growing in heating sector.`,

    'RA420': `Solar photovoltaic energy is electricity generated from semiconductor panels converting sunlight. It's tracked in Eurostat energy balances under solar.
What it is:
Electricity from PV cells.
Silicon-based panels.
Modular and scalable.
How it's used (according to Eurostat/EEA guidance):
Electricity: Residential and utility.
Energy Balance: Reported under PV.
Key Characteristics:
No Moving Parts: Low maintenance.
Scalable: From kW to GW.
Grid Integration: Inverters needed.
EU Context:
EU has high PV capacity.
Eurostat tracks installations and generation.
Fastest growing renewable.`,

    'RA500': `Tide, wave, and ocean energy is electricity from ocean movements, including tidal and wave power. It's tracked in Eurostat energy balances under renewables.
What it is:
Energy from tides, waves, currents.
Emerging technologies.
High potential but early stage.
How it's used (according to Eurostat/EEA guidance):
Electricity: Marine turbines.
Energy Balance: Reported under ocean.
Key Characteristics:
Predictable: Tidal cycles.
High Density: Concentrated energy.
Technological: R&D intensive.
EU Context:
Pilot projects in UK, France.
Eurostat tracks emerging technologies.
Potential for coastal areas.`,

    'RA600': `Ambient heat (heat pumps) is thermal energy extracted from air, water, or ground using heat pumps for heating and cooling. It's tracked in Eurostat energy balances.
What it is:
Low-grade heat from environment.
Amplified by heat pumps.
Renewable and efficient.
How it's used (according to Eurostat/EEA guidance):
Heating: Buildings.
Cooling: Air conditioning.
Energy Balance: Reported under heat pumps.
Key Characteristics:
Efficient: COP >3.
Versatile: Multiple sources.
Low Carbon: Reduces fossil use.
EU Context:
Growing in EU buildings.
Eurostat tracks heat pump installations.
Key for heating decarbonization.`,

    'R5000': `Biofuels are fuels from biological sources, including solid, liquid, and gaseous bioenergy. They are tracked in Eurostat energy balances under renewables.
What it is:
Energy from biomass conversion.
Includes ethanol, biodiesel, biogas.
Sustainable alternative to fossils.
How it's used (according to Eurostat/EEA guidance):
Transport: Bioethanol, biodiesel.
Heating: Biomass pellets.
Energy Balance: Aggregate biofuels.
Key Characteristics:
Carbon Neutral: Lifecycle emissions.
Diverse: Feedstocks vary.
Blended: With fossils.
EU Context:
EU promotes biofuels for transport.
Eurostat tracks production and use.
Growing with sustainability.`,

    'R5100': `Solid biofuels are biomass fuels like wood, pellets, and agricultural residues used for heating and electricity. They are tracked in Eurostat energy balances.
What it is:
Solid biomass for combustion.
Includes wood chips, pellets.
Traditional and modern forms.
How it's used (according to Eurostat/EEA guidance):
Heating: Residential boilers.
Electricity: Biomass plants.
Energy Balance: Reported under solid biofuels.
Key Characteristics:
Renewable: From forests/agriculture.
Low Cost: Local sourcing.
Emissions: CO2 neutral.
EU Context:
Major in Nordic countries.
Eurostat tracks consumption.
Stable demand.`,

    'R5110-5150_W6000RI': `Primary solid biofuels are unprocessed biomass like wood and straw used directly as fuel. They are tracked in Eurostat energy balances.
What it is:
Raw biomass fuels.
Includes firewood, straw, husks.
Direct from nature/agriculture.
How it's used (according to Eurostat/EEA guidance):
Heating: Traditional stoves.
Energy Balance: Reported under primary biofuels.
Key Characteristics:
Low Processing: Natural state.
Variable Quality: Moisture affects.
Sustainable: If managed.
EU Context:
Used in rural areas.
Eurostat tracks forestry/agricultural residues.
Declining with modern fuels.`,

    'R5160': `Charcoal is carbonized biomass used for cooking and industrial processes. It's tracked in Eurostat energy balances under solid biofuels.
What it is:
Carbon-rich solid from biomass pyrolysis.
High energy density.
Traditional fuel.
How it's used (according to Eurostat/EEA guidance):
Cooking: Developing countries.
Industrial: Metallurgy.
Energy Balance: Reported under charcoal.
Key Characteristics:
High Calorific: Efficient burning.
Transportable: Easy storage.
Byproduct: From forestry.
EU Context:
Minor in EU energy.
Eurostat tracks specialty use.
Niche product.`,

    'R5200': `Liquid biofuels are fuels like bioethanol and biodiesel from biomass conversion. They are tracked in Eurostat energy balances.
What it is:
Liquid fuels from fermentation/transesterification.
Drop-in replacements for gasoline/diesel.
Renewable transport fuels.
How it's used (according to Eurostat/EEA guidance):
Transport: Blended with fossils.
Energy Balance: Aggregate liquid biofuels.
Key Characteristics:
Compatible: Existing engines.
Sustainable: Feedstock dependent.
Blended: Regulatory mandates.
EU Context:
EU requires biofuel blending.
Eurostat tracks production and imports.
Growing sector.`,

    'R5210': `Biogasoline is ethanol and other alcohols used as gasoline substitutes. It's tracked in Eurostat energy balances under liquid biofuels.
What it is:
Alcohol-based fuels for spark engines.
Mainly bioethanol from crops.
Oxygenated fuel.
How it's used (according to Eurostat/EEA guidance):
Transport: Gasoline blends.
Energy Balance: Reported under biogasoline.
Key Characteristics:
High Octane: Performance boost.
Hygroscopic: Absorbs water.
Feedstock: Corn, sugarcane.
EU Context:
Blended in EU gasoline.
Eurostat tracks biofuel share.
Advanced biofuels emerging.`,

    'R5210P': `Pure biogasoline is undiluted bioethanol used in flex-fuel vehicles. It's tracked in Eurostat energy balances.
What it is:
100% bioethanol.
For dedicated or flex engines.
High purity.
How it's used (according to Eurostat/EEA guidance):
Transport: E85 blends.
Energy Balance: Reported under pure biogasoline.
Key Characteristics:
Corrosive: Requires compatible materials.
Energy Dense: Similar to gasoline.
Infrastructure: Special pumps.
EU Context:
Used in Brazil, US.
Eurostat tracks niche use.
Limited in EU.`,

    'R5210B': `Blended biogasoline is bioethanol mixed with gasoline for standard vehicles. It's tracked in Eurostat energy balances.
What it is:
Ethanol-gasoline blends (E5-E10).
Compatible with existing cars.
Major biofuel.
How it's used (according to Eurostat/EEA guidance):
Transport: Standard gasoline.
Energy Balance: Reported under blended.
Key Characteristics:
Low Blend: 5-10% ethanol.
Compatible: No engine changes.
Regulatory: Mandated in many countries.
EU Context:
EU requires biofuel blending.
Eurostat tracks fossil/bio split.
Common fuel.`,

    'R5220': `Biodiesels are fatty acid methyl esters from vegetable oils or animal fats, used as diesel substitutes. They are tracked in Eurostat energy balances.
What it is:
Ester-based fuels for compression engines.
From rapeseed, soybean, waste oils.
Drop-in diesel.
How it's used (according to Eurostat/EEA guidance):
Transport: Diesel blends.
Energy Balance: Aggregate biodiesels.
Key Characteristics:
Cetane Boost: Better ignition.
Lubricity: Improves diesel.
Cold Properties: Viscosity issues.
EU Context:
Major in EU transport.
Eurostat tracks production from crops.
Advanced biodiesels growing.`,

    'R5220P': `Pure biodiesels are undiluted biodiesel for dedicated engines. It's tracked in Eurostat energy balances.
What it is:
100% biodiesel (B100).
For modified engines.
High purity.
How it's used (according to Eurostat/EEA guidance):
Transport: Biodiesel vehicles.
Energy Balance: Reported under pure.
Key Characteristics:
Viscous: Cold flow issues.
Biodegradable: Environmental benefit.
Infrastructure: Limited.
EU Context:
Niche in EU.
Eurostat tracks specialty use.
Limited adoption.`,

    'R5220B': `Blended biodiesels are biodiesel mixed with diesel for standard engines. It's tracked in Eurostat energy balances.
What it is:
Biodiesel-diesel blends (B5-B20).
Compatible with existing vehicles.
Major biofuel.
How it's used (according to Eurostat/EEA guidance):
Transport: Standard diesel.
Energy Balance: Reported under blended.
Key Characteristics:
Low Blend: 5-7% in EU.
Compatible: No modifications.
Regulatory: Mandated blending.
EU Context:
EU requires biodiesel in diesel.
Eurostat tracks fossil/bio split.
Common fuel.`,

    'R5230': `Bio jet kerosene is sustainable aviation fuel from biomass, used in jet engines. It's tracked in Eurostat energy balances.
What it is:
Drop-in jet fuel from bio-sources.
HEFA or alcohol-to-jet processes.
Carbon neutral.
How it's used (according to Eurostat/EEA guidance):
Aviation: Blended with fossil jet fuel.
Energy Balance: Aggregate bio jet.
Key Characteristics:
Compatible: Existing aircraft.
High Quality: Aviation standards.
Emerging: Technology developing.
EU Context:
EU promotes SAF for aviation.
Eurostat tracks production and use.
Growing with climate goals.`,

    'R5230P': `Pure bio jet kerosene is undiluted sustainable aviation fuel. It's tracked in Eurostat energy balances.
What it is:
100% bio-derived jet fuel.
For dedicated use.
High purity.
How it's used (according to Eurostat/EEA guidance):
Aviation: Pure SAF flights.
Energy Balance: Reported under pure.
Key Characteristics:
Performance: Matches fossil.
Certification: ASTM standards.
Cost: Higher than fossil.
EU Context:
Demonstration flights.
Eurostat tracks emerging use.
Limited but growing.`,

    'R5230B': `Blended bio jet kerosene is SAF mixed with fossil jet fuel. It's tracked in Eurostat energy balances.
What it is:
SAF-fossil blends.
Compatible with existing fleets.
Major pathway.
How it's used (according to Eurostat/EEA guidance):
Aviation: Standard operations.
Energy Balance: Reported under blended.
Key Characteristics:
Low Blend: 10-50% initially.
Compatible: No changes needed.
Regulatory: CORSIA, EU rules.
EU Context:
EU requires SAF blending.
Eurostat tracks biofuel share.
Key for aviation decarbonization.`,

    'R5290': `Other liquid biofuels include advanced biofuels not classified elsewhere, like cellulosic ethanol. They are tracked in Eurostat energy balances.
What it is:
Emerging liquid biofuels.
From waste, algae, etc.
Advanced feedstocks.
How it's used (according to Eurostat/EEA guidance):
Transport: Niche applications.
Energy Balance: Aggregate other liquids.
Key Characteristics:
Advanced: Non-food feedstocks.
Sustainability: High potential.
Emerging: Technology maturing.
EU Context:
EU promotes advanced biofuels.
Eurostat tracks R&D and production.
Growing sector.`,

    'R5300': `Biogases are methane-rich gases from anaerobic digestion of biomass, used for heat and electricity. They are tracked in Eurostat energy balances.
What it is:
Methane from organic waste digestion.
Includes landfill gas, sewage gas.
Renewable gas.
How it's used (according to Eurostat/EEA guidance):
Electricity: CHP plants.
Heating: Injection to gas grid.
Energy Balance: Reported under biogases.
Key Characteristics:
Methane Rich: 50-70% CH4.
Upgrading: For grid injection.
Circular: From waste.
EU Context:
EU promotes biogas for gas grid.
Eurostat tracks production from waste.
Growing with circular economy.`,

    'W6100_6220': `Non-renewable waste includes industrial and municipal waste with fossil carbon content, used for energy recovery. It's tracked in Eurostat energy balances.
What it is:
Waste with fossil origin.
Includes plastics, oils in waste.
Energy from incineration.
How it's used (according to Eurostat/EEA guidance):
Electricity/Heat: Waste-to-energy plants.
Energy Balance: Aggregate non-renewable waste.
Key Characteristics:
Fossil Carbon: CO2 emissions.
Recovery: Reduces landfill.
Variable: Composition depends on waste.
EU Context:
EU waste hierarchy prioritizes recycling.
Eurostat tracks energy from waste.
Declining with recycling.`,

    'W6100': `Industrial waste (non-renewable) is fossil-based waste from manufacturing, used in energy recovery. It's tracked in Eurostat energy balances.
What it is:
Fossil waste from industry.
Includes solvents, oils, plastics.
Hazardous potential.
How it's used (according to Eurostat/EEA guidance):
Energy Recovery: Incineration.
Energy Balance: Reported under industrial waste.
Key Characteristics:
Hazardous: Toxic components.
Energy Dense: High calorific.
Treatment: Specialized plants.
EU Context:
Regulated under waste directives.
Eurostat tracks industrial waste energy.
Minor but specialized.`,

    'W6200': `Municipal waste is household and commercial waste, including fossil plastics, used for energy. It's tracked in Eurostat energy balances.
What it is:
Mixed waste from municipalities.
Includes paper, plastics, organics.
Sorted or unsorted.
How it's used (according to Eurostat/EEA guidance):
Incineration: Energy recovery.
Energy Balance: Aggregate municipal waste.
Key Characteristics:
Mixed: Variable composition.
Renewable/Non-renewable: Split tracked.
Emissions: Controlled.
EU Context:
EU promotes waste-to-energy.
Eurostat tracks municipal waste use.
Growing with recycling.`,

    'W6210': `Renewable municipal waste is the biodegradable portion of municipal waste, used for biogas or composting. It's tracked in Eurostat energy balances.
What it is:
Organic fraction of waste.
Food, paper, garden waste.
Biodegradable.
How it's used (according to Eurostat/EEA guidance):
Biogas: Anaerobic digestion.
Composting: Soil amendment.
Energy Balance: Reported under renewable waste.
Key Characteristics:
Biodegradable: Methane potential.
Circular: Nutrient recovery.
Collection: Separate bins.
EU Context:
EU targets separate collection.
Eurostat tracks renewable waste energy.
Growing with organics.`,

    'W6220': `Non-renewable municipal waste is the fossil portion, like plastics, used for incineration. It's tracked in Eurostat energy balances.
What it is:
Non-biodegradable waste.
Plastics, metals, glass.
Fossil carbon.
How it's used (according to Eurostat/EEA guidance):
Incineration: Energy recovery.
Energy Balance: Reported under non-renewable waste.
Key Characteristics:
Non-degradable: Persistent.
Energy Recovery: High calorific.
Recycling: Preferred over burning.
EU Context:
EU reduces plastic waste.
Eurostat tracks fossil waste energy.
Declining with bans.`,

    'N900H': `Nuclear heat is thermal energy from nuclear reactions, used for district heating or industrial processes. It's tracked in Eurostat energy balances.
What it is:
Heat from nuclear fission.
Byproduct of electricity generation.
High temperature heat.
How it's used (according to Eurostat/EEA guidance):
Heating: District systems.
Industrial: Process heat.
Energy Balance: Reported under nuclear heat.
Key Characteristics:
High Temperature: For industrial use.
Low Carbon: No CO2 emissions.
Safety: Regulatory oversight.
EU Context:
Used in some reactors.
Eurostat tracks nuclear heat production.
Limited but stable.`,

    'E7000': `Electricity is electrical energy from all sources, used across all sectors. It's tracked in Eurostat energy balances as final energy.
What it is:
Electrical power for end use.
From generation to consumption.
Universal carrier.
How it's used (according to Eurostat/EEA guidance):
All Sectors: Lighting, motors, electronics.
Energy Balance: Final consumption.
Key Characteristics:
Efficient: Low losses in transmission.
Flexible: Multiple sources.
Grid Dependent: Infrastructure needed.
EU Context:
EU electricity from renewables growing.
Eurostat tracks generation and consumption.
Key for decarbonization.`,

    'H8000': `Derived heat is thermal energy from combined heat and power or district heating systems. It's tracked in Eurostat energy balances.
What it is:
Heat from cogeneration or networks.
Waste heat recovery.
Efficient energy use.
How it's used (according to Eurostat/EEA guidance):
Heating: Buildings and industry.
Energy Balance: Reported under derived heat.
Key Characteristics:
Efficient: Utilizes waste heat.
Networks: District systems.
Renewable: If from renewables.
EU Context:
EU promotes CHP.
Eurostat tracks heat production and use.
Growing in cities.`
};

export default definitions; 