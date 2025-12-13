import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex-grow max-w-5xl p-8 mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-primary">
            Pioneering Tech Education
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-secondary">
            We are more than an institute; we are a launchpad for the next
            generation of digital creators and innovators.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Story</h2>
            <p className="leading-relaxed text-secondary">
              Founded in 2020, CW Institute was born from a passion for
              technology and a belief that high-quality digital education should
              be accessible to all. We saw a gap between traditional learning
              and the fast-paced demands of the tech industry, and we set out to
              bridge it.
            </p>
          </div>
          <div className="p-8 border rounded-lg bg-card border-border">
            <svg
              className="w-full h-full text-accent"
              fill="none"
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="p-10 text-center border rounded-lg bg-card border-border"
        >
          <h2 className="mb-4 text-3xl font-bold text-primary">
            Our Philosophy
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-secondary">
            Our mission is to empower students with practical, in-demand skills.
            We believe in learning by doing. Our curriculum is project-based,
            ensuring that students not only learn theory but also gain the
            hands-on experience necessary to excel and lead in the ever-evolving
            tech industry.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
