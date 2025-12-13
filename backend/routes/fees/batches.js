import express from "express";
import Batch from "../../models/Batch.js";

const router = express.Router();

// GET all batches (filter by course)
router.get("/", async (req, res) => {
  const { courseId } = req.query;
  const filter = {};
  if (courseId) filter.courseId = courseId;

  const batches = await Batch.find(filter).sort({ createdAt: -1 });
  res.json(batches);
});

// CREATE batch (POST)
router.post("/", async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    res.status(201).json(batch);
  } catch (err) {
    console.log("BATCH CREATE ERROR:", err.message);
    res.status(500).json({ message: "Failed to create batch" });
  }
});

// UPDATE batch (PUT)
router.put("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!batch) return res.status(404).json({ message: "Batch not found" });

    res.json(batch);
  } catch (err) {
    console.log("BATCH UPDATE ERROR:", err.message);
    res.status(500).json({ message: "Failed to update batch" });
  }
});

// DELETE batch
router.delete("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);

    if (!batch) return res.status(404).json({ message: "Batch not found" });

    res.json({ message: "Batch deleted" });
  } catch (err) {
    console.log("BATCH DELETE ERROR:", err.message);
    res.status(500).json({ message: "Failed to delete batch" });
  }
});

export default router;
