import { useEffect, useState } from "react";

export default function ManageBatches() {
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [form, setForm] = useState({
    name: "",
    timing: "",
    seats: ""
  });
  const [editingId, setEditingId] = useState(null);

  const fetchCourses = async () => {
    const res = await fetch("https://api.codewebit.com/api/fees/courses");
    const data = await res.json();
    setCourses(data);
  };

  const fetchBatches = async () => {
    if (!selectedCourse) return setBatches([]);
    const res = await fetch(`https://api.codewebit.com/api/fees/batches?courseId=${selectedCourse}`);
    const data = await res.json();
    setBatches(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    fetchBatches();
  }, [selectedCourse]);

  const saveBatch = async () => {
    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `https://api.codewebit.com/api/fees/batches/${editingId}`
      : "https://api.codewebit.com/api/fees/batches";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, courseId: selectedCourse })
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert("Batch saved!");
    setForm({ name: "", timing: "", seats: "" });
    setEditingId(null);
    fetchBatches();
  };

  const editBatch = (b) => {
    setEditingId(b._id);
    setForm({ name: b.name, timing: b.timing, seats: b.seats });
  };

  const deleteBatch = async (id) => {
    if (!window.confirm("Delete batch?")) return;
    const res = await fetch(`https://api.codewebit.com/api/fees/batches/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) return alert(data.message);
    alert("Batch deleted");
    fetchBatches();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Batches</h1>

      <select
        className="border p-2 mb-4"
        value={selectedCourse}
        onChange={e=>setSelectedCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map(c => (
          <option key={c._id} value={c._id}>{c.title}</option>
        ))}
      </select>

      {selectedCourse && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Add/Edit Form */}
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl mb-3">{editingId ? "Edit Batch" : "Add Batch"}</h2>

            <input className="border p-2 w-full mb-2" placeholder="Batch Name"
              value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />

            <input className="border p-2 w-full mb-2" placeholder="Timing"
              value={form.timing} onChange={e=>setForm({...form, timing:e.target.value})} />

            <input className="border p-2 w-full mb-2" placeholder="Seats"
              value={form.seats} onChange={e=>setForm({...form, seats:e.target.value})} />

            <button onClick={saveBatch} className="px-4 py-2 bg-blue-700 text-white rounded">
              Save
            </button>
          </div>

          {/* Batch List */}
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl mb-3">Batches</h2>

            {batches.map(b => (
              <div key={b._id} className="border p-3 rounded mb-2 flex justify-between">
                <div>
                  <p className="font-semibold">{b.name}</p>
                  <p>{b.timing}</p>
                </div>

                <div>
                  <button onClick={()=>editBatch(b)} className="px-3 py-1 border rounded mr-2">Edit</button>
                  <button onClick={()=>deleteBatch(b._id)} className="px-3 py-1 bg-red-600 text-white rounded">
                    Delete
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
