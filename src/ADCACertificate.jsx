import "./certificate.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { px } from "framer-motion";
import AdminNavbar from "./Admin/AdminNavbar";

export default function   Certificate() {
  const certRef = useRef();
  const [form, setForm] = useState({
    certificateNo: "", // backend se aayega
    issueDate: "07 JAN 2025",
    studentName: "",
    fatherName: "",
    courseName: "",
    courseDuration: "",
    coursePeriod: "",
    grade: "",
    percentage: "",
    photo: "",
  });

  const qrValue = `https://codewebit.com/verify?cert=${form.certificateNo}`;
  const DOCUMENT_TYPE = "adca_certificate";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const downloadPNG = async () => {
    const canvas = await html2canvas(certRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  const toBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.onloadend = () => cb(reader.result);
    reader.readAsDataURL(file);
  };

  const saveCertificate = async () => {
    const res = await fetch("https://api.codewebit.com/api/documents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        documentType: DOCUMENT_TYPE, // 👈 yahin se backend type samjhega
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert(`Certificate No: ${data.documentNo}`);

      // 🔥 backend se aaya hua auto number UI me set karo
      setForm((prev) => ({
        ...prev,
        certificateNo: data.documentNo,
      }));
    }
  };

  // ✅ PDF DOWNLOAD (PORTRAIT)
  const downloadPDF = async () => {
    const canvas = await html2canvas(certRef.current, {
      scale: 2, // stable
      useCORS: true,
      backgroundColor: "#ffffff",

      // 👇 certificate ka EXACT pixel size
      width: 1080,
      height: 1527,
      windowWidth: 1080,
      windowHeight: 1527,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("portrait", "mm", "a4");

    // 👇 FIXED A4 SIZE (MOST IMPORTANT)
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);

    pdf.save("certificate.pdf");
  };

  return (
    <>
      <AdminNavbar />
      {/* ===== DATA INPUT PANEL (NO DESIGN CHANGE) ===== */}
      <div style={{ padding: 20, background: "#f5f5f5" }}>
        <input
          name="certificateNo"
          value={form.certificateNo}
          readOnly
          placeholder="Auto Generated Certificate No"
        />

        <input
          name="issueDate"
          placeholder="Issue Date"
          onChange={handleChange}
        />
        <input
          name="studentName"
          placeholder="Student Name"
          onChange={handleChange}
        />
        <input
          name="fatherName"
          placeholder="Father Name"
          onChange={handleChange}
        />
        <input
          name="courseName"
          placeholder="Course Name"
          onChange={handleChange}
        />
        <input
          name="courseDuration"
          placeholder="Course Duration"
          onChange={handleChange}
        />
        <input
          name="coursePeriod"
          placeholder="Course Period"
          onChange={handleChange}
        />
        <input name="grade" placeholder="Grade" onChange={handleChange} />
        <input
          name="percentage"
          placeholder="Percentage"
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            toBase64(e.target.files[0], (base64) =>
              setForm({ ...form, photo: base64 })
            )
          }
        />

        <button onClick={saveCertificate}>Save Certificate</button>
      </div>
      <div className="certificate-wrapper">
        {/* CERTIFICATE */}
        <div className="certificate" ref={certRef}>
          {/* RIGHT RIBBON (Yellow) */}
          <div className="right-ribbon"></div>

          {/* MAIN CONTENT AREA */}
          <div className="content">
            {/* ===== MSME HEADER START ===== */}
            <div className="header">
              <div className="header-left">
                <img src="/logo.png" alt="MSME Logo" />
                <img src="/logo3.png" alt="Govt Logo" />
              </div>

              <div className="header-right">
                <img src="/logo2.png" alt="Digital India Logo" />
              </div>
            </div>

            <div className="meta">
              <div style={{ fontSize: "20px" }}>
                <strong>Certificate Number :</strong> {form.certificateNo}
              </div>
              <div style={{ fontSize: "20px" }}>
                <strong>Date of Issue :</strong> {form.issueDate}
              </div>
            </div>

            {/* ===== STEP-3 : INSTITUTE NAME START ===== */}
            <div className="institute">
              <div className="qr-box">
                {form.certificateNo && (
                  <QRCodeCanvas
                    value={qrValue}
                    size={90}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="H"
                  />
                )}

                <div className="qr-text">Scan to Verify</div>
              </div>

              <div className="institute-title">CODE WEB</div>
              <div className="institute-subtitle">INSTITUTE OF TECHNOLOGY</div>
              <div className="institute-iso">
                An ISO 9001:2015 Certified Organization
              </div>
            </div>
            {/* ===== STEP-3 : INSTITUTE NAME END ===== */}
            {/* ===== STEP-4 : AWARDED TO SECTION START ===== */}
            <div className="awarded-section">
              {/* LEFT TEXT */}
              <div className="awarded-left" style={{ fontSize: "20px" }}>
                <p className="awarded-label" style={{ fontSize: "20px" }}>
                  This certificate is awarded to :
                </p>
                <div className="student-name">
                  {form.studentName || "STUDENT NAME"} <br />
                  S/O Mr. {form.fatherName || "FATHER NAME"}
                </div>
              </div>

              {/* RIGHT PHOTO BOX */}
              <div className="photo-box">
                <img
                  className="photo-box"
                  src={form.photo || "/photo.jpg"}
                  alt=""
                />
              </div>
            </div>
            {/* ===== STEP-4 : AWARDED TO SECTION END ===== */}
            {/* ===== STEP-5 : COURSE DETAILS START ===== */}
            <div className="course-section" style={{ marginLeft: "80px" }}>
              <div className="course-line" style={{ fontSize: "20px" }}>
                Has Completed the course of
              </div>

              <div className="course-name">
                {form.courseName || "COURSE NAME"}
              </div>

              <div className="course-duration" style={{ fontSize: "20px" }}>
                (COURSE DURATION : {form.courseDuration || "DURATION"})
              </div>

              <div className="course-period" style={{ fontSize: "20px" }}>
                (COURSE PERIOD : {form.coursePeriod || "PERIOD"})
              </div>
            </div>
            {/* ===== STEP-5 : COURSE DETAILS END ===== */}
            {/* ===== STEP-6 : TYPING RESULT TABLE START ===== */}
            <div className="result-section" style={{ marginLeft: "80px" }}>
              <div className="result-title" style={{ fontSize: "20px" }}>
                Has passed the prescribed examination with
              </div>
              <div className="result-title">
                {form.grade || "GRADE"} (with {form.percentage || "0"} % marks)
              </div>

              {/* <table className="result-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Speed (WPM)</th>
                    <th>Obtained</th>
                    <th>Accuracy (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hindi Typing</td>
                    <td>30 WPM</td>
                    <td></td>
                    <td>99%</td>
                  </tr>
                  <tr>
                    <td>English Typing</td>
                    <td>45 WPM</td>
                    <td></td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table> */}
            </div>
            {/* ===== STEP-6 : TYPING RESULT TABLE END ===== */}
            {/* ===== STEP-7 : FOOTER START ===== */}
            <div className="footer-section">
              <div className="authorised">at our authorised study centre</div>

              <div className="footer-logos" style={{ marginBottom: "80px" }}>
                <img src="/logo1.png" alt="ISO" />
                <img src="/logo1.png" alt="IAF" />
              </div>
              <div className="signatures">
                <div className="sign-box">
                  <div className="sign-text">Deepak Gupta</div>
                  <div className="sign-line"></div>
                  <div className="sign-label">MANAGING DIRECTOR</div>
                </div>

                <div className="sign-box exam">
                  <div className="sign-text">Hasnain Ansari</div>
                  <div className="sign-line"></div>
                  <div className="sign-label">EXAMINATION CONTROLLER</div>
                </div>
              </div>

              <div className="verification" style={{ fontSize: "20px" }}>
                Online certificate Verification Available on:
                <br />
                <strong>codewebit.com</strong>
              </div>

              <div
                className="address"
                style={{ fontSize: "20px", marginBottom: "20px" }}
              >
                H.O. : MOTIHARI, EAST CHAMPARAN BIHAR, 845401 <br />
                ADDRESS : BALUA, RAGHUNATHPUR
              </div>
            </div>
            {/* ===== STEP-7 : FOOTER END ===== */}
          </div>
        </div>
      </div>{" "}
      {/* DOWNLOAD BUTTONS - BOTTOM */}
      <div className="download-actions">
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
        <button onClick={downloadPNG} className="download-btn outline">
          Download PNG
        </button>
      </div>
    </>
  );
}
const btnStyle = {
  padding: "2px 4px",
  background: "#1a237e",
  color: "#fff",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
};
