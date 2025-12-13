import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const res = await response.json();
      if (!response.ok) return alert(res.message);

      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.user.role);
      alert("Login successful!");
      window.location.href = "/admin";
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="mb-6 text-3xl font-bold">Login</h1>

      <input
        type="email"
        className="w-80 p-3 border rounded mb-3"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-80 p-3 border rounded mb-3"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="px-6 py-2 text-white bg-blue-700 rounded hover:bg-blue-800"
      >
        Login
      </button>
    </div>
  );
}
