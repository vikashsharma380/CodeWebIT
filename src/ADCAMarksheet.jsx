import "./certificate.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export default function ADCAMarksheet({ goBack }) {
  const ref = useRef();

  const downloadPDF = async () => {
    const canvas = await html2canvas(ref.current, { scale: 3 });
    const pdf = new jsPDF("portrait", "mm", "a4");
    const w = 210;
    const h = (canvas.height * w) / canvas.width;
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, h);
    pdf.save("adca-marksheet.pdf");
  };

  return (
    <>
      <button onClick={goBack} style={btnStyle}>⬅ Back</button>
      <button onClick={downloadPDF} style={{ ...btnStyle, marginLeft: 10 }}>
        Download PDF
      </button>

      <div className="certificate" ref={ref}>
        <h1 style={{ textAlign: "center" }}>ADCA MARKSHEET</h1>

        <p><b>Name:</b> Vikash Sharma</p>
        <p><b>Father Name:</b> Raju Sharma</p>
        <p><b>Session:</b> 2024 - 2025</p>

        <table border="1" width="100%" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Max Marks</th>
              <th>Obtained</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Fundamental</td><td>100</td><td>85</td></tr>
            <tr><td>MS Office</td><td>100</td><td>88</td></tr>
            <tr><td>Internet</td><td>100</td><td>90</td></tr>
            <tr><td>Tally</td><td>100</td><td>82</td></tr>
          </tbody>
        </table>

        <h3 style={{ marginTop: 20 }}>Result: PASS</h3>
        <h3>Grade: A</h3>
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
