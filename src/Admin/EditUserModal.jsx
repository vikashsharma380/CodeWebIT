import { useState, useEffect } from "react";

export default function EditUserModal({ user, onClose, onSaved }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "student",
    password: "" // optional: leave empty if not changing
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        mobile: user.mobile || "",
        role: user.role || "student",
        password: ""
      });
    }
  }, [user]);

  if (!user) return null;

  const handleSave = async () => {
    try {
      const body = { ...form };
      // if password empty, remove it
      if (!body.password) delete body.password;

      const res = await fetch(`http://api.codewebit.com/api/users/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (!res.ok) return alert(data.message || "Update failed");
      alert("User updated");
      onSaved();
      onClose();
    } catch (err) {
      alert("Error updating user");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>

        <input className="w-full p-2 border rounded mb-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" />
        <input className="w-full p-2 border rounded mb-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" />
        <input className="w-full p-2 border rounded mb-2" value={form.mobile} onChange={e=>setForm({...form, mobile:e.target.value})} placeholder="Mobile" />
        <select className="w-full p-2 border rounded mb-2" value={form.role} onChange={e=>setForm({...form, role:e.target.value})}>
          <option value="student">STUDENT</option>
          <option value="teacher">TEACHER</option>
          <option value="admin">ADMIN</option>
          <option value="director">DIRECTOR</option>
          <option value="managing_director">MANAGING_DIRECTOR</option>
          <option value="ceo">CEO</option>
        </select>

        <input className="w-full p-2 border rounded mb-4" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} placeholder="Password (leave blank to keep)" />

        <div className="flex gap-2 justify-end">
          <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-700 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
