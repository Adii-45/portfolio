import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { customEase } from '../utils/animations';

const Loader = ({ isLoaded }) => {
  useEffect(() => {
    // Disable scrolling while loader is active
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: customEase }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
        >
          {/* Subtle slow pulse on the text to feel alive but not heavy */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-white/80 text-xl md:text-2xl font-light tracking-[0.2em] uppercase">
              Loading Experience 
            </div>
            {/* Minimal line loader instead of spinning circle for premium feel */}
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 bottom-0 left-0 w-1/2 bg-white/40"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
