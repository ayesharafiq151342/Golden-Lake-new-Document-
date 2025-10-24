import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// connect MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// simple test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// listen on all interfaces
app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Server running on port 3000");
});
