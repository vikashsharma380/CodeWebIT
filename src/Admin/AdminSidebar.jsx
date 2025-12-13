import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "block px-4 py-2 bg-blue-700 text-white rounded"
      : "block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded";

  return (
    <div className="w-60 h-screen bg-white shadow-lg p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Admin Panel</h1>

      <NavLink to="/admin" className={linkClass}>
        Dashboard
      </NavLink>

      <NavLink to="/admin/create-user" className={linkClass}>
        Create User
      </NavLink>

      <NavLink to="/admin/users" className={linkClass}>
        View Users
      </NavLink>
      <NavLink to="/admin/enroll" className={linkClass}>
  Enroll Student
</NavLink>

<NavLink to="/admin/collect-fee" className={linkClass}>
  Collect Fee
</NavLink>

<NavLink to="/admin/courses" className={linkClass}>
  Manage Courses
</NavLink>

<NavLink to="/admin/batches" className={linkClass}>
  Manage Batches
</NavLink>


      <button
        className="w-full mt-10 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}
