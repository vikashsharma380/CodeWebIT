import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function CertificateVerification() {
  const { certificateNo } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!certificateNo) return;

    fetch(`http://api.codewebit.com/api/documents/verify/${certificateNo}`)
      .then(res => res.json())
      .then(out => {
        if (out.success) setData(out.document);
        else setData(null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [certificateNo]);

  /* ---------- STATES ---------- */

  if (loading) {
    return (
      <p className="mt-20 text-center text-gray-600">
        Verifying certificate…
      </p>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center mt-20">
        <div className="flex items-center gap-2 px-6 py-4 text-red-700 bg-red-100 border border-red-200 rounded-lg">
          <XCircle />
          Certificate Not Found / Invalid
        </div>
      </div>
    );
  }

  /* ---------- UI ---------- */

  return (
    <div className="flex justify-center min-h-screen px-4 py-10 bg-neutral-100">
      <div className="w-full max-w-5xl overflow-hidden bg-white rounded-xl shadow-lg">

        {/* HEADER */}
        <div className="flex flex-col gap-3 px-6 py-5 border-b sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold sm:text-2xl">
              Certificate Verification
            </h1>
            <p className="text-sm text-neutral-500">
              CODE WEB INSTITUTE OF TECHNOLOGY
            </p>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle size={16} />
            Verified
          </span>
        </div>

        {/* STUDENT PROFILE */}
        <div className="flex flex-col gap-6 px-6 py-6 border-b sm:flex-row sm:items-center">
          <img
            src={data.photo || "/photo.jpg"}
            alt="Student"
            className="object-cover w-20 h-24 border rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-lg font-semibold sm:text-xl">
              {data.studentName}
            </h2>
            <p className="text-sm text-neutral-500">
              S/O {data.fatherName}
            </p>

            <div className="grid grid-cols-1 gap-4 p-4 mt-4 text-sm border rounded-lg sm:grid-cols-2 bg-neutral-50">
              <Meta
                label="Certificate Number"
                value={data.documentNo}
                highlight
              />
              <Meta label="Date Issued" value={data.issueDate} />
            </div>
          </div>
        </div>

        {/* COURSE INFO */}
        <div className="px-6 py-6 text-center">
          <h3 className="mb-2 text-sm font-semibold tracking-wide uppercase text-emerald-700">
            Course Information
          </h3>
          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            This is to certify that the above candidate has successfully
            completed the course{" "}
            <span className="font-semibold text-neutral-900">
              {data.courseName}
            </span>{" "}
            at{" "}
            <span className="font-semibold text-neutral-900">
              CODE WEB INSTITUTE OF TECHNOLOGY
            </span>
            .
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 px-6 pb-6 sm:grid-cols-3">
          <Stat label="Duration" value={data.courseDuration} />
          <Stat label="Training Period" value={data.coursePeriod} />
          <Stat
            label="Overall Performance"
            value={`${data.percentage}%`}
            accent
          />
        </div>

        {/* GRADE */}
        <div className="grid grid-cols-1 gap-4 px-6 pb-6 sm:grid-cols-2">
          <div className="p-4 text-center border rounded-lg">
            <p className="mb-2 text-sm text-neutral-500">Grade Achieved</p>
            <div className="inline-flex items-center justify-center text-xl font-bold text-white rounded-full w-14 h-14 bg-emerald-600">
              {data.grade}
            </div>
          </div>

          <div className="p-4 text-center border rounded-lg">
            <p className="mb-2 text-sm text-neutral-500">Certificate Status</p>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle size={16} />
              Valid & Authentic
            </span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-5 text-sm border-t bg-neutral-50">
          <p className="mb-1 font-semibold">
            Authorized Training Center
          </p>
          <p>CODE WEB INSTITUTE OF TECHNOLOGY</p>
          <p>Motihari, East Champaran, Bihar</p>
        </div>

      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

const Meta = ({ label, value, highlight }) => (
  <div>
    <p className="mb-1 text-xs text-neutral-500">{label}</p>
    <p className={`font-medium ${highlight ? "text-emerald-700" : ""}`}>
      {value}
    </p>
  </div>
);

const Stat = ({ label, value, accent }) => (
  <div
    className={`border rounded-lg p-4 text-center ${
      accent ? "bg-emerald-50 border-emerald-200" : ""
    }`}
  >
    <p className="mb-1 text-sm text-neutral-500">{label}</p>
    <p className={`font-semibold ${accent ? "text-emerald-700" : ""}`}>
      {value}
    </p>
  </div>
);
