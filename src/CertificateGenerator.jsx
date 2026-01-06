import { useState } from "react";

import TypingCertificate from "../src/TypingCertificate";
import ADCACertificate from "../src/ADCACertificate";
import ADCAMarksheet from "../src/ADCAMarksheet";
import InternshipCertificate from "../src/InternshipCertificate";
import FullStackCertificate from "../src/FullStackCertificate";
import CertificatesList from "./Admin/CertificatesList";
import AdminNavbar from "./Admin/AdminNavbar";

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  if (selected === "typing")
    return <TypingCertificate goBack={() => setSelected(null)} />;

  if (selected === "adca")
    return <ADCACertificate goBack={() => setSelected(null)} />;

  if (selected === "marksheet")
    return <ADCAMarksheet goBack={() => setSelected(null)} />;

  if (selected === "internship")
    return <InternshipCertificate goBack={() => setSelected(null)} />;

  if (selected === "fullstack")
    return <FullStackCertificate goBack={() => setSelected(null)} />;

  if (selected === "list")
    return <CertificatesList goBack={() => setSelected(null)} />;

  return (
    <div className="min-h-screen p-10 bg-slate-50">
      <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        <Card title="ADCA CERTIFICATE" onClick={() => setSelected("adca")} />
        <Card title="ADCA MARKSHEET" onClick={() => setSelected("marksheet")} />
        <Card
          title="TYPING CERTIFICATE"
          onClick={() => setSelected("typing")}
        />
        <Card
          title="INTERNSHIP CERTIFICATE"
          onClick={() => setSelected("internship")}
        />
        <Card
          title={"LIST OF CERTIFICATES"}
          onClick={() => setSelected("list")}
        />
        <Card
          title="FULL STACK CERTIFICATE"
          onClick={() => setSelected("fullstack")}
        />
      </div>
    </div>
  );
}

function Card({ title, onClick }) {
  return (
    <>
      <AdminNavbar />
      <div
        onClick={onClick}
        className="p-6 text-center bg-white border cursor-pointer rounded-xl hover:shadow-md"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-slate-500">Click to view & download</p>
      </div>{" "}
    </>
  );
}
