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
                  Ofrecer soluciones logísticas personalizadas, cercanas y eficientes que simplifiquen el comercio 
                  internacional de nuestros clientes. Acompañamos cada operación con transparencia, agilidad y el 
                  compromiso de quien realmente entiende lo que significa estar del otro lado del mostrador.
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
                  Ser el referente en comercio exterior por la calidad humana de nuestro servicio. Queremos ser 
                  reconocidos no solo por nuestra experiencia técnica, sino por nuestra capacidad de generar 
                  confianza, anticipar necesidades y construir relaciones comerciales duraderas basadas en resultados reales.
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
