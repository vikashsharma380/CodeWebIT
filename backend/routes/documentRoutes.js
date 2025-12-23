import express from "express";
import Document from "../models/Document.js";
import Counter from "../models/Counter.js";
import { DOCUMENT_TYPES } from "../utils/documentTypes.js";


const router = express.Router();

async function getNextDocumentNo(typeKey) {
  const type = Object.values(DOCUMENT_TYPES).find(
    (t) => t.key === typeKey
  );

  if (!type) {
    throw new Error("Invalid document type");
  }

  const counter = await Counter.findOneAndUpdate(
    { name: `doc_${typeKey}` },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  const padded = String(counter.seq).padStart(4, "0");
  const year = new Date().getFullYear();

  return `${type.prefix}-${year}-${padded}`;
}

// ✅ CREATE DOCUMENT (Certificate / Marksheet)
router.post("/", async (req, res) => {
  try {
    const { documentType } = req.body;

    if (!documentType) {
      return res.status(400).json({
        success: false,
        message: "documentType is required",
      });
    }

    const documentNo = await getNextDocumentNo(documentType);

    const doc = new Document({
      ...req.body,
      documentNo,
      issueDate:
        req.body.issueDate ||
        new Date().toLocaleDateString("en-GB"),
    });

    await doc.save();

    res.json({
      success: true,
      documentNo,
      documentId: doc._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Server error",
    });
  }
});


// ✅ GET ALL DOCUMENTS (Admin List)
router.get("/", async (req, res) => {
  try {
    const documents = await Document.find()
      .sort({ createdAt: -1 }); // latest first

    res.json({
      success: true,
      list: documents,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});




export default router;
