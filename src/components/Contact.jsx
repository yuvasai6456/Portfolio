// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact({ data }) {
  const { email, phone, linkedin, github } = data;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const mailtoLink = `mailto:${email}?subject=Contact%20from%20portfolio&body=Name:%20${encodeURIComponent(
    form.name
  )}%0D%0AEmail:%20${encodeURIComponent(form.email)}%0D%0AMessage:%20${encodeURIComponent(
    form.message
  )}`;

  return (
    <section className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-6 text-center"
      >
        Let's Connect
      </motion.h2>
      <p className="text-gray-300 mb-8 text-center">
        I'm always interested in learning, building, collaborating, and exploring opportunities in software development and emerging technologies.
      </p>
      <form
        action={mailtoLink}
        method="get"
        className="grid grid-cols-1 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-purple-500"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-purple-500"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-purple-500"
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition"
        >
          <Mail size={18} /> Send Message
        </button>
      </form>
      <div className="mt-8 text-center space-y-2 text-gray-400">
        <p>Email: <a href={`mailto:${email}`} className="text-purple-400 hover:underline">{email}</a></p>
        <p>Phone: {phone}</p>
        <p>LinkedIn: <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{linkedin}</a></p>
        <p>GitHub: <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{github}</a></p>
      </div>
    </section>
  );
}
