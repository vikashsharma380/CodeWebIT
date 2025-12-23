import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function CertificateVerification() {
  const { certificateNo } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/documents/verify/${certificateNo}`)
      .then(res => res.json())
      .then(out => {
        if (out.success) {
          setData(out.document);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [certificateNo]);

  if (loading) {
    return <p className="text-center mt-20">Verifying certificate...</p>;
  }

  if (!data) {
    return (
      <div className="flex justify-center mt-20">
        <div className="px-6 py-4 text-red-700 bg-red-100 rounded-lg flex items-center gap-2">
          <XCircle />
          Certificate Not Found / Invalid
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen px-4 py-10 bg-neutral-100">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow">

        {/* HEADER */}
        <div className="flex justify-between px-6 py-5 border-b">
          <div>
            <h1 className="text-xl font-semibold">Certificate Verification</h1>
            <p className="text-sm text-neutral-500">
              CODE WEB INSTITUTE OF TECHNOLOGY
            </p>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full">
            <CheckCircle size={16} /> Verified
          </span>
        </div>

        {/* STUDENT */}
        <div className="flex gap-6 px-6 py-6 border-b">
          <img
            src={data.photo || "/photo.jpg"}
            alt="student"
            className="w-20 h-24 object-cover border rounded"
          />

          <div>
            <h2 className="text-lg font-semibold">{data.studentName}</h2>
            <p className="text-sm text-gray-500">
              S/O {data.fatherName}
            </p>

            <p className="mt-2 text-sm">
              <strong>Certificate No:</strong> {data.documentNo}
            </p>
            <p className="text-sm">
              <strong>Issued:</strong> {data.issueDate}
            </p>
          </div>
        </div>

        {/* COURSE */}
        <div className="px-6 py-6 text-sm">
          <p>
            Course: <strong>{data.courseName}</strong>
          </p>
          <p>Duration: {data.courseDuration}</p>
          <p>Period: {data.coursePeriod}</p>
          <p className="mt-2 font-semibold text-emerald-700">
            Grade: {data.grade} ({data.percentage}%)
          </p>
        </div>

      </div>
    </div>
  );
}
