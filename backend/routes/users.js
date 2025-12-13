import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { authenticate, requireRole } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * GET /api/users/summary
 * (already present) - returns counts
 */
router.get(
  "/summary",
  authenticate,
  requireRole("admin", "director", "managing_director", "ceo"),
  async (req, res) => {
    try {
      const totalUsers = await User.countDocuments();
      const students = await User.countDocuments({ role: "student" });
      const teachers = await User.countDocuments({ role: "teacher" });
      const admins = await User.countDocuments({ role: "admin" });

      res.json({ totalUsers, students, teachers, admins });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Dashboard fetch error" });
    }
  }
);

/**
 * GET /api/users
 * Query params:
 *  - page (1-indexed)
 *  - limit
 *  - q (search string matches name/email)
 *  - role (filter by role)
 *
 * Returns: { users: [...], total, page, pages }
 */
router.get(
  "/",
  authenticate,
  requireRole("admin", "director", "managing_director", "ceo"),
  async (req, res) => {
    try {
      const page = Math.max(1, parseInt(req.query.page || "1", 10));
      const limit = Math.max(1, Math.min(100, parseInt(req.query.limit || "10", 10)));
      const q = (req.query.q || "").trim();
      const role = req.query.role || "";

      const filter = {};
      if (q) {
        // case-insensitive partial match for name or email
        filter.$or = [
          { name: { $regex: q, $options: "i" } },
          { email: { $regex: q, $options: "i" } },
        ];
      }
      if (role) filter.role = role;

      const total = await User.countDocuments(filter);
      const pages = Math.ceil(total / limit);
      const skip = (page - 1) * limit;

      const users = await User.find(filter)
        .select("-password")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      res.json({ users, total, page, pages, limit });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  }
);

/**
 * PATCH /api/users/:id
 * Body: { name, email, mobile, role, password? }
 * Only admin+ can edit
 */
router.patch(
  "/:id",
  authenticate,
  requireRole("admin", "director", "managing_director", "ceo"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const updates = { ...req.body };

      // Prevent role escalation to CEO by non-CEO? (optional business rule)
      // Example: only ceo can make another user ceo — implement if needed.

      if (updates.password) {
        updates.password = await bcrypt.hash(updates.password, 10);
      }

      // Do not allow updating _id or createdAt
      delete updates._id;
      delete updates.createdAt;

      const user = await User.findByIdAndUpdate(id, updates, { new: true }).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });

      res.json({ message: "User updated", user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update user" });
    }
  }
);

/**
 * DELETE /api/users/:id
 */
router.delete(
  "/:id",
  authenticate,
  requireRole("admin", "director", "managing_director", "ceo"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ message: "User deleted" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to delete user" });
    }
  }
);

export default router;
