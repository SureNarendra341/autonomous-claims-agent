import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
  extractedFields: Object,
  missingFields: [String],
  recommendedRoute: String,
  reasoning: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Claim", claimSchema);
