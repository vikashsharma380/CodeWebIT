import express from "express";
import Enrollment from "../../models/Enrollment.js";
import Course from "../../models/Course.js";
import { authenticate } from "../../middleware/authMiddleware.js";
import crypto from "crypto";

const router = express.Router();

// helper: generate installment plan (simple equal installments)
function createInstallments(totalMinusReg, count, startDate = new Date()) {
  const installments = [];
  const per = Math.round((totalMinusReg / count) * 100) / 100;
  let due = new Date(startDate);
  for (let i = 0; i < count; i++) {
    installments.push({
      dueDate: new Date(due),
      amount: per,
      paid: false
    });
    // add 30 days for next installment
    due.setDate(due.getDate() + 30);
  }
  return installments;
}

// Create enrollment (student chooses course + batch)
router.post("/", async (req, res) => {
  try {
    const { studentId, name, email, mobile, courseId, batchId, installmentCount = 1 } = req.body;
    const course = await Course.findById(courseId);
    if (!course) return res.status(400).json({ message: "Invalid course" });

    const total = course.totalFee;
    const reg = course.registrationFee || 0;
    const remaining = total - reg;

    const installments = createInstallments(remaining, installmentCount, new Date());

    const enrollment = await Enrollment.create({
      studentId,
      name, email, mobile,
      courseId, batchId,
      totalFee: total,
      registrationFee: reg,
      installments,
      paidAmount: 0
    });

    res.status(201).json({ enrollment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create enrollment" });
  }
});

router.get("/:id", async (req, res) => {
  const enroll = await Enrollment.findById(req.params.id)
    .populate("courseId")
    .populate("batchId")
    .populate("installments.paymentId");
  if (!enroll) return res.status(404).json({ message: "Not found" });
  res.json(enroll);
});

export default router;
