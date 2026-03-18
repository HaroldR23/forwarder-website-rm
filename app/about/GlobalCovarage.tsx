"use client";

import { Globe } from "lucide-react";
import { motion } from "motion/react";

import { Card, CardContent } from "../common/Card";
import { coverage } from "../constants";

const GlobalCoverage = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-white">
            Cobertura Global
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Red de agentes internacionales en todos los continentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coverage.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: region.color }}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-white">{region.region}</h3>
                  <p className="text-(--brand-ocean)">{region.countries}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 text-white">
          <p className="text-lg">
            Con presencia en <span className="text-(--brand-ocean)">más de 150 países</span>, 
            estamos listos para llevar tu negocio a cualquier destino del mundo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalCoverage;
