import { useEffect, useState } from "react";

export default function AdminCollectFee() {
  const [searchId, setSearchId] = useState("");
  const [enroll, setEnroll] = useState(null);

  const search = async () => {
    const res = await fetch(`http://localhost:5000/api/fees/enrollments/${searchId}`);
    const data = await res.json();
    if (!res.ok) return alert(data.message);
    setEnroll(data);
  };

  const payInstallment = async (i, amount) => {
    const mode = prompt("Payment Mode (cash/up i)?", "cash");
    if (!mode) return;

    const res = await fetch("http://localhost:5000/api/fees/pay-offline/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        enrollmentId: enroll._id,
        installmentIndex: i,
        amount,
        mode
      })
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert("Payment received!");
    search(); // refresh
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Collect Fee</h1>

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Enter Enrollment ID"
        onChange={(e) => setSearchId(e.target.value)}
      />

      <button
        onClick={search}
        className="px-4 py-2 bg-blue-700 text-white rounded"
      >
        Search
      </button>

      {enroll && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">{enroll.name}</h2>
          <p>Course: {enroll.courseId.title}</p>
          <p>Paid: ₹{enroll.paidAmount}</p>
          <p>Total: ₹{enroll.totalFee}</p>

          <h3 className="text-lg font-semibold mt-4">Installments</h3>

          {enroll.installments.map((ins, i) => (
            <div key={i} className="border p-3 rounded mt-2 flex justify-between">
              <div>
                <p>Amount: ₹{ins.amount}</p>
                <p>Due: {new Date(ins.dueDate).toDateString()}</p>
                <p>Status: {ins.paid ? "Paid" : "Pending"}</p>
              </div>

              {!ins.paid && (
                <button
                  onClick={() => payInstallment(i, ins.amount)}
                  className="px-3 py-1 bg-green-600 text-white rounded"
                >
                  Receive Payment
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
