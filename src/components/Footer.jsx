// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer({ data }) {
  const { name, linkedin, github, email } = data;
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8">
      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-xl font-bold text-purple-400">{name}</h4>
          <p className="text-gray-400 text-sm">
            B.Tech IT Student • Software Developer • AI Enthusiast
          </p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Github size={20} />
          </a>
          <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${email}`} className="text-gray-400 hover:text-white">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-gray-500 text-xs text-center md:text-right w-full md:w-auto">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
