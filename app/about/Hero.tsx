"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="/about_hero.jpeg"
          alt="Professional business team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-(--brand-navy)/85" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl mb-6"
        >
          Sobre Nosotros
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
        >
          Más de 10 años conectando negocios con el mundo
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
