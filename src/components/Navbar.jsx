import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-wide text-white">
          Aditya Kr. <span className="text-yellow-400">Nayak</span>
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#resume" className="hover:text-white transition-colors">Resume</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <a 
          href="#contact" 
          className="px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-yellow-400 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
