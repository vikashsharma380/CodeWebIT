import { useState } from "react";

const problemsData = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    status: "Solved",
  },
  {
    id: 2,
    title: "Reverse String",
    difficulty: "Easy",
    category: "String",
    status: "Solved",
  },
  {
    id: 3,
    title: "Valid Parentheses",
    difficulty: "Medium",
    category: "Stack",
    status: "Solved",
  },
  {
    id: 4,
    title: "Binary Search",
    difficulty: "Easy",
    category: "Searching",
    status: "Solved",
  },
  {
    id: 5,
    title: "Merge Intervals",
    difficulty: "Hard",
    category: "Array",
    status: "Solved",
  },
];

export default function Problems() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filteredProblems = problemsData.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchDifficulty = difficulty === "All" || p.difficulty === difficulty;
    return matchSearch && matchDifficulty;
  });

  const badge = (level) => {
    if (level === "Easy") return "bg-green-100 text-green-700";
    if (level === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-slate-900">
            Practice Problems
          </h1>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="px-4 py-2 border rounded-lg border-slate-300"
            >
              <option>All</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden bg-white border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-5 py-3 text-sm font-semibold text-slate-600">
                  Status
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-slate-600">
                  Title
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-slate-600">
                  Category
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-slate-600">
                  Difficulty
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProblems.map((p) => (
                <tr key={p.id} className="border-t hover:bg-slate-50">
                  <td className="px-5 py-4">
                    {p.status === "Solved" ? "✅" : "⭕"}
                  </td>

                  <td className="px-5 py-4 font-medium text-blue-700 cursor-pointer hover:underline">
                    {p.title}
                  </td>

                  <td className="px-5 py-4 text-slate-600">{p.category}</td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${badge(
                        p.difficulty
                      )}`}
                    >
                      {p.difficulty}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredProblems.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="px-5 py-8 text-center text-slate-500"
                  >
                    No problems found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
