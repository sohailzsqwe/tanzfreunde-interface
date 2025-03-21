
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('course-overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero/ballroom-dance.jpg')] bg-cover bg-center z-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 text-white font-medium">
            ADTV Tanzschule in Neumünster
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Tanz dich <span className="text-teal-300">glücklich</span> – bei Family & Friends!
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-lg">
            Von Standard über Hip Hop bis Zumba – entdecke das vielfältige Kursangebot für alle Altersgruppen und Tanzstile in unserer modernen Tanzschule.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/kurse"
              className="btn-primary"
            >
              Kurse entdecken
            </Link>
            <Link
              to="/kontakt"
              className="px-6 py-2.5 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
            >
              Probestunde buchen
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Mehr entdecken</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
