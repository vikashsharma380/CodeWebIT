import { useState } from "react";

export default function AdminCreateUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    role: "student",
  });

  const roles = [
    "student",
    "teacher",
    "admin",
    "director",
    "managing_director",
    "ceo",
  ];

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://api.codewebit.com/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(form),
      });

      const res = await response.json();

      if (!response.ok) return alert(res.message);

      alert("User created successfully!");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create User</h1>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          type="text"
          placeholder="Mobile"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />

        <select
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          {roles.map((r) => (
            <option key={r} value={r}>
              {r.toUpperCase()}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-700 text-white p-3 rounded hover:bg-blue-800"
        >
          Create User
        </button>
      </div>
    </div>
  );
}
