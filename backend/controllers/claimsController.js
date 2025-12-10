import Claim from "../models/Claim.js";
import { extractPdfText } from "../utils/pdfExtractor.js";
import { extractFields } from "../utils/fieldExtractor.js";
import { applyRoutingLogic } from "../utils/routerLogic.js";

export const processClaim = async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Step 1: Convert PDF → Raw text
    const pdfText = await extractPdfText(req.file.buffer);
    console.log("Extracted PDF Text:", pdfText);

    // Step 2: Extract fields from the PDF text
    const extractedFields = extractFields(pdfText);
    console.log("Extracted Fields:", extractedFields);

    // Step 3: Apply insurance routing rules
    const routing = applyRoutingLogic(extractedFields);
    console.log("Routing Decision:", routing);

    // Step 4: Save result into DB
    const saved = await Claim.create({
      extractedFields,
      missingFields: routing.missing,
      recommendedRoute: routing.route,
      reasoning: routing.reason
    });

    return res.json({
      message: "Claim processed successfully",
      data: saved
    });

  } catch (err) {
    console.error("PROCESS_CLAIM_ERROR:", err);

    return res.status(500).json({
      error: "Failed to process the claim",
      details: err.message
    });
  }
};
