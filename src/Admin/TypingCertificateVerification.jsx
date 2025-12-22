import React from "react";
import { CheckCircle } from "lucide-react";

export default function TypingCertificateVerification() {
  const data = {
    verified: true,
    title: "Typing Certificate Verification",

    // STUDENT
    name: "Alok Kumar S/O Vidhya Mishra",
    enrollmentNo: "EN879704",
    rollNo: "RN000025",
    certificateNo: "CNXDDMUDKX",
    issueDate: "30 Jun 2025",

    course: "Certificate in Computer Typing (Hindi & English)",
    duration: "6 Months",
    period: "31 Dec 2024 – 30 Jun 2025",

    performance: [
      {
        subject: "Computer Hindi Typing",
        expected: "100 WPM",
        obtained: "35 WPM",
        accuracy: "88.00%",
      },
      {
        subject: "Computer English Typing",
        expected: "100 WPM",
        obtained: "42 WPM",
        accuracy: "91.00%",
      },
    ],

    avgSpeed: "38.50 WPM",
    avgAccuracy: "89.50%",

    // ✅ YOUR INSTITUTE DETAILS (UPDATED)
    institute: "CODE WEB INSTITUTE OF TECHNOLOGY",
    centerName: "Code Web Institute of Technology",
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
              {data.title}
            </h1>
            <p className="text-sm text-neutral-500">
              Official typing skill verification record — {data.institute}
            </p>
          </div>

          {data.verified && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm">
              <CheckCircle size={16} />
              Verified
            </span>
          )}
        </div>

        {/* PROFILE */}
        <div className="flex flex-col gap-6 px-6 py-6 border-b lg:flex-row">
          <img
            src={data.photo}
            alt="Candidate"
            className="object-cover w-20 h-20 border rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-neutral-800">
              {data.name}
            </h2>

            <div className="grid grid-cols-1 gap-4 p-4 mt-4 text-sm border rounded-lg sm:grid-cols-2 lg:grid-cols-4 bg-neutral-50">
              <Meta label="Enrollment No." value={data.enrollmentNo} />
              <Meta label="Roll No." value={data.rollNo} />
              <Meta
                label="Certificate No."
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
            This is to certify that the candidate has successfully completed the
            course{" "}
            <span className="font-semibold text-neutral-900">
              {data.course}
            </span>{" "}
            at{" "}
            <span className="font-semibold text-neutral-900">
              {data.institute}
            </span>{" "}
            and demonstrated satisfactory typing proficiency as per institute
            standards.
          </p>

          <div className="grid max-w-xl grid-cols-1 gap-4 mx-auto mt-4 sm:grid-cols-2">
            <Stat label="Duration" value={data.duration} />
            <Stat label="Training Period" value={data.period} />
          </div>
        </div>

        {/* TYPING PERFORMANCE */}
        <div className="px-6 pb-6">
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-center uppercase text-emerald-700">
            Typing Performance
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border text-sm">
              <thead className="bg-neutral-100">
                <tr>
                  <Th>Subject</Th>
                  <Th>Expected Speed</Th>
                  <Th>Obtained Speed</Th>
                  <Th>Accuracy</Th>
                </tr>
              </thead>
              <tbody>
                {data.performance.map((p, i) => (
                  <tr key={i} className="border-t">
                    <Td>{p.subject}</Td>
                    <Td>{p.expected}</Td>
                    <Td className="font-medium">{p.obtained}</Td>
                    <Td className="font-medium text-emerald-700">
                      {p.accuracy}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 mt-4 text-sm sm:flex-row sm:justify-center">
            <Summary label="Average Speed" value={data.avgSpeed} />
            <Summary label="Average Accuracy" value={data.avgAccuracy} />
          </div>
        </div>

        {/* STATUS */}
        <div className="px-6 pb-6 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white rounded-full bg-emerald-600">
            <CheckCircle size={16} />
            Valid & Verified
          </span>
        </div>

        {/* AUTHORIZED CENTER */}
        <div className="px-6 py-5 text-sm border-t bg-neutral-50">
          <p className="mb-1 font-semibold text-neutral-800">
            Authorized Training Center
          </p>
          <p>{data.centerName}</p>
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

const Stat = ({ label, value }) => (
  <div className="p-3 text-sm text-center border rounded-lg">
    <p className="mb-1 text-neutral-500">{label}</p>
    <p className="font-semibold text-neutral-800">{value}</p>
  </div>
);

const Summary = ({ label, value }) => (
  <div className="px-4 py-2 text-center border rounded-lg bg-emerald-50 border-emerald-200">
    <p className="text-xs text-neutral-500">{label}</p>
    <p className="font-semibold text-emerald-700">{value}</p>
  </div>
);

const Th = ({ children }) => (
  <th className="px-4 py-3 font-medium text-left text-neutral-700">
    {children}
  </th>
);

const Td = ({ children, className = "" }) => (
  <td className={`px-4 py-3 text-neutral-700 ${className}`}>{children}</td>
);
