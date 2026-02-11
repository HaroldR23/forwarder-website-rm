"use client";

import { motion } from "motion/react";
import { benefits } from "../constants";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--brand-navy)' }}>
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ventajas competitivas que nos distinguen en el mercado logístico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--brand-orange)' }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--brand-navy)' }}>{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default WhyChooseUs;
