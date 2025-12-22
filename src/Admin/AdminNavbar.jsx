import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function AdminNavbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-blue-700 text-white rounded"
      : "px-4 py-2 text-gray-700 hover:bg-blue-100 rounded";

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-3 bg-white shadow-md">
      {/* LEFT: LOGO / TITLE */}
      <h1 className="text-2xl font-bold text-blue-700">Admin Panel</h1>

      {/* CENTER: NAV LINKS */}
      <div className="flex items-center gap-2">
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

        <NavLink to="/certificate" className={linkClass}>
          Certificate
        </NavLink>

        {/* ✅ VERIFICATION DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 px-4 py-2 text-gray-700 rounded hover:bg-blue-100"
          >
            Verification
            <span className="text-sm">▼</span>
          </button>

          {open && (
            <div className="absolute left-0 z-50 w-64 mt-2 bg-white border rounded-lg shadow-lg">
              <NavLink
                to="/admin/verification"
                className="block px-4 py-2 hover:bg-blue-50"
                onClick={() => setOpen(false)}
              >
                Certificate Verification
              </NavLink>

              <NavLink
                to="/admin/marksheet-verification"
                className="block px-4 py-2 hover:bg-blue-50"
                onClick={() => setOpen(false)}
              >
                Marksheet Verification
              </NavLink>

              <NavLink
                to="/admin/typing-verification"
                className="block px-4 py-2 hover:bg-blue-50"
                onClick={() => setOpen(false)}
              >
                Typing Certificate Verification
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: LOGOUT */}
      <button
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </nav>
  );
}
