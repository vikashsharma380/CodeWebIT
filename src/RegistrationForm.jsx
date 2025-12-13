import React, { useState } from "react";
import FormInput from "./FormInput";
import { motion } from "framer-motion";

const RegistrationForm = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    course: "",
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for registering for ${formData.course}, ${formData.firstName}!`
    );
    setFormData(initialFormState);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl p-10 mx-auto my-12 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-[0_8px_35px_rgba(0,0,0,0.08)]"
    >
      {/* HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Start Your Learning Journey
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Fill out the form to enroll in your chosen course.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* NAME ROW */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormInput
            id="firstName"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <FormInput
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* CONTACT ROW */}
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* ADDRESS SECTION */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          <div className="md:col-span-6">
            <FormInput
              id="address"
              name="address"
              label="Street Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <FormInput
            id="city"
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            className="md:col-span-2"
          />
          <FormInput
            id="state"
            name="state"
            label="State"
            value={formData.state}
            onChange={handleChange}
            className="md:col-span-2"
          />
          <FormInput
            id="zip"
            name="zip"
            label="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            className="md:col-span-2"
          />
        </div>

        {/* COURSE SELECT */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Select a Course
          </label>
          <select
            name="course"
            id="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="block w-full px-4 py-3 mt-1 text-gray-900 transition bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select a course
            </option>
            <option>React for Beginners</option>
            <option>Advanced JavaScript</option>
            <option>CSS & Tailwind</option>
            <option>Full-Stack Development</option>
          </select>
        </div>

        {/* COMMENTS */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Additional Comments
          </label>
          <textarea
            name="comments"
            id="comments"
            rows="4"
            value={formData.comments}
            onChange={handleChange}
            className="block w-full px-4 py-3 text-gray-900 transition bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(37,99,235,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="py-4 text-lg font-semibold text-white transition bg-blue-600 rounded-full shadow-lg px-14 hover:bg-blue-700"
          >
            Submit Registration
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
