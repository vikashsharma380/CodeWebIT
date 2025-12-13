import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CertificateGenerator() {
  const [form, setForm] = useState({
    certNo: "",
    date: "",
    student: "",
    course: "",
    grade: "",
    period: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const downloadImage = async () => {
    const element = document.getElementById("certificate-preview");
    const canvas = await html2canvas(element, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "certificate.png";
    link.click();
  };

  const downloadPDF = async () => {
    const element = document.getElementById("certificate-preview");
    const canvas = await html2canvas(element, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "px", [1527, 1080]);
    pdf.addImage(imgData, "PNG", 0, 0, 1080, 1527);
    pdf.save("certificate.pdf");
  };

  return (
    <div className="flex gap-10 p-10">
      {/* LEFT FORM */}
      <div className="w-1/3 space-y-5">
        {[
          ["certNo", "Certificate Number"],
          ["date", "Date of Issue"],
          ["student", "Student Name"],
          ["course", "Course Name"],
          ["grade", "Grade"],
          ["period", "Course Period"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        ))}

        <button
          onClick={downloadImage}
          className="w-full px-6 py-2 text-white bg-blue-600 rounded"
        >
          Download PNG
        </button>

        <button
          onClick={downloadPDF}
          className="w-full px-6 py-2 text-white bg-green-600 rounded"
        >
          Download PDF
        </button>
      </div>

      {/* RIGHT — LIVE PREVIEW */}
      <div
        id="certificate-preview"
        style={{
          position: "relative",
          width: "540px", // preview size (half of 1080x1527)
          height: "763px",
          backgroundImage: "url('/certificate-template.png')",
          backgroundSize: "100% 100%",
        }}
        className="shadow-lg"
      >
        {/* Certificate Number */}
        <div
          style={{
            position: "absolute",
            top: "102px",
            left: "116px",
            fontSize: "8px",
            fontWeight: "600",
          }}
        >
          {form.certNo}
        </div>

        {/* Date of Issue */}
        <div
          style={{
            position: "absolute",
            top: "99px",
            right: "6px",
            fontSize: "7px",
            fontWeight: "500",
          }}
        >
          {form.date}
        </div>

        {/* Student Name (UNCHANGED – YOUR ORIGINAL PERFECT POSITION) */}
        <div
          style={{
            position: "absolute",
            top: "360px",
            width: "100%",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "600",
            color: "#1a237e",
          }}
        >
          {form.student}
        </div>

        {/* Course Name */}
        <div
          style={{
            position: "absolute",
            top: "450px",
            width: "100%",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          {form.course}
        </div>

        {/* Grade */}
        <div
          style={{
            position: "absolute",
            top: "495px",
            width: "100%",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {form.grade}
        </div>

        {/* Course Period */}
        <div
          style={{
            position: "absolute",
            top: "535px",
            width: "100%",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {form.period}
        </div>
      </div>
    </div>
  );
}
