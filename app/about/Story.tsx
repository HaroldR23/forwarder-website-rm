"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Story = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl mb-6" style={{ color: 'var(--brand-navy)' }}>
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-gray-700">
             <p className="font-medium" style={{ color: 'var(--brand-ocean)' }}>
                  COLSUR nace de la experiencia, pero sobre todo de una convicción.
                </p>
                <p>
                  Somos dos profesionales con más de 10 años en el mundo del comercio exterior y la logística internacional, 
                  habiendo formado parte de distintas empresas del sector. A lo largo de nuestra trayectoria adquirimos 
                  experiencia en importación y exportación; operaciones multimodales, manejo de cargas IMO, transporte 
                  aéreo, marítimo y terrestre; gestión documental, atención al cliente, supervisión de equipos y 
                  operatoria en sistema MARÍA/MALVINA.
                </p>
                <p>
                  Durante esos años, estuvimos en <strong>ambos lados del mostrador</strong>: como proveedores de servicios 
                  y también como clientes. Esa doble mirada nos permitió entender en profundidad no solo cómo funciona la 
                  operación, sino también cuáles son las verdaderas necesidades, preocupaciones y frustraciones de quienes 
                  confían su logística a un tercero.
                </p>
                <p>
                  Con esa experiencia, y con el objetivo de hacer las cosas de una manera diferente, decidimos tomar un 
                  nuevo rumbo y crear COLSUR.
                </p>
                <p className="font-medium">
                  Nuestro propósito es claro: brindar un servicio cercano, ágil y personalizado, donde cada cliente sienta 
                  que su operación es única y prioritaria. Sabemos que detrás de cada embarque hay tiempos, costos y 
                  expectativas que cumplir. Trabajamos con el compromiso de acompañar cada etapa del proceso con 
                  responsabilidad y transparencia.
                </p>
                <p style={{ color: 'var(--brand-ocean)' }} className="font-semibold">
                  COLSUR no es solo una empresa de comercio exterior. Es el resultado de años de aprendizaje, de haber 
                  vivido los desafíos del sector y de la decisión de transformarlos en soluciones reales para nuestros clientes.
                </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-125 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              fill
              src="/containers_hero.jpeg"
              alt="Global shipping"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
