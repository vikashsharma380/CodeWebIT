import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

export default function AdminDashboard() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetch("http://api.codewebit.com/api/users/summary", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <AdminNavbar />

      {/* Dashboard Content */}
      <div className="p-10">
        <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="p-6 bg-blue-100 shadow rounded-xl">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-3xl font-bold">{summary.totalUsers}</p>
          </div>

          <div className="p-6 bg-green-100 shadow rounded-xl">
            <h2 className="text-xl font-semibold">Students</h2>
            <p className="text-3xl font-bold">{summary.students}</p>
          </div>

          <div className="p-6 bg-yellow-100 shadow rounded-xl">
            <h2 className="text-xl font-semibold">Teachers</h2>
            <p className="text-3xl font-bold">{summary.teachers}</p>
          </div>

          <div className="p-6 bg-red-100 shadow rounded-xl">
            <h2 className="text-xl font-semibold">Admins</h2>
            <p className="text-3xl font-bold">{summary.admins}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
