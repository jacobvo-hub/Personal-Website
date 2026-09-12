import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import useDarkMode from "../../hooks/useDarkMode";

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const reinitializeVanta = async (isDarkMode) => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    try {
      if (!window.THREE) {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      }
      if (!window.VANTA) {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.fog.min.js");
      }

      const vantaSettings = {
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: isDarkMode ? 0x363F4D : 0xd3d3d3,
        midtoneColor: isDarkMode ? 0x222831 : 0xa9a9a9,
        lowlightColor: isDarkMode ? 0x1A1F26 : 0x808080,
        baseColor: isDarkMode ? 0x1A1F26 : 0xc0c0c0,
        blurFactor: 1.30,
        speed: 2.00,
        zoom: 1.30,
      };

      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }

      if (vantaRef.current) {
        vantaEffect.current = window.VANTA.FOG(vantaSettings);
      }
    } catch (error) {
      console.error("Error loading scripts:", error);
    }
  };

  useEffect(() => {
    reinitializeVanta(isDarkMode);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      const threeScript = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"]');
      const vantaScript = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.fog.min.js"]');
      if (threeScript) document.body.removeChild(threeScript);
      if (vantaScript) document.body.removeChild(vantaScript);
    };
  }, [isDarkMode]);

  useEffect(() => {
    const scrollPosition = JSON.parse(window.localStorage.getItem("scrollPosition"));
    if (scrollPosition !== null) {
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "auto" // Use "auto" instead of "smooth" for instant scroll
      });
    }
  }, []);

  return (
    <section id="home" className="relative" ref={vantaRef}>
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[100vh] md:min-h-[110vh]">
            <motion.h1
              className="hero__heading"
              onAnimationComplete={() => setAnimationComplete(true)}
            >
              {['J', 'A', 'C', 'O', 'B'].map((letter, index) => (
                <motion.span
                  key={index}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, duration: 0.5, delay: index * 0.2 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>
      {/* Gradient fade overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none bg-gradient-to-b from-transparent via-white/50 to-white dark:via-primary/50 dark:to-primary"></div>
    </section>
  );
};

export default HeroSection;
