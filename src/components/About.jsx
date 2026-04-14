import React from 'react';
import { motion } from 'framer-motion';
import { customEase } from '../utils/animations';

const About = () => {
  const skills = [
    'UI/UX Design', 'Figma',
    'Product Design', 'Wireframing',
    'Design Systems', 'Prototyping'
  ];

  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Visual Quote Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: customEase }}
            className="w-full aspect-square md:aspect-auto md:h-full min-h-[350px] lg:min-h-[450px] rounded-[2.5rem] bg-neutral-900/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-8 md:p-12 group"
          >
            {/* Subtle Gradient & Noise */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-yellow-500/20 transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 group-hover:bg-white/10 transition-colors duration-1000" />
            <div className="absolute inset-0 opacity-[0.2] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')] mix-blend-overlay" />
            
            {/* Quote Typography */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-sm">
              <span className="text-5xl md:text-7xl text-yellow-500/80 mb-2 font-serif leading-none h-10 md:h-12">"</span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-snug tracking-tight">
                Design is not just how it looks, but <span className="font-medium italic text-white">how it works.</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: customEase }}
            className="flex flex-col optimize-gpu"
          >
            <h2 className="text-base font-bold tracking-widest text-yellow-400 uppercase mb-8">About Me</h2>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug text-white/90 mb-6">
              Driven by curiosity and a passion for <span className="text-white font-medium italic">problem-solving.</span>
            </h3>
            
            <p className="text-white/50 text-lg font-light leading-relaxed mb-10">
              As a UI/UX design student, I focus on transforming complex challenges into clean, intuitive, and highly functional interfaces. Currently exploring product design, interaction design, and frontend development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 border-t border-white/10 pt-10">
              
              {/* EXPERIENCE SECTION */}
              <div>
                <h4 className="text-xl font-medium text-white mb-5 tracking-tight">Currently</h4>
                <ul className="flex flex-col gap-3 text-white/60 font-light text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-[15px] leading-none mt-1">✦</span>
                    <span>UI/UX Design Student</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-[15px] leading-none mt-1">✦</span>
                    <span>Building personal projects & case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-[15px] leading-none mt-1">✦</span>
                    <span>Exploring real-world problem solving through design</span>
                  </li>
                </ul>
                <p className="text-white/40 text-xs mt-4 italic">
                  Actively learning and improving through hands-on projects.
                </p>
              </div>

              {/* SKILLS / TAGS SECTION */}
              <div>
                <h4 className="text-xl font-medium text-white mb-5 tracking-tight">Skills & Tools</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="w-full py-2 px-2 rounded-full border border-white/10 bg-transparent text-[13px] font-medium text-white/60 transition-colors hover:border-white/30 hover:text-white flex items-center justify-center text-center whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
