import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { customEase } from '../utils/animations';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position relative to center of card (-1 to 1)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Raw cursor position for glow effect
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Convert mouse values to rotation (subtle 3D tilt)
  const rotateX = useTransform(smoothY, [-1, 1], [3, -3]);
  const rotateY = useTransform(smoothX, [-1, 1], [-3, 3]);

  // Cursor glow — follows mouse position
  const glowBackground = useMotionTemplate`radial-gradient(
    350px circle at ${cursorX}px ${cursorY}px,
    ${project.accentColor || 'rgba(255,255,255,0.06)'} 0%,
    transparent 70%
  )`;

  // Secondary subtle glare for depth
  const glareX = useTransform(smoothX, [-1, 1], [0, 100]);
  const glareY = useTransform(smoothY, [-1, 1], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 50%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalized -1 -> 1
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    x.set(xPct);
    y.set(yPct);

    // Raw position for glow
    cursorX.set(mouseX);
    cursorY.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Floating animation delay per card
  const floatDelay = index * 0.8;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay: index * 0.15, ease: customEase }}
      className="group relative cursor-pointer block optimize-gpu"
      style={{ perspective: 1200 }}
    >
      {/* Floating wrapper — CSS animation lives here, isolated from FM transforms */}
      <div className="project-card-float">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }}
          className="project-card-inner relative overflow-hidden rounded-3xl aspect-[4/3] border border-white/[0.06] will-change-transform"
        >
        {/* === Background Gradient === */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-[1.02]`} />
        
        {/* === Glass noise texture === */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />

        {/* === Glassmorphism border highlight === */}
        <div className="absolute inset-0 rounded-3xl border border-white/[0.08] pointer-events-none" />

        {/* === Abstract watermark text === */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ transform: "translateZ(20px)" }}
        >
          <span className="text-white/[0.03] font-black text-[8rem] md:text-[10rem] uppercase tracking-widest leading-none">
            {project.title}
          </span>
        </div>
        
        {/* === Cursor Glow === */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
          style={{ 
            background: glowBackground,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* === Glare overlay === */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 mix-blend-overlay"
          style={{ background: glareBackground }}
        />

        {/* === Hover Overlay CTA === */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          {/* Backdrop blur overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-700 ease-[0.22,1,0.36,1]" />
          
          {/* CTA Button */}
          <div className="relative z-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-[0.22,1,0.36,1] delay-100">
            {project.comingSoon ? (
              <div className="px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide">
                Coming Soon
              </div>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold tracking-wide shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300"
              >
                View Case Study
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            )}
          </div>
        </div>

        {/* === Inner shadow for depth === */}
        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] pointer-events-none z-10" />
        </motion.div>
      </div>
      
      {/* === Card Info === */}
      <div className="mt-8 flex justify-between items-start px-2">
        <div>
          <h3 className="text-3xl font-semibold text-white mb-2 tracking-tight transition-colors duration-300 group-hover:text-yellow-400">
            {project.title}
          </h3>
          <p className="text-white/40 tracking-wide uppercase text-sm">
            {project.category}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {project.comingSoon && (
            <span className="text-[10px] font-semibold text-yellow-400/80 uppercase tracking-widest">Soon</span>
          )}
          <div className="text-xs font-semibold text-white/50 border border-white/10 px-4 py-1.5 rounded-full transition-colors duration-300 group-hover:border-white/30 group-hover:text-white/70">
            {project.year}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
