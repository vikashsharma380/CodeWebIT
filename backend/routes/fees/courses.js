import express from "express";
import Course from "../../models/Course.js";

const router = express.Router();

// GET all courses
router.get("/", async (req, res) => {
  const courses = await Course.find().sort({ createdAt: -1 });
  res.json(courses);
});

// GET single course
router.get("/:id", async (req, res) => {
  const c = await Course.findById(req.params.id);
  if (!c) return res.status(404).json({ message: "Course not found" });
  res.json(c);
});

// CREATE course
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: "Failed to add course" });
  }
});

// UPDATE course
router.put("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Failed to update course" });
  }
});

// DELETE course
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete course" });
  }
});

export default router;
