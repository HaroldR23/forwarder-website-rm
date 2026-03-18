"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-linear-to-r from-(--brand-green) to-(--brand-navy)">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-white">
            ¿Listo para Expandir tu Negocio?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Obtén una cotización personalizada y descubre cómo podemos optimizar tu logística
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-(--brand-ocean) hover:bg-(--brand-ocean)/90 text-white text-lg px-10 h-14 cursor-pointer">
             Contáctanos <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
