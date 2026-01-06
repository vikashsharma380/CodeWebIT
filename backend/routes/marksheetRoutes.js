import express from "express";
import Marksheet from "../models/Marksheet.js";
import Counter from "../models/Counter.js";

const router = express.Router();

async function getNextMarksheetNo() {
  const counter = await Counter.findOneAndUpdate(
    { name: "marksheet" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  const year = new Date().getFullYear();
  const padded = String(counter.seq).padStart(4, "0");

  return `CWITM${year}${padded}`;
}

// ✅ SAVE MARKSHEET
router.post("/", async (req, res) => {
  try {
    const marksheetNo = await getNextMarksheetNo();

    const ms = new Marksheet({
      ...req.body,
      marksheetNo,
      issueDate: req.body.issueDate || new Date().toLocaleDateString("en-GB"),
    });

    await ms.save();

    res.json({
      success: true,
      marksheetNo,
      id: ms._id,
    });
  } catch (err) {
    console.error("Marksheet Save Error:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default router;
