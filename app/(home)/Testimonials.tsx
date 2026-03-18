"use client";

import { motion } from "motion/react";
import { Award } from "lucide-react";
import { Card, CardContent } from "../common/Card";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-white">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            La confianza de empresas líderes nos respalda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 fill-(--brand-ocean) text-(--brand-ocean)" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">{`"${testimonial.text}"`}</p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-sm text-(--brand-ocean)">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
