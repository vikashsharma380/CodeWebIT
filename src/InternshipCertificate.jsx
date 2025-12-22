import "./certificate.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export default function InternshipCertificate({ goBack }) {
  const ref = useRef();

  const downloadPDF = async () => {
    const canvas = await html2canvas(ref.current, { scale: 3 });
    const pdf = new jsPDF("portrait", "mm", "a4");
    const w = 210;
    const h = (canvas.height * w) / canvas.width;
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, h);
    pdf.save("internship-certificate.pdf");
  };

  return (
    <>
      <button onClick={goBack} style={btnStyle}>⬅ Back</button>
      <button onClick={downloadPDF} style={{ ...btnStyle, marginLeft: 10 }}>
        Download PDF
      </button>

      <div className="certificate" ref={ref}>
        <h1 style={{ textAlign: "center" }}>INTERNSHIP CERTIFICATE</h1>

        <p style={{ marginTop: 40, fontSize: 18 }}>
          This is to certify that <b>Vikash Sharma</b> has successfully
          completed his internship in <b>Web Development</b> at
          <b> Code Web Institute of Technology</b> from
          <b> Jan 2025 to Mar 2025</b>.
        </p>

        <p style={{ marginTop: 40 }}>
          We wish him all the best for his future.
        </p>

        <div style={{ marginTop: 80 }}>
          <b>Director</b>
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
