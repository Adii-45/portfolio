import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { customEase } from '../utils/animations';

const projectsData = [
  {
    id: 1,
    title: 'Nodus',
    category: 'Fintech / Web App',
    year: '2025',
    description: 'AI-powered finance management platform',
    link: 'https://www.figma.com/design/HC4O8mJPvfSV0dfky7L1sI/NODUS',
    gradient: 'from-emerald-900/40 via-teal-950/30 to-neutral-950',
    accentColor: 'rgba(52, 211, 153, 0.15)',
  },
  {
    id: 2,
    title: 'Shift',
    category: 'Productivity / Mobile App',
    year: '2025',
    description: 'Multi-persona productivity companion',
    link: 'https://www.figma.com/design/19UQ9xSsh0WWUYExsLw5Y1/SHIFT',
    gradient: 'from-violet-900/40 via-purple-950/30 to-neutral-950',
    accentColor: 'rgba(139, 92, 246, 0.15)',
  },
  {
    id: 3,
    title: 'BUI Food',
    category: 'E-Commerce / Mobile App',
    year: '2024',
    description: 'Fresh grocery delivery experience',
    link: 'https://www.figma.com/design/RoDZDAJG7r07iEkHEDaoon/BUI-Food',
    gradient: 'from-orange-900/40 via-amber-950/30 to-neutral-950',
    accentColor: 'rgba(251, 146, 60, 0.15)',
  },
  {
    id: 4,
    title: 'VELA',
    category: 'Wellness / Web App',
    year: '2025',
    description: 'Habit & mood tracking dashboard',
    link: null,
    comingSoon: true,
    gradient: 'from-sky-900/40 via-blue-950/30 to-neutral-950',
    accentColor: 'rgba(56, 189, 248, 0.15)',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 bg-[#0B0F14] text-white rounded-t-[4rem] -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 optimize-gpu">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: customEase }}
            className="text-6xl md:text-[5.5rem] font-bold tracking-tight leading-none"
          >
            Case <br className="hidden md:block"/> Studies
          </motion.h2>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: customEase }}
            className="text-lg font-medium hover:text-yellow-400 transition-colors border-b border-white/30 hover:border-yellow-400 pb-2 mt-8 md:mt-0"
          >
            View Archive
          </motion.a>
        </div>

        {/* Subtle divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1.4, ease: customEase }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projectsData.map((project, index) => (
            <div key={project.id} className={index % 2 === 1 ? "md:mt-32" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
