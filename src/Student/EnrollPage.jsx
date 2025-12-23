import { useEffect, useState } from "react";

export default function EnrollPage() {
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [installments, setInstallments] = useState(1);
  const [student, setStudent] = useState({ name: "", email: "", mobile: "" });
  const [enrollment, setEnrollment] = useState(null);

  useEffect(()=> {
    fetch("http://api.codewebit.com/api/fees/courses").then(r=>r.json()).then(setCourses);
  },[]);

  useEffect(()=>{
    if (!selectedCourse) return setBatches([]);
    fetch(`http://api.codewebit.com/api/fees/batches?courseId=${selectedCourse}`).then(r=>r.json()).then(setBatches);
  },[selectedCourse]);

  const createEnrollment = async () => {
    try {
      const res = await fetch("http://api.codewebit.com/api/fees/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: student.name,
          email: student.email,
          mobile: student.mobile,
          courseId: selectedCourse,
          batchId: selectedBatch,
          installmentCount: Number(installments)
        })
      });
      const data = await res.json();
      if (!res.ok) return alert(data.message || "Enroll failed");
      setEnrollment(data.enrollment);
      alert("Enrolled. Now choose payment option.");
    } catch (err) {
      alert("Error");
    }
  };

  const payNow = async (amount) => {
    // step 1: create order on server
    const res = await fetch("http://api.codewebit.com/api/fees/payments/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enrollmentId: enrollment._id, amount })
    });
    const data = await res.json();
    if (!res.ok) return alert(data.message || "Order creation failed");

    const order = data.order;

    // step 2: open Razorpay checkout
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // set in .env.local
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      handler: async function (response) {
        // verify on server
        const verify = await fetch("http://api.codewebit.com/api/fees/payments/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            enrollmentId: enrollment._id,
            amount: order.amount / 100
          })
        });
        const v = await verify.json();
        if (!verify.ok) return alert(v.message || "Payment verification failed");
        alert("Payment successful & verified");
        // optionally redirect to receipt page
        window.location.href = `/enrollment/${enrollment._id}`;
      },
      prefill: { name: student.name, email: student.email, contact: student.mobile },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Enroll</h1>

      <div className="space-y-3">
        <input placeholder="Name" value={student.name} onChange={e=>setStudent({...student, name:e.target.value})} className="w-full p-2 border rounded" />
        <input placeholder="Email" value={student.email} onChange={e=>setStudent({...student, email:e.target.value})} className="w-full p-2 border rounded" />
        <input placeholder="Mobile" value={student.mobile} onChange={e=>setStudent({...student, mobile:e.target.value})} className="w-full p-2 border rounded" />

        <select value={selectedCourse} onChange={e=>setSelectedCourse(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select Course</option>
          {courses.map(c=> <option key={c._id} value={c._id}>{c.title} — ₹{c.totalFee}</option>)}
        </select>

        <select value={selectedBatch} onChange={e=>setSelectedBatch(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select Batch</option>
          {batches.map(b=> <option key={b._id} value={b._id}>{b.name} — {b.timing}</option>)}
        </select>

        <div className="flex gap-2 items-center">
          <label>Installments:</label>
          <input type="number" min="1" value={installments} onChange={e=>setInstallments(e.target.value)} className="w-24 p-2 border rounded" />
        </div>

        <div className="flex gap-2">
          <button onClick={createEnrollment} className="px-4 py-2 bg-green-600 text-white rounded">Create Enrollment</button>
          {enrollment && (
            <button onClick={()=>payNow(enrollment.installments.find(it=>!it.paid).amount || 0)} className="px-4 py-2 bg-blue-700 text-white rounded">Pay First Installment</button>
          )}
        </div>
      </div>
    </div>
  );
}
