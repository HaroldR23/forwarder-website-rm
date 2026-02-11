"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/logistic.jpeg"
          alt="Logistics warehouse"
          fill
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
          Nuestros Servicios
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
        >
          Soluciones integrales de logística para conectar tu negocio con el mundo
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
