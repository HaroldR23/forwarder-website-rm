"use client";

import { motion } from "motion/react";

import { Card, CardContent } from "../common/Card";
import { values } from "../constants";

const Values = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--brand-navy)' }}>
            Nuestros Valores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Principios fundamentales que guían cada una de nuestras decisiones y acciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--brand-navy)' }}>
                      <Icon className="w-8 h-8 text-(--brand-orange)" />
                    </div>
                    <h3 className="mb-3" style={{ color: 'var(--brand-navy)' }}>{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
