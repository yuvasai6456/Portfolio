// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About({ data }) {
  const { heroDescription, name, email, phone, location } = data;
  return (
    <section className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-gray-300 mb-4"
      >
        {heroDescription}
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div><strong>Name:</strong> {data.name}</div>
        <div><strong>Location:</strong> {location}</div>
        <div><strong>Email:</strong> <a href="mailto:{email}" className="text-purple-400 hover:underline">{email}</a></div>
        <div><strong>Phone:</strong> {phone}</div>
      </motion.div>
    </section>
  );
}
