import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  totalFee: { type: Number, required: true },
  registrationFee: { type: Number, default: 0 },
  duration: String
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
