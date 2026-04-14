import React, { Suspense, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { customEase, childFadeUp, staggerContainer } from '../utils/animations';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = ({ setIsAppLoaded }) => {
  const splineWrapperRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScrollStart = () => {
      if (splineWrapperRef.current) {
        splineWrapperRef.current.style.pointerEvents = 'none';
      }
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (splineWrapperRef.current) {
          splineWrapperRef.current.style.pointerEvents = 'auto';
        }
      }, 150);
    };

    window.addEventListener('wheel', handleScrollStart, { capture: true, passive: true });
    window.addEventListener('touchmove', handleScrollStart, { capture: true, passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleScrollStart, { capture: true });
      window.removeEventListener('touchmove', handleScrollStart, { capture: true });
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background glow removed to seamlessly match the native black Spline background */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        
        {/* Left Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 mt-32 md:mt-0 optimize-gpu relative z-10"
        >
          <motion.div variants={childFadeUp}>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-white leading-[0.95]">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">User-Centered</span> <br />
              Experiences
            </h1>
          </motion.div>
          
          <motion.p 
            variants={childFadeUp}
            className="text-lg md:text-xl text-white/50 max-w-md font-light leading-relaxed"
          >
            UI/UX designer focused on creating intuitive, user-centered digital experiences. Passionate about solving real-world problems through design.
          </motion.p>
          
          <motion.div 
            variants={childFadeUp}
            className="flex gap-4 mt-6"
          >
            <a href="#projects" className="group px-8 py-4 rounded-full bg-white text-black font-semibold overflow-hidden relative">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">View Projects</span>
              <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right 3D Object */}
        <div 
          ref={splineWrapperRef}
          className="h-[50vh] md:h-[90vh] w-full relative flex items-center justify-center optimize-gpu ml-6 md:ml-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1.8 }}
            transition={{ duration: 1.5, ease: customEase }}
            className="w-full h-full"
          >
            <Suspense fallback={null}>
              <Spline 
                // IMPORTANT: Replace this URL with your custom Splinecode EXPORT URL once remixed.
                scene="https://prod.spline.design/zuQVXKhOmonjaE7m/scene.splinecode" 
                onLoad={() => setIsAppLoaded(true)}
              />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
