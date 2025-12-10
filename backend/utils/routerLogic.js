export const applyRoutingLogic = (fields) => {
  let missing = [];

  Object.values(fields).forEach(group => {
    Object.entries(group).forEach(([key, value]) => {
      if (!value) missing.push(key);
    });
  });

  let route = "Manual Review";
  let reason = "Mandatory fields are missing.";

  const damage = fields.assetDetails.estimatedDamage
    ? Number(fields.assetDetails.estimatedDamage.replace(/[^0-9]/g, ""))
    : null;

  // Fast-track rule
  if (damage && damage < 25000) {
    route = "Fast-track";
    reason = "Damage below threshold.";
  }

  // Specialist queue rule
  if (fields.otherMandatoryFields.claimType === "injury") {
    route = "Specialist Queue";
    reason = "Injury claim requires specialist handling.";
  }

  // Fraud keyword rule
  if (
    fields.incidentInformation.description &&
    /(fraud|inconsistent|staged)/i.test(fields.incidentInformation.description)
  ) {
    route = "Investigation Flag";
    reason = "Suspicious keywords found in description.";
  }

  if (missing.length > 0) {
    route = "Manual Review";
    reason = "Missing mandatory fields.";
  }

  return { missing, route, reason };
};
