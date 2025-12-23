import { useEffect, useState } from "react";

export default function CertificatesList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/documents")
      .then(res => res.json())
      .then(data => {
        if (data.success) setList(data.list);
      });
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h2>Generated Certificates</h2>

      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Certificate No</th>
            <th>Type</th>
            <th>Student Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((d, i) => (
            <tr key={d._id}>
              <td>{i + 1}</td>
              <td>{d.documentNo}</td>
              <td>{d.documentType}</td>
              <td>{d.studentName}</td>
              <td>{d.issueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
