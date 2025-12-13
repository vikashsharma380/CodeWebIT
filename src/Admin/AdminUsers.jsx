import { useEffect, useState } from "react";
import EditUserModal from "./EditUserModal";

const roles = ["", "student", "teacher", "admin", "director", "managing_director", "ceo"];

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [q, setQ] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);

  const fetchUsers = async (p = page) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", p);
      params.set("limit", limit);
      if (q) params.set("q", q);
      if (role) params.set("role", role);

      const res = await fetch(`http://localhost:5000/api/users?${params.toString()}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      });
      const data = await res.json();
      if (!res.ok) return alert(data.message || "Failed to fetch");
      setUsers(data.users || []);
      setPage(data.page || 1);
      setPages(data.pages || 1);
      setTotal(data.total || 0);
    } catch (err) {
      alert("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(1); }, []); // initial load

  const handleSearch = () => { fetchUsers(1); };

  const handleDelete = async (id) => {
    if (!confirm("Delete this user?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      });
      const data = await res.json();
      if (!res.ok) return alert(data.message || "Delete failed");
      alert("User deleted");
      fetchUsers(page);
    } catch (err) {
      alert("Error deleting user");
    }
  };

  const gotoPage = (p) => {
    if (p < 1 || p > pages) return;
    setPage(p);
    fetchUsers(p);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <div className="flex gap-3 mb-4">
        <input className="border p-2 rounded flex-1" placeholder="Search name or email" value={q} onChange={e=>setQ(e.target.value)} />
        <select className="border p-2 rounded" value={role} onChange={e=>setRole(e.target.value)}>
          <option value="">ALL ROLES</option>
          {roles.slice(1).map(r=> <option key={r} value={r}>{r.toUpperCase()}</option>)}
        </select>
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-700 text-white rounded">Search</button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Created</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="5" className="p-4 text-center">Loading...</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan="5" className="p-4 text-center">No users</td></tr>
            ) : users.map(u => (
              <tr key={u._id} className="border-t">
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3">{u.role}</td>
                <td className="px-4 py-3">{new Date(u.createdAt).toLocaleString()}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={()=>setEditing(u)} className="mr-2 px-3 py-1 border rounded">Edit</button>
                  <button onClick={()=>handleDelete(u._id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div>Showing {users.length} of {total}</div>
        <div className="flex gap-2 items-center">
          <button onClick={()=>gotoPage(page-1)} className="px-3 py-1 border rounded" disabled={page<=1}>Prev</button>
          <div>Page {page} / {pages}</div>
          <button onClick={()=>gotoPage(page+1)} className="px-3 py-1 border rounded" disabled={page>=pages}>Next</button>
        </div>
      </div>

      {/* Edit modal */}
      {editing && <EditUserModal user={editing} onClose={()=>setEditing(null)} onSaved={()=>fetchUsers(page)} />}
    </div>
  );
}
