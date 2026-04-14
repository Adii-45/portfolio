import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© {new Date().getFullYear()} Aditya Kr. Nayak. All rights reserved.</p>
        
        <div className="flex gap-8">
          <a href="https://x.com/AdiD_45" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
          <a href="https://www.linkedin.com/in/adityanayak45/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://dribbble.com/adi-nayak45" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
