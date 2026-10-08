// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education({ data }) {
  const { education } = data;
  return (
    <section className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Education
      </motion.h2>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-xs p-4 rounded-lg shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-2">
              <GraduationCap className="text-purple-400 mr-2" size={20} />
              <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
            </div>
            <p className="text-gray-300"><strong>{edu.degree || edu.qualification}</strong></p>
            <p className="text-gray-400 flex items-center">
              <Calendar className="mr-1" size={14} /> GPA: {edu.gpa}
            </p>
            <p className="text-gray-400">Graduation: {edu.graduation}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
