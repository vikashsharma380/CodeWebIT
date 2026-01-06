import "./certificate.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import AdminNavbar from "./Admin/AdminNavbar";

export default function Certificate() {
  const certRef = useRef();

  // ✅ PNG DOWNLOAD
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

  // ✅ PDF DOWNLOAD (PORTRAIT)
  const downloadPDF = async () => {
    const canvas = await html2canvas(certRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("portrait", "mm", "a4");
    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("certificate.pdf");
  };

  return (
    <>
      <AdminNavbar />
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
                <strong>Certificate Number :</strong> CWIT-2025-001
              </div>
              <div style={{ fontSize: "20px" }}>
                <strong>Date of Issue :</strong> 07 JAN 2025
              </div>
            </div>

            {/* ===== STEP-3 : INSTITUTE NAME START ===== */}
            <div className="institute">
              <div className="institute-title">CODE WEB</div>
              <div className="institute-subtitle">INSTITUTE OF TECHNOLOGY</div>
              <div className="institute-iso" style={{ fontSize: "20px" }}>
                An ISO 9001:2015 Certified Organization
              </div>
            </div>
            {/* ===== STEP-3 : INSTITUTE NAME END ===== */}
            {/* ===== STEP-4 : AWARDED TO SECTION START ===== */}
            <div className="awarded-section">
              {/* LEFT TEXT */}
              <div className="awarded-left">
                <p className="awarded-label" style={{ fontSize: "20px" }}>
                  This certificate is awarded to :
                </p>
                <div className="student-name">
                  VIKASH SHARMA <br /> S/O Mr. RAJU SHARMA
                </div>
              </div>

              {/* RIGHT PHOTO BOX */}
              <div className="photo-box">
                <img className="photo-box" src="/photo.jpg" alt="" />
              </div>
            </div>
            {/* ===== STEP-4 : AWARDED TO SECTION END ===== */}
            {/* ===== STEP-5 : COURSE DETAILS START ===== */}
            <div className="course-section">
              <div className="course-line" style={{ fontSize: "20px" }}>
                Has Completed the course of
              </div>

              <div className="course-name">
                COMPUTER TYPING IN HINDI & ENGLISH
              </div>

              <div className="course-duration" style={{ fontSize: "20px" }}>
                (COURSE DURATION : 6 MONTHS)
              </div>

              <div className="course-period" style={{ fontSize: "20px" }}>
                (COURSE PERIOD : 07 JAN 2024 TO 06 JUL 2025)
              </div>
            </div>
            {/* ===== STEP-5 : COURSE DETAILS END ===== */}
            {/* ===== STEP-6 : TYPING RESULT TABLE START ===== */}
            <div className="result-section">
              <div className="result-title" style={{ fontSize: "20px" }}>
                Has passed the prescribed examination with
              </div>

              <table className="result-table" style={{ fontSize: "20px" }}>
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
              </table>
            </div>
            {/* ===== STEP-6 : TYPING RESULT TABLE END ===== */}
            {/* ===== STEP-7 : FOOTER START ===== */}
            <div className="footer-section" style={{ fontSize: "20px" }}>
              <div className="authorised" style={{ fontSize: "20px" }}>
                at our authorised study centre
              </div>

              <div className="footer-logos">
                <img src="/logo1.png" alt="ISO" />
                <img src="/logo1.png" alt="IAF" />
              </div>
              <div className="signatures">
                <div className="sign-box">
                  <div className="sign-text" style={{ fontSize: "20px" }}>
                    Deepak Gupta
                  </div>
                  <div className="sign-line"></div>
                  <div className="sign-label" style={{ fontSize: "12px" }}>
                    MANAGING DIRECTOR
                  </div>
                </div>

                <div className="sign-box exam">
                  <div className="sign-text" style={{ fontSize: "20px" }}>
                    Hasnain Ansari
                  </div>
                  <div className="sign-line"></div>
                  <div className="sign-label" style={{ fontSize: "12px" }}>
                    EXAMINATION CONTROLLER
                  </div>
                </div>
              </div>

              <div className="verification">
                Online certificate Verification Available on:
                <br />
                <strong>codewebit.com</strong>
              </div>

              <div
                className="address"
                style={{ marginBottom: "110px", fontSize: "20px" }}
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
  padding: "10px 20px",
  background: "#1a237e",
  color: "#fff",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
};
