// Maps fuel family ids to related SIEC codes from nrg_bal_c
// Structure: { familyId, siecCodes: [] }
// NOTE: Most mappings are now in the fuelFamilies hierarchy itself
// Only keep mappings for codes that appear at leaf level

const fuelSiecMapping = [
    // No additional mappings needed - all codes are in fuelFamilies tree
];

export default fuelSiecMapping;
