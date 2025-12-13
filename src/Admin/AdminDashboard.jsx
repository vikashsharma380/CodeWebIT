import { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminDashboard() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/users/summary", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Dashboard Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="p-6 bg-blue-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-3xl font-bold">{summary.totalUsers}</p>
          </div>

          <div className="p-6 bg-green-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Students</h2>
            <p className="text-3xl font-bold">{summary.students}</p>
          </div>

          <div className="p-6 bg-yellow-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Teachers</h2>
            <p className="text-3xl font-bold">{summary.teachers}</p>
          </div>

          <div className="p-6 bg-red-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Admins</h2>
            <p className="text-3xl font-bold">{summary.admins}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
