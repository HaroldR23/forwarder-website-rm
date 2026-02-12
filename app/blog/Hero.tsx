"use client";

import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="py-30 lg:py-40" style={{ backgroundColor: 'var(--brand-navy)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl mb-6 text-white">
            Blog & Recursos
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Artículos, guías y tendencias sobre logística internacional y comercio exterior
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
