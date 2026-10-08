// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ data }) {
  const { badge, heroTitle, heroSubtitle, heroDescription, social } = data;
  const codeCard = `const developer = {\n  name: "Yuva Sai",\n  degree: "B.Tech IT",\n  focus: [\"Software Development\", \"AI & ML\", \"Web Development\"],\n  status: "Always Learning"\n};`;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 pt-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <p className="text-sm uppercase text-purple-400 mb-2">{badge}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{heroTitle}</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">{heroSubtitle}</h2>
          <p className="text-gray-400 mb-6 max-w-md">{heroDescription}</p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, rotateY: 15 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-gray-800 bg-opacity-60 backdrop-blur-xs p-6 rounded-lg shadow-lg max-w-md w-full"
        >
          <pre className="text-green-400 text-sm whitespace-pre-wrap break-all">
            {codeCard}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
