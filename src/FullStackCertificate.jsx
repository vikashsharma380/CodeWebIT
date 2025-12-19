import "./certificate.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export default function FullStackCertificate({ goBack }) {
  const ref = useRef();

  const downloadPDF = async () => {
    const canvas = await html2canvas(ref.current, { scale: 3 });
    const pdf = new jsPDF("portrait", "mm", "a4");
    const w = 210;
    const h = (canvas.height * w) / canvas.width;
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, h);
    pdf.save("fullstack-certificate.pdf");
  };

  return (
    <>
      <button onClick={goBack} style={btnStyle}>⬅ Back</button>
      <button onClick={downloadPDF} style={{ ...btnStyle, marginLeft: 10 }}>
        Download PDF
      </button>

      <div className="certificate" ref={ref}>
        <h1 style={{ textAlign: "center" }}>FULL STACK CERTIFICATE</h1>

        <p style={{ marginTop: 40, fontSize: 18 }}>
          This is to certify that <b>Vikash Sharma</b> has successfully
          completed the <b>Full Stack Web Development</b> course
          including <b>HTML, CSS, JavaScript, React, Node.js & MongoDB</b>
          during the session <b>2024 - 2025</b>.
        </p>

        <p style={{ marginTop: 40 }}>
          Instructor: Code Web IT
        </p>

        <div style={{ marginTop: 80 }}>
          <b>Authorized Signatory</b>
        </div>
      </div>
    </>
  );
}

const btnStyle = {
  padding: "10px 16px",
  background: "#1a237e",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
};
