import mongoose from "mongoose";

const feePaymentSchema = new mongoose.Schema({
  enrollmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Enrollment", required: true },

  amountPaid: { type: Number, required: true },
  mode: { type: String, enum: ["cash", "upi"], required: true }, // offline only

  receiptNumber: { type: String, required: true, unique: true },

}, { timestamps: true });

export default mongoose.model("FeePayment", feePaymentSchema);
