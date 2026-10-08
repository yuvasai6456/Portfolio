// src/components/CodingProfiles.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function CodingProfiles({ data }) {
  const { codingProfiles } = data;
  return (
    <section className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Problem Solving &amp; Coding
      </motion.h2>
      <p className="text-gray-300 text-center mb-6">Consistently improving my problem‑solving skills across multiple coding platforms.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {codingProfiles.map((profile, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-xs p-4 rounded-lg shadow flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <Code className="text-purple-400 mr-4" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-white">{profile.platform}</h3>
              <p className="text-gray-300">{profile.solved}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
