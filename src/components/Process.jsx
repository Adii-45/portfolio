import React from 'react';
import { motion } from 'framer-motion';
import { customEase } from '../utils/animations';

const processSteps = [
  { id: '01', title: 'Understand', desc: 'Understanding the problem, users, and context through research and exploration.' },
  { id: '02', title: 'Ideate', desc: 'Exploring ideas, user flows, and wireframes to structure the experience.' },
  { id: '03', title: 'Design', desc: 'Designing clean, intuitive interfaces with strong visual hierarchy and usability.' },
  { id: '04', title: 'Iterate', desc: 'Testing, refining, and improving designs based on feedback and insights.' },
];

const Process = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: customEase } }
  };

  return (
    <section id="process" className="py-40 bg-neutral-950 text-white border-t border-white/5 optimize-gpu">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: customEase }}
          className="text-5xl md:text-[5rem] font-bold mb-24 text-center tracking-tight"
        >
          Design Process
        </motion.h2>

        <motion.div 
          className="flex flex-col gap-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {processSteps.map((step) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start border-b border-white/10 pb-16 last:border-0 hover:border-white/30 transition-colors duration-700"
            >
              <div className="text-5xl md:text-7xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-700 md:w-40 flex-shrink-0 relative">
                <span className="relative z-10">{step.id}</span>
              </div>
              <div className="pt-2">
                <h3 className="text-4xl font-semibold mb-6 tracking-tight">{step.title}</h3>
                <p className="text-xl text-white/40 leading-relaxed font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
