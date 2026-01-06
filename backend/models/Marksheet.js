import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  objOut: Number,
  objScored: Number,
  pracOut: Number,
  pracScored: Number,
}, { _id: false });

const marksheetSchema = new mongoose.Schema({
  marksheetNo: { type: String, unique: true },
  issueDate: String,

  studentName: String,
  fatherName: String,
  rollNo: String,

  course: String,
  branch: String,
  year: String,
  session: String,

  subjects: [subjectSchema],

  totalOut: Number,
  totalScored: Number,
  percentage: Number,
  grade: String,

  photo: String,
}, { timestamps: true });

export default mongoose.model("Marksheet", marksheetSchema);
