import express from "express";
import FeePayment from "../../models/FeePayment.js";
import Enrollment from "../../models/Enrollment.js";

const router = express.Router();

router.post("/pay", async (req, res) => {
  try {
    const { enrollmentId, amount, installmentIndex, mode } = req.body;

    const enrollment = await Enrollment.findById(enrollmentId);
    if (!enrollment)
      return res.status(404).json({ message: "Enrollment not found" });

    const installment = enrollment.installments[installmentIndex];
    if (!installment)
      return res.status(400).json({ message: "Invalid installment" });

    if (installment.paid)
      return res.status(400).json({ message: "Installment already paid" });

    // generate receipt number
    const receiptNumber = "RCPT" + Date.now();

    // create payment entry
    const payment = await FeePayment.create({
      enrollmentId,
      amountPaid: amount,
      mode,
      receiptNumber,
    });

    // update installment
    installment.paid = true;
    installment.paidAt = new Date();
    installment.paymentId = payment._id;

    enrollment.paidAmount += amount;
    await enrollment.save();

    res.json({
      message: "Payment recorded successfully",
      payment,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Payment error" });
  }
});

export default router;
