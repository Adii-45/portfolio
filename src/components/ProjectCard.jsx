import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { customEase } from '../utils/animations';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  // Mouse position relative to center of card (-1 to 1)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation and glare
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Convert mouse values to rotation (-2 to 2 degrees for very subtle tilt)
  const rotateX = useTransform(smoothY, [-1, 1], [2, -2]);
  const rotateY = useTransform(smoothX, [-1, 1], [-2, 2]);

  // Convert mouse values to glare position
  const glareX = useTransform(smoothX, [-1, 1], [0, 100]);
  const glareY = useTransform(smoothY, [-1, 1], [0, 100]);
  const backgroundMask = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -1 -> 1
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.2, delay: index * 0.1, ease: customEase }}
      className="group relative cursor-pointer block optimize-gpu perspective-1000"
      style={{ perspective: 1000 }}
      whileHover={{ y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
    >
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-neutral-900 border border-white/5 transition-colors duration-500 group-hover:border-white/20 will-change-transform shadow-none group-hover:shadow-[0_20px_40px_-20px_rgba(255,255,255,0.05)]"
      >
        {/* Placeholder image representation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-102 will-change-transform" 
        />
        
        {/* Abstract pattern text */}
        <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-6xl uppercase tracking-widest pointer-events-none" style={{ transform: "translateZ(30px)" }}>
          {project.title}
        </div>
        
        {/* Interactive Glare overlay */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 mix-blend-overlay"
          style={{ background: backgroundMask }}
        />

        {/* Darkening Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[0.22,1,0.36,1] pointer-events-none" />
        
        {/* Hover Center Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] scale-50 group-hover:scale-105 z-20 pointer-events-none" style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}>
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </motion.div>
      
      <div className="mt-8 flex justify-between items-start px-2">
        <div>
          <h3 className="text-3xl font-semibold text-white mb-2 tracking-tight transition-colors duration-300 group-hover:text-yellow-400">{project.title}</h3>
          <p className="text-white/40 tracking-wide uppercase text-sm">{project.category}</p>
        </div>
        <div className="text-xs font-semibold text-white/50 border border-white/10 px-4 py-1.5 rounded-full transition-colors duration-300 group-hover:border-white/30">
          {project.year}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
