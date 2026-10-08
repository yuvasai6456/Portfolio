// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-xs border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-purple-400">
            YUVA SAI
          </motion.div>
          {/* Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="ml-4 px-3 py-1 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-gray-900 transition"
            >
              Resume
            </a>
            {/* Social icons */}
            <a href="https://github.com/yuvasai6456" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yuva6456" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:yuvasai6456@gmail.com" className="text-gray-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="text-gray-400 hover:text-white focus:outline-none">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900 bg-opacity-95 border-t border-gray-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="block px-3 py-2 mt-2 text-purple-500 border border-purple-500 rounded hover:bg-purple-500 hover:text-gray-900"
            >
              Resume
            </a>
            <div className="flex space-x-4 mt-3 px-3">
              <a href="https://github.com/yuvasai6456" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yuva6456" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:yuvasai6456@gmail.com" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
