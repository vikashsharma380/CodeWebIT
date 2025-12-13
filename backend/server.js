import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import courseRoutes from "./routes/fees/courses.js";
import batchRoutes from "./routes/fees/batches.js";
import enrollmentRoutes from "./routes/fees/enrollments.js";
import paymentRoutes from "./routes/fees/payments.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/fees/courses", courseRoutes);
app.use("/api/fees/batches", batchRoutes);
app.use("/api/fees/enrollments", enrollmentRoutes);
app.use("/api/fees/payments", paymentRoutes);



// Test Route
app.get("/", (req, res) => {
  res.send({ ok: true, message: "Backend is running" });
});

// MongoDB + Server Start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err);
  });
