import React, { useState } from "react";
import heroImg from "./assets/hero.png";

const HomePage = () => {
  const [selectedProgram, setSelectedProgram] = useState(0);

  const programs = [
    {
      id: 1,
      title: "Full Stack Development",
      icon: "💻",
      duration: "6 Months",
      students: "8,234",
      price: "₹15,999",
      rating: 4.9,
      features: [
        "React, Vue & Next.js",
        "Node.js & Express Backend",
        "MongoDB & SQL Databases",
        "5+ Real-World Projects",
        "System Design Fundamentals",
        "1-on-1 Mentorship",
      ],
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      icon: "🧠",
      duration: "4 Months",
      students: "6,892",
      price: "₹12,999",
      rating: 4.95,
      features: [
        "Advanced DSA Patterns",
        "300+ Coding Problems",
        "System Design Concepts",
        "Mock Interviews",
        "Company-Specific Prep",
        "Career Guidance",
      ],
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      icon: "📈",
      duration: "6 Months",
      students: "4,561",
      price: "₹17,999",
      rating: 4.88,
      features: [
        "Python & TensorFlow",
        "Deep Learning & NLP",
        "Computer Vision",
        "Real Datasets & Projects",
        "Model Deployment",
        "Industry Mentors",
      ],
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 py-10 mx-auto md:px-20 md:py-16 max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT SIDE TEXT */}
          <div className="order-2 space-y-8 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 transition-transform duration-300 border border-blue-200 rounded-full bg-blue-50 w-fit hover:scale-105">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-600">
                Trusted by 25,000+ Students • 95% Placement Rate
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-black leading-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-7xl">
                Master
                <span className="block text-blue-600">In-Demand</span>
                <span className="block">Tech Skills</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              Learn from industry experts at Google, Amazon, and Microsoft.
              Build real projects. Get job-ready in 4–6 months with our
              comprehensive, mentor-led programs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:gap-4">
              <button className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 shadow-lg sm:text-lg rounded-xl hover:bg-blue-700 hover:shadow-2xl hover:scale-105 active:scale-95">
                Start Learning →
              </button>
              <button className="px-8 py-4 text-base font-bold text-gray-700 transition-all duration-300 border-2 border-gray-300 sm:text-lg rounded-xl hover:border-blue-400 hover:bg-blue-50 hover:scale-105 active:scale-95">
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid max-w-md grid-cols-3 gap-6 pt-12 border-t border-gray-200 sm:gap-8">
              {[
                { value: "25K+", label: "Students" },
                { value: "4.9★", label: "Rating" },
                { value: "95%", label: "Placement" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="transition-transform duration-300 group hover:-translate-y-2"
                >
                  <p className="text-2xl font-black text-gray-900 transition-colors sm:text-3xl group-hover:text-blue-600">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium text-gray-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Glow background effect */}
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent rounded-3xl blur-3xl opacity-40 animate-pulse"></div>

              {/* Image container */}
              <div className="relative group">
                <img
                  src={heroImg}
                  alt="Hero Illustration"
                  className="w-full h-auto transition-all duration-300 border-4 border-white shadow-2xl rounded-3xl drop-shadow-2xl group-hover:shadow-3xl"
                />

                {/* Floating accent cards */}
                <div className="absolute z-20 max-w-xs p-4 transition-all duration-300 bg-white border border-gray-100 shadow-xl -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 rounded-2xl sm:p-5 hover:-translate-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold text-blue-600 bg-blue-100 sm:w-14 sm:h-14 rounded-xl sm:text-2xl">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 sm:text-base">
                        Job Ready in 6 Months
                      </p>
                      <p className="text-xs text-gray-500 sm:text-sm">
                        with structured learning
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top right accent */}
                <div className="absolute z-20 max-w-xs p-4 transition-all duration-300 border border-blue-500 shadow-xl -top-6 -right-6 sm:-top-8 sm:-right-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl sm:p-5 hover:-translate-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-white sm:text-xl">⭐</span>
                    <p className="text-sm font-bold text-white sm:text-base">
                      4.9/5 Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="px-6 py-24 md:px-20 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Why Choose CW Institute
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              We provide everything you need to succeed in tech
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: "🎯",
                title: "Industry-Aligned Curriculum",
                desc: "Designed by engineers at top companies. Learn what recruiters actually look for.",
              },
              {
                icon: "💻",
                title: "Build Real Projects",
                desc: "Create 5-10 portfolio projects that impress employers and boost your resume.",
              },
              {
                icon: "👥",
                title: "Expert Mentorship",
                desc: "Get 1-on-1 guidance from engineers with 10+ years of industry experience.",
              },
              {
                icon: "🏆",
                title: "Career Support",
                desc: "Interview prep, resume reviews, and direct job placement assistance included.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="mb-4 text-4xl sm:text-5xl">{item.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="px-6 py-24 bg-white md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Learning Programs
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Choose a structured path based on your career goals
            </p>
          </div>

          {/* Program Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 lg:justify-start">
            {programs.map((prog, i) => (
              <button
                key={i}
                onClick={() => setSelectedProgram(i)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  selectedProgram === i
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {prog.title}
              </button>
            ))}
          </div>

          {/* Program Details */}
          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Left - Program Card */}
            <div className="p-10 transition-all duration-300 border-2 border-blue-200 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:-translate-y-2">
              <div className="mb-6 text-5xl sm:text-6xl">
                {programs[selectedProgram].icon}
              </div>
              <h3 className="mb-8 text-3xl font-bold text-gray-900">
                {programs[selectedProgram].title}
              </h3>

              <div className="mb-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Duration</span>
                  <span className="font-bold text-gray-900">
                    {programs[selectedProgram].duration}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-blue-200">
                  <span className="font-medium text-gray-700">
                    Students Enrolled
                  </span>
                  <span className="font-bold text-gray-900">
                    {programs[selectedProgram].students}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Rating</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">
                      {programs[selectedProgram].rating}
                    </span>
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 text-lg font-bold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95">
                Enroll Now • {programs[selectedProgram].price}
              </button>
            </div>

            {/* Right - Features */}
            <div>
              <h4 className="mb-8 text-2xl font-bold text-gray-900">
                What You'll Learn
              </h4>
              <div className="space-y-4">
                {programs[selectedProgram].features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 transition-all duration-300 rounded-lg hover:bg-gray-50 hover:translate-x-2"
                  >
                    <span className="flex-shrink-0 text-2xl text-blue-600">
                      ✓
                    </span>
                    <span className="text-lg font-medium text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNING ROADMAP ================= */}
      <section className="px-6 py-24 md:px-20 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Your Learning Roadmap
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Follow our structured path from beginner to job-ready professional
            </p>
          </div>

          {/* Horizontal Roadmap */}
          <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl md:p-12">
            {/* Road with checkpoints */}
            <div className="relative flex items-center justify-between pb-16 overflow-x-auto">
              {/* Road line */}
              <div className="absolute left-0 right-0 h-2 rounded-full bottom-8 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"></div>

              {/* Checkpoints */}
              {[
                { num: "1", title: "Foundation", desc: "Basics & Setup" },
                { num: "2", title: "Core Skills", desc: "Problem Solving" },
                { num: "3", title: "Advanced", desc: "System Design" },
                { num: "4", title: "Projects", desc: "Build Portfolio" },
                { num: "5", title: "Interviews", desc: "Get Hired" },
              ].map((checkpoint, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center flex-1 gap-4 transition-transform duration-300 hover:scale-110"
                >
                  {/* Circle */}
                  <div className="flex items-center justify-center w-16 h-16 text-xl font-bold text-white transition-all duration-300 border-4 border-white rounded-full shadow-lg cursor-pointer bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    {checkpoint.num}
                  </div>
                  {/* Label */}
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-900 md:text-base">
                      {checkpoint.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {checkpoint.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Details for each checkpoint */}
            <div className="grid gap-6 mt-20 md:grid-cols-5">
              {[
                {
                  num: "1",
                  title: "Foundation",
                  duration: "Weeks 1-4",
                  items: [
                    "Programming Basics",
                    "Data Structures",
                    "Dev Setup",
                    "First Projects",
                  ],
                },
                {
                  num: "2",
                  title: "Core Skills",
                  duration: "Weeks 5-10",
                  items: [
                    "Problem Patterns",
                    "Algorithms",
                    "Code Quality",
                    "Real Projects",
                  ],
                },
                {
                  num: "3",
                  title: "Advanced",
                  duration: "Weeks 11-18",
                  items: [
                    "System Design",
                    "Performance",
                    "Best Practices",
                    "Advanced Projects",
                  ],
                },
                {
                  num: "4",
                  title: "Projects",
                  duration: "Weeks 19-24",
                  items: [
                    "Build Portfolio",
                    "Specialization",
                    "Deployment",
                    "Polish Work",
                  ],
                },
                {
                  num: "5",
                  title: "Get Hired",
                  duration: "Final Month",
                  items: [
                    "Mock Interviews",
                    "Resume Build",
                    "Apply Jobs",
                    "Placement",
                  ],
                },
              ].map((checkpoint, i) => (
                <div
                  key={i}
                  className="p-6 transition-all duration-300 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-2"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-blue-600 rounded-full">
                      {checkpoint.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {checkpoint.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {checkpoint.duration}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {checkpoint.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-700 transition-transform duration-300 hover:translate-x-1"
                      >
                        <span className="font-bold text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Progress Info */}
            <div className="p-8 mt-16 text-center border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
              <p className="mb-2 text-2xl font-bold text-gray-900">
                6 Months to Your Dream Job
              </p>
              <p className="text-gray-700">
                Complete this roadmap and you'll be fully job-ready with a
                strong portfolio and interview skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-6 py-24 bg-white md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Student Success Stories
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Rahul Kumar",
                role: "Software Engineer at Google",
                text: "CW Institute transformed my career. The mentors are incredibly supportive and knowledgeable.",
              },
              {
                name: "Priya Singh",
                role: "Full Stack Engineer at Amazon",
                text: "The project-based approach is fantastic. I went from beginner to landing a job at Amazon.",
              },
              {
                name: "Arjun Patel",
                role: "ML Engineer at Microsoft",
                text: "Best investment for my career. The interview prep and support helped me land multiple offers.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 transition-all duration-300 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-lg text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-gray-700">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-blue-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-32 text-white bg-blue-600 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-6xl">
            Ready to Transform Your Career?
          </h2>
          <p className="mb-12 text-xl leading-relaxed text-blue-100">
            Join 25,000+ students who are learning, growing, and landing amazing
            opportunities at top tech companies.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-10 py-4 text-lg font-bold text-blue-600 transition-all duration-300 bg-white rounded-lg hover:bg-gray-100 hover:scale-105 active:scale-95">
              Start Free Trial
            </button>
            <button className="px-10 py-4 text-lg font-bold text-white transition-all duration-300 border-2 border-white rounded-lg hover:bg-white hover:bg-opacity-10 hover:scale-105 active:scale-95">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
