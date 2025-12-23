import React from "react";
import { CheckCircle } from "lucide-react";

export default function CertificateVerification() {
  const data = {
    verified: true,

    // STUDENT
    name: "Alok Kumar S/O Vidhya Mishra",
    certificateNo: "CNLKU1BHEN",
    issueDate: "06 January 2025",
    course: "Advance Diploma in Computer Application (M-CA-4021)",
    duration: "12 Months",
    period: "07 Jan 2024 – 06 Jan 2025",
    performance: "88.43%",
    grade: "A",

    // ✅ YOUR INSTITUTE DETAILS (UPDATED)
    institute: "CODE WEB INSTITUTE OF TECHNOLOGY",
    address: "Motihari, East Champaran, Bihar",
    email: "contact@codewebinstitute.com",
    phone: "+91 9504134324",

    photo: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="flex justify-center min-h-screen px-4 py-8 bg-neutral-100">
      <div className="w-full max-w-5xl overflow-hidden bg-white shadow-lg rounded-xl">
        {/* HEADER */}
        <div className="flex flex-col gap-3 px-6 py-5 border-b sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold sm:text-2xl text-neutral-900">
              Certificate Verification
            </h1>
            <p className="text-sm text-neutral-500">
              Official digital verification record — {data.institute}
            </p>
          </div>

          {data.verified && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle size={16} />
              Verified
            </span>
          )}
        </div>

        {/* PROFILE */}
        <div className="flex flex-col items-start gap-6 px-6 py-6 border-b sm:flex-row sm:items-center">
          <img
            src={data.photo}
            alt="Student"
            className="object-cover w-20 h-20 border rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-lg font-semibold sm:text-xl text-neutral-800">
              {data.name}
            </h2>

            <div className="grid grid-cols-1 gap-4 p-4 mt-4 text-sm border rounded-lg sm:grid-cols-2 bg-neutral-50">
              <Meta
                label="Certificate Number"
                value={data.certificateNo}
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
              {data.course}
            </span>{" "}
            at{" "}
            <span className="font-semibold text-neutral-900">
              {data.institute}
            </span>{" "}
            with satisfactory academic performance and discipline.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 px-6 pb-6 sm:grid-cols-3">
          <Stat label="Duration" value={data.duration} />
          <Stat label="Training Period" value={data.period} />
          <Stat label="Overall Performance" value={data.performance} accent />
        </div>

        {/* GRADE + STATUS */}
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

        {/* AUTHORIZED CENTER */}
        <div className="px-6 py-5 text-sm border-t bg-neutral-50">
          <p className="mb-1 font-semibold text-neutral-800">
            Authorized Training Center
          </p>
          <p>{data.institute}</p>
          <p>{data.address}</p>

          <div className="mt-3 text-neutral-600">
            <p>Email: {data.email}</p>
            <p>Contact: {data.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

const Meta = ({ label, value, highlight }) => (
  <div>
    <p className="mb-1 text-xs text-neutral-500">{label}</p>
    <p
      className={`font-medium ${
        highlight ? "text-emerald-700" : "text-neutral-800"
      }`}
    >
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
    <p
      className={`font-semibold ${
        accent ? "text-emerald-700" : "text-neutral-800"
      }`}
    >
      {value}
    </p>
  </div>
);
