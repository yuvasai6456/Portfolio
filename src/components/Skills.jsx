// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Skills({ data }) {
  const { skills } = data;
  const categories = Object.entries(skills);
  return (
    <section className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(([category, items]) => (
          <motion.div
            key={category}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-xs p-4 rounded-lg shadow"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3 flex items-center">
              <Sparkles className="mr-2" size={20} /> {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
