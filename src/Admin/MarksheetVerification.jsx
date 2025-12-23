import React from "react";
import { CheckCircle } from "lucide-react";

export default function MarksheetVerification() {
  const data = {
    // ✅ YOUR INSTITUTE (UPDATED)
    institute: "CODE WEB INSTITUTE OF TECHNOLOGY, MOTIHARI EAST CHAMPARAN",
    verified: true,
    certificateNo: "CNLKU1BHEN",

    student: {
      name: "Alok Kumar",
      course: "Advance Diploma in Computer Application",
      duration: "12 Months",
      father: "Vidhya Mishra",
      mother: "Usha Devi",
      period: "07 Jan 2024 – 06 Jan 2025",
      photo: "https://i.pravatar.cc/150?img=12",
    },

    marks: [
      {
        subject: "Computer Fundamentals",
        theory: 45,
        practical: 44,
        total: 89,
      },
      {
        subject: "Operating System (Windows / Linux)",
        theory: 45,
        practical: 44,
        total: 89,
      },
      {
        subject: "MS Office (MS Word, Excel, PPT)",
        theory: 45,
        practical: 44,
        total: 89,
      },
      {
        subject: "DTP (PageMaker, Photoshop, Corel)",
        theory: 45,
        practical: 44,
        total: 89,
      },
      { subject: "Tally Prime with GST", theory: 44, practical: 44, total: 88 },
      { subject: "Internet & Hardware", theory: 45, practical: 45, total: 90 },
      { subject: "Project / Practical", theory: 44, practical: 45, total: 89 },
    ],

    totalMarks: 619,
    maxMarks: 700,
    percentage: "88.4%",
    grade: "A",
    issueDate: "06 Jan 2025",

    // ✅ CONTACT (UPDATED)
    address: "Motihari, East Champaran, Bihar",
    email: "contact@codewebinstitute.com",
    phone: "+91 9504134324",
  };

  return (
    <div className="flex justify-center min-h-screen px-4 py-8 bg-neutral-100">
      <div className="w-full max-w-6xl overflow-hidden bg-white shadow-lg rounded-xl">
        {/* HEADER */}
        <div className="px-6 py-5 border-b">
          <h1 className="text-lg font-semibold sm:text-xl text-neutral-900">
            {data.institute}
          </h1>
          <div className="flex items-center gap-2 mt-1 text-sm text-emerald-700">
            <CheckCircle size={16} />
            Verified Examination Record
          </div>
        </div>

        {/* STUDENT INFO */}
        <div className="flex flex-col gap-6 px-6 py-6 border-b lg:flex-row">
          <img
            src={data.student.photo}
            alt="Student"
            className="object-cover w-20 h-20 border rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-neutral-800">
              {data.student.name}
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              {data.student.course} • {data.student.duration}
            </p>

            <div className="grid grid-cols-1 gap-4 p-4 mt-4 text-sm border rounded-lg sm:grid-cols-2 lg:grid-cols-3 bg-neutral-50">
              <Info label="Father / Husband" value={data.student.father} />
              <Info label="Mother" value={data.student.mother} />
              <Info label="Course Period" value={data.student.period} />
            </div>
          </div>

          {/* SCORE SUMMARY */}
          <div className="border rounded-lg p-4 min-w-[220px] text-center">
            <p className="text-sm text-neutral-500">Total Marks</p>
            <p className="text-2xl font-semibold text-neutral-800">
              {data.totalMarks} / {data.maxMarks}
            </p>

            <div className="mt-2">
              <p className="text-sm text-neutral-500">Percentage</p>
              <p className="font-semibold text-emerald-700">
                {data.percentage}
              </p>
            </div>

            <div className="mt-2">
              <p className="text-sm text-neutral-500">Grade</p>
              <span className="inline-flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-emerald-600">
                {data.grade}
              </span>
            </div>
          </div>
        </div>

        {/* MARKS TABLE */}
        <div className="px-6 py-6 overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm border">
            <thead className="bg-neutral-100">
              <tr>
                <Th>Subject</Th>
                <Th>Theory</Th>
                <Th>Practical</Th>
                <Th>Total</Th>
              </tr>
            </thead>
            <tbody>
              {data.marks.map((m, i) => (
                <tr key={i} className="border-t">
                  <Td>{m.subject}</Td>
                  <Td>{m.theory}/50</Td>
                  <Td>{m.practical}/50</Td>
                  <Td className="font-medium">{m.total}/100</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col gap-3 px-6 py-5 text-sm border-t bg-neutral-50 sm:flex-row sm:justify-between">
          <div>
            <p className="text-neutral-600">
              Issued on: <span className="font-medium">{data.issueDate}</span>
            </p>
            <p className="text-xs text-neutral-500">
              This is a digitally generated marksheet issued by{" "}
              <span className="font-medium">{data.institute}</span>.
            </p>
            <p className="text-xs text-neutral-500">
              Contact: {data.email} | {data.phone}
            </p>
          </div>

          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle size={16} />
            Verified Document
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Helpers ---------- */

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs text-neutral-500">{label}</p>
    <p className="font-medium text-neutral-800">{value}</p>
  </div>
);

const Th = ({ children }) => (
  <th className="px-4 py-3 font-medium text-left text-neutral-700">
    {children}
  </th>
);

const Td = ({ children, className = "" }) => (
  <td className={`px-4 py-3 text-neutral-700 ${className}`}>{children}</td>
);
