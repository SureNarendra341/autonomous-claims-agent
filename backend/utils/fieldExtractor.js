export const extractFields = (text) => {
  const find = (label) => {
    const regex = new RegExp(`${label}:?\\s*(.*)`, "i");
    const match = text.match(regex);
    return match ? match[1].trim() : null;
  };

  return {
    policyInformation: {
      policyNumber: find("POLICY NUMBER"),
      policyholderName: find("NAME OF INSURED"),
      effectiveDates: find("EFFECTIVE DATE"),
    },
    incidentInformation: {
      date: find("DATE OF LOSS"),
      time: find("TIME"),
      location: find("LOCATION OF LOSS"),
      description: find("DESCRIPTION OF ACCIDENT"),
    },
    involvedParties: {
      claimant: find("CLAIMANT"),
      thirdParties: find("THIRD PARTIES"),
      contactDetails: find("CONTACT"),
    },
    assetDetails: {
      assetType: find("TYPE"),
      assetId: find("V.I.N."),
      estimatedDamage: find("ESTIMATE AMOUNT"),
    },
    otherMandatoryFields: {
      claimType: find("CLAIM TYPE"),
      attachments: find("ATTACHMENTS"),
      initialEstimate: find("INITIAL ESTIMATE"),
    }
  };
};
