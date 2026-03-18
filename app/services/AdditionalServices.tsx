"use client";

import { motion } from "motion/react";
import { additionalServices } from "../constants";
import { Card, CardContent } from "../common/Card";

const AdditionalServices = () => {
  return (
    <section className="py-20 bg-gray-50" id="value-added">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--brand-navy)' }}>
            Servicios de Valor Agregado
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complementa tu operación logística con nuestros servicios especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--brand-navy)' }}>
                      <Icon className="w-7 h-7 text-(--brand-ocean)" />
                    </div>
                    <h3 className="mb-3" style={{ color: 'var(--brand-navy)' }}>{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
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

export default AdditionalServices;
