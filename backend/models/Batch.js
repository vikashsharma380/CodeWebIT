import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  name: { type: String, required: true }, // "Morning 10AM"
  timing: String,
  seats: Number
}, { timestamps: true });

export default mongoose.model("Batch", batchSchema);
