import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { customEase } from '../utils/animations';

const projectsData = [
  {
    id: 1,
    title: 'Aura',
    category: 'E-Commerce / WebGL',
    year: '2025',
  },
  {
    id: 2,
    title: 'Nexus',
    category: 'Fintech / App',
    year: '2024',
  },
  {
    id: 3,
    title: 'Quantum',
    category: 'SaaS / Marketing',
    year: '2024',
  },
  {
    id: 4,
    title: 'Horizon',
    category: 'Web3 / Identity',
    year: '2023',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 bg-black text-white rounded-t-[4rem] -mt-16 relative z-20">
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
