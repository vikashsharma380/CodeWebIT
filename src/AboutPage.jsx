import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="flex-grow bg-background">
      {/* ================= HERO BLOCK ================= */}
      <section className="px-6 border-b py-28 border-border">
        <div className="grid items-center max-w-6xl gap-16 mx-auto md:grid-cols-2">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold tracking-wide uppercase text-accent">
              About Us
            </p>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-primary">
              Practical Tech Education
              <br />
              Built for Real Careers
            </h1>

            <p className="text-lg leading-relaxed text-secondary">
              Code Web Institute of Technology focuses on real skills, real
              discipline, and real-world execution — not shortcuts.
            </p>
          </motion.div>

          {/* VISUAL ANCHOR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="p-10 border rounded-3xl bg-card border-border"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                ["1500+", "Students Trained"],
                ["120+", "Live Projects"],
                ["15+", "Programs"],
                ["5+ Years", "Experience"],
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {item[0]}
                  </div>
                  <div className="mt-1 text-sm text-secondary">{item[1]}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY STRIP ================= */}
      <section className="px-6 py-24 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 border rounded-3xl bg-card border-border"
          >
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Why We Exist
            </h2>
            <p className="text-lg leading-relaxed text-secondary">
              Traditional education often produces certificate holders without
              confidence. We built Code Web Institute of Technology to train
              students through hands-on execution, real projects, and mentor
              correction — so they are ready for real jobs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-primary">
            How We Train
          </h2>

          <div className="grid gap-10 md:grid-cols-4">
            {[
              "Strong Fundamentals",
              "Hands-on Projects",
              "Mentor Review",
              "Industry Execution",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 text-center border rounded-2xl bg-card border-border"
              >
                <div className="mb-2 text-sm font-semibold text-accent">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-primary">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY CREDIT ================= */}
      <section className="px-6 border-t py-28 border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-4 text-3xl font-bold text-primary">
            Industry-Backed Training
          </h3>
          <p className="text-lg leading-relaxed text-secondary">
            Code Web Institute of Technology operates as a unit of{" "}
            <span className="font-semibold text-primary">Code Web Telecom</span>
            , ensuring students learn under real workflows, professional
            standards, and industry expectations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
