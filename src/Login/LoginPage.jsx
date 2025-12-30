import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function LoginPage() {
  
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://api.codewebit.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const res = await response.json();
      if (!response.ok) return alert(res.message);

      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.user.role);
      alert("Login successful!");
     
// login success ke baad
navigate("/admin");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Card */}
      <div className="w-full max-w-sm p-8 bg-white shadow-xl rounded-2xl">
        {/* Title */}
        <h1 className="mb-2 text-3xl font-extrabold text-center text-slate-800">
          Admin Login
        </h1>
        <p className="mb-8 text-sm text-center text-slate-500">
          Please sign in to continue
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-slate-600">
            Email
          </label>
          <input
            type="email"
            placeholder="admin@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-slate-600">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 font-semibold text-white transition-all duration-200 bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Login
        </button>
      </div>
    </div>
  );
}
