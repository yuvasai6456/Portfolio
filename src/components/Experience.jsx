// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

export default function Experience({ data }) {
  const { experience } = data;
  return (
    <section className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Experience
      </motion.h2>
      <div className="relative border-l-2 border-purple-500 ml-4">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="mb-8 ml-8 p-4 bg-gray-800 bg-opacity-60 backdrop-blur-xs rounded-lg shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-2">
              <Briefcase className="text-purple-400 mr-2" size={20} />
              <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
            </div>
            <div className="flex items-center text-gray-400 mb-1">
              <Calendar className="mr-2" size={16} />
              <span>{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-2"><strong>{exp.role}</strong></p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
