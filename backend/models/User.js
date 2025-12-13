import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    mobile: { type: String },

    role: {
      type: String,
      enum: [
        "student",
        "teacher",
        "admin",
        "director",
        "managing_director",
        "ceo"
      ],
      default: "student"
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
