import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactData);
    setSubmitted(true);
    setContactData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 py-16 mx-auto md:px-20 md:py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-4 py-2 mx-auto mb-8 border border-blue-200 rounded-lg bg-blue-50 w-fit"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-600">
              Get In Touch
            </span>
          </motion.div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
            We'd Love to Hear
            <br />
            <span className="text-blue-600">From You</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 md:text-xl">
            Have questions about our programs? Want to start your learning
            journey? Reach out to us and we'll get back to you within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="px-6 py-24 md:px-20 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-12 md:grid-cols-2 lg:gap-20"
          >
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600">
                  Reach out to us through any of these channels. We're here to
                  help!
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail size={28} />,
                    title: "Email",
                    value: "contact@cwinstitute.com",
                    link: "mailto:contact@cwinstitute.com",
                    time: "Response within 24 hours",
                  },
                  {
                    icon: <Phone size={28} />,
                    title: "Phone",
                    value: "+91 (123) 456-7890",
                    link: "tel:+911234567890",
                    time: "Mon-Sat, 9 AM - 6 PM IST",
                  },
                  {
                    icon: <MapPin size={28} />,
                    title: "Location",
                    value: "New Delhi, India",
                    link: null,
                    time: "Available online worldwide",
                  },
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.1)",
                    }}
                    className="p-8 transition-all bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 text-blue-600 rounded-lg bg-blue-50">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-lg font-bold text-gray-900">
                          {contact.title}
                        </h3>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="text-lg font-semibold text-blue-600 hover:underline"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-gray-700">
                            {contact.value}
                          </p>
                        )}
                        <p className="mt-2 text-sm text-gray-500">
                          {contact.time}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 border-2 border-blue-200 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Quick Response Guarantee
                </h3>
                <ul className="space-y-2">
                  {[
                    "Email response within 24 hours",
                    "Live chat support available",
                    "Free consultation call",
                    "No commitment, no spam",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="flex-shrink-0 text-blue-600"
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 30px 60px rgba(37, 99, 235, 0.15)",
                }}
                className="p-10 transition-all bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-300"
              >
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Send us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                      className="p-4 mb-6 bg-green-100 rounded-full"
                    >
                      <CheckCircle size={48} className="text-green-600" />
                    </motion.div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      Thank You!
                    </h3>
                    <p className="mb-4 text-gray-600">
                      We've received your message and will get back to you
                      within 24 hours.
                    </p>
                    <p className="text-sm text-gray-500">
                      Make sure to check your email for our response.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    {/* Name Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <label className="block mb-2 text-sm font-semibold text-gray-900">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <label className="block mb-2 text-sm font-semibold text-gray-900">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                    </motion.div>

                    {/* Message Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <label className="block mb-2 text-sm font-semibold text-gray-900">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={contactData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry..."
                        rows="5"
                        required
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors border-2 border-gray-200 rounded-lg resize-none focus:outline-none focus:border-blue-600"
                      ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      onClick={handleSubmit}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 15px 35px rgba(37, 99, 235, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-full gap-2 py-4 text-lg font-bold text-white transition-colors bg-blue-600 rounded-lg shadow-lg cursor-pointer hover:bg-blue-700"
                    >
                      <Send size={20} />
                      Send Message
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="px-6 py-24 bg-white md:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Can't find your answer? Reach out to us directly!
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2"
          >
            {[
              {
                q: "How long is the course?",
                a: "Our programs range from 4-6 months depending on your chosen track. Each program is self-paced with live sessions.",
              },
              {
                q: "Can I start anytime?",
                a: "Yes! You can start any course anytime. New batches begin every week with flexible learning schedules.",
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 7-day money-back guarantee if you're not satisfied with the course content or teaching quality.",
              },
              {
                q: "Will I get a certificate?",
                a: "Yes, you'll receive an industry-recognized certificate upon completing your program with all projects.",
              },
              {
                q: "Is mentorship included?",
                a: "Absolutely! 1-on-1 mentorship from industry experts is included in all our programs.",
              },
              {
                q: "What's the job placement support?",
                a: "We provide interview prep, resume reviews, mock interviews, and direct referrals to hiring companies.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="p-8 transition-all border-2 border-gray-200 rounded-lg bg-gray-50 hover:border-blue-300"
              >
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {faq.q}
                </h3>
                <p className="leading-relaxed text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-24 text-white bg-blue-600 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mb-12 text-xl leading-relaxed text-blue-100">
            Get in touch with our team and start your learning journey today
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 text-lg font-bold text-blue-600 transition-colors bg-white rounded-lg cursor-pointer hover:bg-gray-100"
          >
            Contact Us Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
