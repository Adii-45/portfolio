import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Process from './components/Process';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      mouseMultiplier: 1,
      touchMultiplier: 1, // Disabled excessive smoothing on mobile
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    
    // Expose lenis to window for specific scroll overrides (like Spline wheel capture)
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      <Loader isLoaded={isAppLoaded} />
      
      {/* Cinematic Noise Overlay */}
      <div className="bg-noise" />
      
      <CustomCursor />
      
      <Navbar />
      <main>
        <Hero setIsAppLoaded={setIsAppLoaded} />
        <About />
        <Projects />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
