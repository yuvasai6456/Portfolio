// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

export default function Projects({ data }) {
  const { projects } = data;
  return (
    <section className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-xs p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-1">{proj.date}</p>
            <p className="text-gray-300 mb-3">{proj.description}</p>
            <p className="text-gray-200 mb-2"><strong>Technologies:</strong> {proj.technologies.join(", ")}</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {proj.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <div className="flex space-x-4">
              {/* GitHub placeholder */}
              <button className="px-3 py-1 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-gray-900 transition">
                Repository coming soon
              </button>
              {/* Live Demo placeholder */}
              <button className="px-3 py-1 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-gray-900 transition">
                Live demo coming soon
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
