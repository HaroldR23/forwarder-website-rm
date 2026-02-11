"use client";

import { Eye, Target } from "lucide-react";
import { motion } from "motion/react";

import { Card, CardContent } from "../common/Card";

const Mision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full" style={{ borderTop: '4px solid var(--brand-orange)' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--brand-orange)' }}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl mb-4" style={{ color: 'var(--brand-navy)' }}>
                  Nuestra Misión
                </h3>
                <p className="text-gray-700">
                  Facilitar el comercio internacional de nuestros clientes mediante soluciones logísticas 
                  eficientes, confiables y personalizadas. Nos comprometemos a ser el puente que conecta 
                  productos y mercados, superando barreras geográficas y culturales con un servicio de 
                  excelencia que impulse el crecimiento sostenible de cada empresa que confía en nosotros.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full" style={{ borderTop: '4px solid var(--brand-teal)' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--brand-teal)' }}>
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl mb-4" style={{ color: 'var(--brand-navy)' }}>
                  Nuestra Visión
                </h3>
                <p className="text-gray-700">
                  Ser reconocidos como el socio logístico preferido en América Latina y un referente global 
                  en innovación y calidad de servicio. Aspiramos a liderar la transformación digital del 
                  sector, ofreciendo experiencias logísticas inteligentes, sostenibles y centradas en el 
                  cliente, contribuyendo así al desarrollo del comercio internacional y la integración económica.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mision;
