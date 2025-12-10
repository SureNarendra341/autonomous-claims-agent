import express from "express";
import upload from "../middleware/upload.js";
import { processClaim } from "../controllers/claimsController.js";

const router = express.Router();

router.post("/process", upload, processClaim);

export default router;
