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
              <p>
                GlobalWay Forwarders nació en 2011 con una visión clara: democratizar el acceso al comercio 
                internacional para empresas de todos los tamaños. Lo que comenzó como una pequeña agencia de 
                carga en Buenos Aires, hoy se ha convertido en un referente regional en logística internacional.
              </p>
              <p>
                A través de los años, hemos construido una red sólida de socios estratégicos en los cinco 
                continentes, lo que nos permite ofrecer soluciones logísticas integrales y personalizadas. 
                Nuestra experiencia abarca desde pequeñas cargas consolidadas hasta proyectos especiales de 
                gran escala.
              </p>
              <p>
                Hoy, con más de 25,000 envíos completados exitosamente y la confianza de más de 500 empresas, 
                seguimos comprometidos con la innovación, la calidad de servicio y el crecimiento sostenible 
                de nuestros clientes.
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
