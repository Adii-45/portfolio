import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { customEase } from '../utils/animations';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: customEase }}
          className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-12"
        >
          Let's talk.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
        >
          <a href="mailto:adi.nayak45@gmail.com?subject=Let's%20work%20together&body=Hi%20Aditya%2C%0A%0A" className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-2xl font-semibold hover:bg-yellow-400 transition-colors">
            Get in touch
            <span className="group-hover:translate-x-2 transition-transform">
              <ArrowRight size={28} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
