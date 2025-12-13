import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Code, Layers, Rocket } from "lucide-react";

const CoursesPage = () => {
  const courseData = [
    {
      title: "React for Beginners",
      description: "Master the fundamentals of React and build modern UIs.",
      icon: <Code size={32} />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Advanced JavaScript",
      description:
        "Deep dive into advanced concepts with real-world JS examples.",
      icon: <Layers size={32} />,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "CSS & Tailwind Mastery",
      description:
        "Create beautiful, responsive interfaces with modern CSS tools.",
      icon: <BookOpen size={32} />,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Full-Stack Development",
      description: "Learn frontend, backend, databases & deploy real projects.",
      icon: <Rocket size={32} />,
      color: "from-green-500 to-green-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex-grow px-6 py-16 mx-auto max-w-7xl">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-5xl font-extrabold text-center text-gray-900"
      >
        Explore Our <span className="text-blue-600">Courses</span>
      </motion.h1>

      {/* Courses Grid */}
      <motion.div
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {courseData.map((course, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              y: -4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            className="p-8 transition-all bg-white border shadow-lg rounded-2xl hover:border-blue-300"
          >
            {/* Icon Section */}
            <div
              className={`inline-flex items-center justify-center w-14 h-14 mb-6 text-white rounded-xl bg-gradient-to-br ${course.color}`}
            >
              {course.icon}
            </div>

            {/* Title */}
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              {course.title}
            </h2>

            {/* Description */}
            <p className="mb-6 text-gray-600">{course.description}</p>

            {/* CTA Button */}
            <Link
              to="/register"
              className="inline-block px-5 py-2 font-semibold text-blue-600 transition-all rounded-lg bg-blue-50 hover:bg-blue-100"
            >
              Enroll Now →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoursesPage;
