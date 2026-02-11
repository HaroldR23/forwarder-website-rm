"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/containers_hero.jpeg"
          fill
          alt="Shipping containers at port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-(--brand-navy)/60 via-(--brand-navy)/80 to-(--brand-navy)/95" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-6"
        >
          Soluciones de Logística Global
          <br />
          <span className="text-(--brand-orange)">para tu Negocio</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
        >
          Conectamos tu carga con el mundo — Rápido, Seguro y Confiable
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-(--brand-orange) hover:bg-(--brand-orange)/90 text-white text-lg px-8 h-14 cursor-pointer">
              Cotizar Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
};

export default Hero;
