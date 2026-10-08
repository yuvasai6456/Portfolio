// src/components/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications({ data }) {
  const { certifications } = data;
  return (
    <section className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Certifications
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-xs p-4 rounded-lg shadow flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <Award className="text-purple-400 mr-4" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
              <p className="text-gray-300">{cert.provider}</p>
              <p className="text-gray-400">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
