import { useEffect, useState } from "react";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    totalFee: "",
    registrationFee: "",
    duration: ""
  });
  const [editingId, setEditingId] = useState(null);

  const fetchCourses = async () => {
    const res = await fetch("https://api.codewebit.com/api/fees/courses");
    const data = await res.json();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const saveCourse = async () => {
    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `https://api.codewebit.com/api/fees/courses/${editingId}`
      : "https://api.codewebit.com/api/fees/courses";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message || "Error");

    alert("Course saved!");
    setForm({ title: "", description: "", totalFee: "", registrationFee: "", duration: "" });
    setEditingId(null);
    fetchCourses();
  };

  const editCourse = (c) => {
    setEditingId(c._id);
    setForm({
      title: c.title,
      description: c.description,
      totalFee: c.totalFee,
      registrationFee: c.registrationFee,
      duration: c.duration
    });
  };

  const deleteCourse = async (id) => {
    if (!window.confirm("Delete course?")) return;
    const res = await fetch(`https://api.codewebit.com/api/fees/courses/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!res.ok) return alert(data.message);
    alert("Course deleted");
    fetchCourses();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl mb-3">{editingId ? "Edit Course" : "Add Course"}</h2>

          <input className="border p-2 w-full mb-2" placeholder="Course Title"
            value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />

          <textarea className="border p-2 w-full mb-2" placeholder="Description"
            value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />

          <input className="border p-2 w-full mb-2" placeholder="Total Fee"
            value={form.totalFee} onChange={e=>setForm({...form, totalFee:e.target.value})} />

          <input className="border p-2 w-full mb-2" placeholder="Registration Fee"
            value={form.registrationFee} onChange={e=>setForm({...form, registrationFee:e.target.value})} />

          <input className="border p-2 w-full mb-2" placeholder="Duration (e.g. 3 months)"
            value={form.duration} onChange={e=>setForm({...form, duration:e.target.value})} />

          <button onClick={saveCourse} className="px-4 py-2 bg-blue-700 text-white rounded">
            Save
          </button>

        </div>

        {/* Course List */}
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl mb-3">Courses List</h2>

          {courses.map(c => (
            <div key={c._id} className="border p-3 rounded mb-2 flex justify-between items-center">
              <div>
                <p className="font-semibold">{c.title}</p>
                <p>Fee: ₹{c.totalFee}</p>
              </div>
              <div>
                <button onClick={()=>editCourse(c)} className="px-3 py-1 border rounded mr-2">Edit</button>
                <button onClick={()=>deleteCourse(c._id)} className="px-3 py-1 bg-red-600 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
