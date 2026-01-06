import "./ADCAMarksheet.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";

import { QRCodeCanvas } from "qrcode.react";
import AdminNavbar from "./Admin/AdminNavbar";

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
  const [subjects, setSubjects] = useState([
    {
      name: "Computer Fundamentals",
      objOut: 100,
      objScored: 0,
      pracOut: 60,
      pracScored: 0,
    },
  ]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        name: "",
        objOut: 100,
        objScored: 0,
        pracOut: 60,
        pracScored: 0,
      },
    ]);
  };

  const updateSubject = (i, field, val) => {
    const s = [...subjects];
    s[i][field] = field === "name" ? val : Number(val);
    setSubjects(s);
  };

  const removeSubject = (i) => {
    setSubjects(subjects.filter((_, idx) => idx !== i));
  };
  const totalOut = subjects.reduce((t, s) => t + s.objOut + s.pracOut, 0);

  const totalScored = subjects.reduce(
    (t, s) => t + s.objScored + s.pracScored,
    0
  );

  const percentage = totalOut ? ((totalScored / totalOut) * 100).toFixed(2) : 0;

  const grade =
    percentage >= 75
      ? "A"
      : percentage >= 60
      ? "B"
      : percentage >= 45
      ? "C"
      : "FAIL";

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

  const [form, setForm] = useState({
    marksheetNo: "", // backend se aayega
    issueDate: "",
    studentName: "",
    fatherName: "",
    rollNo: "",
    course: "",
    year: "",
    session: "2024-2025",
    photo: "/photo.jpg",
  });
  const saveMarksheet = async () => {
    const res = await fetch("https://api.codewebit.com/api/documents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        subjects,
        totalOut,
        totalScored,
        percentage,
        grade,
        documentType: DOCUMENT_TYPE,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert(`Marksheet No: ${data.documentNo}`);
      setForm((prev) => ({
        ...prev,
        marksheetNo: data.documentNo,
      }));
    }
  };

  const DOCUMENT_TYPE = "adca_marksheet";
  const qrValue = `https://codewebit.com/verify?marksheet=${form.marksheetNo}`;

  return (
    <>
      <AdminNavbar />
      {/* DOWNLOAD BUTTONS */}
      
      <div style={{ padding: 20, background: "#f5f5f5" }}>
        <input
          value={form.studentName}
          onChange={(e) => setForm({ ...form, studentName: e.target.value })}
          placeholder="Student Name"
        />
        <input
          value={form.fatherName}
          onChange={(e) => setForm({ ...form, fatherName: e.target.value })}
          placeholder="Father Name"
        />
        <input
          value={form.rollNo}
          onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
          placeholder="Roll No"
        />
        <input
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          placeholder="Course"
        />
        <input
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          placeholder="Year"
        />
        <input
          value={form.session}
          onChange={(e) => setForm({ ...form, session: e.target.value })}
          placeholder="Session"
        />
        <input
          value={form.branch}
          onChange={(e) => setForm({ ...form, branch: e.target.value })}
          placeholder="Branch"
        />

        <input
          value={form.college}
          onChange={(e) => setForm({ ...form, college: e.target.value })}
          placeholder="College"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const r = new FileReader();
            r.onloadend = () => setForm({ ...form, photo: r.result });
            r.readAsDataURL(e.target.files[0]);
          }}
        />

        <button onClick={saveMarksheet}>Save Marksheet</button>
        <button onClick={addSubject}>➕ Add Subject</button>
        <button onClick={removeSubject}>❌ Remove Subject</button>  

        <button onClick={downloadPDF} style={{ ...btnStyle, marginLeft: 20 }}>
          Download PDF
        </button>
        <button onClick={downloadPNG} style={{ ...btnStyle, marginLeft: 20 }}>
          Download PNG
        </button>
        
      </div>

      {/* CERTIFICATE */}
      <div className="certificate-wrapper">
        <div className="certificate" ref={certRef}>
          <div className="right-ribbon"></div>

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
                <strong>Marksheet No :</strong>{" "}
                {form.marksheetNo || "AUTO GENERATED"}
              </div>
              <div>
                <strong>Date :</strong> {form.issueDate}
              </div>
            </div>

            {/* INSTITUTE */}
            <div className="institute">
              <div className="qr-box">
                {form.marksheetNo && (
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

            {/* STUDENT FORM (DESIGN SAME) */}
            <div className="awarded-section">
              <div className="awarded-left">
                <p className="awarded-label">Student Details :</p>

                <div className="student-form">
                  <div>
                    <span>Name :</span> <strong>{form.studentName}</strong>
                  </div>
                  <div>
                    <span>Father Name :</span>{" "}
                    <strong>{form.fatherName}</strong>
                  </div>
                  <div>
                    <span>Roll No :</span> <strong>{form.rollNo}</strong>
                  </div>
                  <div>
                    <span>Course :</span> <strong>{form.course}</strong>
                  </div>
                  
                  <div>
                    <span>Year :</span> <strong>{form.year}</strong>
                  </div>
                  <div>
                    <span>Session :</span> <strong>{form.session}</strong>
                  </div>
                 
                </div>
              </div>

              <div className="photo-box">
                <img
                  style={{ width: "180px", height: "230px" }}
                  src={form.photo}
                  alt=""
                />
              </div>
            </div>

            {/* MARKS TABLE */}
            <div className="result-section">
              <table
                className="premium-marks-table"
                style={{ fontSize: "16px" }}
              >
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
                  {subjects.map((s, i) => (
                    <tr key={i}>
                      <td>
                        <input
                          value={s.name}
                          onChange={(e) =>
                            updateSubject(i, "name", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={s.objOut}
                          onChange={(e) =>
                            updateSubject(i, "objOut", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={s.objScored}
                          onChange={(e) =>
                            updateSubject(i, "objScored", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={s.pracOut}
                          onChange={(e) =>
                            updateSubject(i, "pracOut", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={s.pracScored}
                          onChange={(e) =>
                            updateSubject(i, "pracScored", e.target.value)
                          }
                        />
                      </td>

                      <td>{s.objOut + s.pracOut}</td>
                      <td>{s.objScored + s.pracScored}</td>

                      <td data-html2canvas-ignore="true" className="no-print">
                        <button
                          type="button"
                          data-html2canvas-ignore="true"
                          onClick={() => removeSubject(i)}
                          style={{
                            background: "red",
                            color: "#fff",
                            border: "none",
                            padding: "4px 8px",
                            cursor: "pointer",
                          }}
                        >
                          ❌
                        </button>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td>
                      <b>Total</b>
                    </td>
                    <td colSpan="4"></td>
                    <td>
                      <b>{totalOut}</b>
                    </td>
                    <td>
                      <b>{totalScored}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ marginTop: 15, textAlign: "center", fontSize: 20 }}>
                <div style={{ fontSize: 16 }}>
                  <b>Percentage :</b> {percentage}%
                </div>

                <div style={{ fontSize: 18, marginTop: 5 }}>
                  <b>Grade :</b> {grade}
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="footer-section">
              <div className="authorised" style={{ fontSize: "20px" }}>
                at our authorised study centre
              </div>

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

              <div className="verification" style={{ fontSize: "20px" }}>
                Online certificate Verification Available on:
                <br />
                <strong>codewebit.com</strong>
              </div>

              <div
                className="address"
                style={{ marginBottom: "20px", fontSize: "20px" }}
              >
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
  padding: "2px 4px",
  background: "#1a237e",
  color: "#fff",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
};
