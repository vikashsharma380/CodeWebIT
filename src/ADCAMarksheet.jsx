import "./ADCAMarksheet.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export default function Certificate() {
  const certRef = useRef();

  // PNG DOWNLOAD
  const downloadPNG = async () => {
    const canvas = await html2canvas(certRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");
    link.download = "marksheet.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // PDF DOWNLOAD
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
    pdf.save("marksheet.pdf");
  };

  return (
    <>
      {/* DOWNLOAD BUTTONS */}
      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}>
        <button onClick={downloadPDF} style={btnStyle}>
          Download PDF
        </button>
        <button onClick={downloadPNG} style={{ ...btnStyle, marginLeft: 10 }}>
          Download PNG
        </button>
      </div>

      {/* CERTIFICATE */}
      <div className="certificate-wrapper">
        <div className="certificate" ref={certRef}>
          <div className="right-ribbon"></div>

          <img src="/waxseal.png" alt="Wax Seal" className="wax-seal-img" />

          <div className="content">
            {/* HEADER */}
            <div className="header">
              <div className="header-left">
                <img src="/logo.png" alt="" />
                <img src="/logo3.png" alt="" />
              </div>
              <div className="header-right">
                <img src="/logo2.png" alt="" />
              </div>
            </div>

            {/* META */}
            <div className="meta">
              <div>
                <strong>Marksheet No :</strong> CWIT-2025-001
              </div>
              <div>
                <strong>Date :</strong> 07 JAN 2025
              </div>
            </div>

            {/* INSTITUTE */}
            <div className="institute">
              <div className="qr-box">
                <img src="/qr.png" alt="QR" />
                <div className="qr-text">Scan to Verify</div>
              </div>

              <div className="institute-title">CODE WEB</div>
              <div className="institute-subtitle">INSTITUTE OF TECHNOLOGY</div>
              <div className="institute-iso">
                An ISO 9001:2015 Certified Organization
              </div>
            </div>

            {/* STUDENT FORM (DESIGN SAME) */}
            <div className="awarded-section">
              <div className="awarded-left">
                <p className="awarded-label">Student Details :</p>

                <div className="student-form">
                  <div>
                    <span>Name :</span> <strong>VIKASH SHARMA</strong>
                  </div>
                  <div>
                    <span>Father Name :</span> <strong>RAJU SHARMA</strong>
                  </div>
                  <div>
                    <span>Roll No :</span> <strong>CWIT2025</strong>
                  </div>
                  <div>
                    <span>Course :</span> <strong>ADCA</strong>
                  </div>
                  <div>
                    <span>Branch :</span> <strong>COMPUTER SCIENCE</strong>
                  </div>
                  <div>
                    <span>Year :</span> <strong>2025</strong>
                  </div>
                  <div>
                    <span>Session :</span> <strong>2024-2025</strong>
                  </div>
                  <div>
                    <span>College :</span> <strong>CODE WEB</strong>
                  </div>
                </div>
              </div>

              <div className="photo-box">
                <img
                  style={{ width: "180px", height: "230px" }}
                  src="/photo.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* MARKS TABLE */}
            <div className="result-section">
              <table className="premium-marks-table">
                <thead>
                  <tr>
                    <th rowSpan="2" className="subject-col">
                      Subject
                    </th>
                    <th colSpan="2">Objective Marks</th>
                    <th colSpan="2">Practical Marks</th>
                    <th colSpan="2">Total Marks</th>
                  </tr>
                  <tr>
                    <th>Out of</th>
                    <th>Scored</th>

                    <th>Out of</th>
                    <th>Scored</th>

                    <th>Out of</th>
                    <th>Scored</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="subject-col">Computer Fundamentals</td>
                    <td>100</td>
                    <td>33</td>
                    <td>60</td>
                    <td>25</td>
                    <td>85</td>
                    <td>90</td>
                  </tr>

                  <tr>
                    <td className="subject-col">Computer Fundamentals</td>
                    <td>100</td>
                    <td>33</td>
                    <td>60</td>
                    <td>25</td>
                    <td>85</td>
                    <td>90</td>
                  </tr>

                  <tr>
                    <td className="subject-col">Computer Fundamentals</td>
                    <td>100</td>
                    <td>33</td>
                    <td>60</td>
                    <td>25</td>
                    <td>85</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td className="subject-col">Computer Fundamentals</td>
                    <td>100</td>
                    <td>33</td>
                    <td>60</td>
                    <td>25</td>
                    <td>85</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td className="subject-col">Computer Fundamentals</td>
                    <td>100</td>
                    <td>33</td>
                    <td>60</td>
                    <td>25</td>
                    <td>85</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td className="subject-col">Computer Fundamentals</td>
                    <td>100</td>
                    <td>33</td>
                    <td>60</td>
                    <td>25</td>
                    <td>85</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td className="subject-col">Computer Fundamentals</td>
                    <td>100</td>
                    <td>33</td>
                    <td>60</td>
                    <td>25</td>
                    <td>85</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td className="subject-col">Total</td>
                    <td>100</td>
                    <td>33</td>
                    <td>60</td>
                    <td>25</td>
                    <td>85</td>
                    <td>90</td>
                  </tr>
                </tbody>
              </table>
              <table className="premium-marks-table">
                <thead>
                  <tr>
                    <th rowSpan="2" className="subject-col">
                      Subject
                    </th>
                  </tr>
                  <tr>
                    <th>Out of</th>
                    <th>Scored</th>
                  </tr>
                </thead>
              </table>
              <table className="premium-marks-table">
                <thead>
                  <tr>
                    <th rowSpan="2" className="subject-col">
                      {" "}
                      <b>Subject</b>
                    </th>
                  </tr>
                  <tr>
                    <th>Out of</th>
                    <th>Scored</th>
                  </tr>
                </thead>
              </table>
            </div>

            {/* FOOTER */}
            <div className="footer-section">
              <div className="authorised">at our authorised study centre</div>

              <div className="footer-logos">
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

              <div className="verification">
                Online certificate Verification Available on:
                <br />
                <strong>codewebit.com</strong>
              </div>

              <div className="address">
                H.O. : MOTIHARI, EAST CHAMPARAN BIHAR, 845401 <br />
                ADDRESS : BALUA, RAGHUNATHPUR
              </div>
            </div>
          </div>
        </div>
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
