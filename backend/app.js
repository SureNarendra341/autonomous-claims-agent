import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import claimsRoutes from "./routes/claimsRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "*",
}));
app.use(express.json());

app.use("/api/claims", claimsRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
