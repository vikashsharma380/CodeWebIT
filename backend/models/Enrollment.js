import mongoose from "mongoose";

const installmentSchema = new mongoose.Schema({
  dueDate: Date,
  amount: Number,
  paid: { type: Boolean, default: false },
  paidAt: Date,
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "FeePayment" }
});

const enrollmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // if student logged in
  name: String,   // for guest registration (optional)
  email: String,
  mobile: String,
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true },
  totalFee: { type: Number, required: true },
  registrationFee: { type: Number, default: 0 },
  installments: [installmentSchema],
  paidAmount: { type: Number, default: 0 },
  status: { type: String, enum: ["active","completed","cancelled"], default: "active" }
}, { timestamps: true });

export default mongoose.model("Enrollment", enrollmentSchema);
