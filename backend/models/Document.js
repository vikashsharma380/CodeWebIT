import mongoose from "mongoose";

const marksSchema = new mongoose.Schema(
  {
    subject: String,
    maxMarks: Number,
    obtainedMarks: Number,
  },
  { _id: false }
);

const documentSchema = new mongoose.Schema(
  {
    documentType: {
      type: String,
      required: true, // adca_certificate, typing_certificate etc
      index: true,
    },

    documentNo: {
      type: String,
      unique: true,   // 🔥 duplicate kabhi na ho
      index: true,
    },

    issueDate: {
      type: String,
    },

    studentName: {
      type: String,
      required: true,
    },

    fatherName: String,

    courseName: String,
    courseDuration: String,
    coursePeriod: String,

    grade: String,
    percentage: String,

    marks: [marksSchema], // mainly ADCA Marksheet

    photo: String, // base64
  },
  { timestamps: true }
);

export default mongoose.model("Document", documentSchema);
