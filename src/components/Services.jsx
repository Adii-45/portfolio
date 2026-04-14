import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Layout, MonitorSmartphone } from 'lucide-react';
import { customEase } from '../utils/animations';

const services = [
  { icon: <Layout size={36} />, title: 'UI/UX Design', desc: 'Designing intuitive and user-centered digital experiences focused on usability and clarity.' },
  { icon: <MonitorSmartphone size={36} />, title: 'Wireframing & Prototyping', desc: 'Creating low to high-fidelity wireframes and interactive prototypes to visualize ideas.' },
  { icon: <PenTool size={36} />, title: 'Design Systems', desc: 'Building consistent and scalable design systems for better user experience and development flow.' },
  { icon: <Code size={36} />, title: 'Frontend Basics', desc: 'Understanding how designs translate into code for better collaboration and feasibility.' }
];

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: customEase } }
  };

  return (
    <section id="services" className="py-40 bg-black text-white optimize-gpu">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: customEase }}
          className="text-5xl md:text-[5rem] font-bold mb-24 tracking-tight"
        >
          Skills & Focus
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -20px rgba(250,204,21,0.08)', transition: { duration: 0.4, ease: "easeOut" } }}
              className="p-12 rounded-[2.5rem] bg-neutral-900/50 border border-white/5 hover:border-yellow-400/30 transition-colors duration-500 group relative overflow-hidden will-change-transform"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-yellow-400 mb-10 group-hover:scale-110 group-hover:bg-yellow-400/10 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-6 tracking-tight relative z-10">{service.title}</h3>
              <p className="text-white/40 leading-relaxed font-light text-lg relative z-10">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
