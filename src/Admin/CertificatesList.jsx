import { useEffect, useState } from "react";

export default function CertificatesList() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.codewebit.com/api/documents")
      .then(res => res.json())
      .then(data => {
        if (data.success) setList(data.list);
      });
  }, []);

  const filtered = list.filter(d =>
    d.studentName?.toLowerCase().includes(search.toLowerCase()) ||
    d.documentNo?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-28 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Generated Certificates
        </h2>

        <input
          type="text"
          placeholder="Search by name or certificate no"
          className="px-4 py-2 border rounded-lg w-72"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Certificate No</th>
              <th className="p-3">Type</th>
              <th className="p-3">Student</th>
              <th className="p-3">Course</th>
              <th className="p-3">Grade</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-center">Photo</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan="8" className="p-6 text-center text-gray-500">
                  No certificates found
                </td>
              </tr>
            )}

            {filtered.map((d, i) => (
              <tr
                key={d._id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3">{i + 1}</td>

                <td className="p-3 font-semibold text-blue-700">
                  {d.documentNo}
                </td>

                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                    {d.documentType.replaceAll("_", " ").toUpperCase()}
                  </span>
                </td>

                <td className="p-3">
                  <div className="font-medium">{d.studentName}</div>
                  <div className="text-xs text-gray-500">
                    S/O {d.fatherName || "-"}
                  </div>
                </td>

                <td className="p-3">
                  <div>{d.courseName || "-"}</div>
                  <div className="text-xs text-gray-500">
                    {d.courseDuration}
                  </div>
                </td>

                <td className="p-3">
                  {d.grade ? (
                    <span className="font-semibold text-green-700">
                      {d.grade} ({d.percentage}%)
                    </span>
                  ) : (
                    "-"
                  )}
                </td>

                <td className="p-3">{d.issueDate}</td>

                <td className="p-3 text-center">
                  {d.photo ? (
                    <img
                      src={d.photo}
                      alt="student"
                      className="w-12 h-14 object-cover border rounded mx-auto"
                    />
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
