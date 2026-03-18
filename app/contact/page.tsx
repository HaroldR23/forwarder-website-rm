"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

import { Card, CardContent } from "../common/Card";
import { contactInfo } from "../constants";


const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-30 md:py-40" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6 text-white">
              Cotiza tu Envío
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              envíanos un mensaje por WhatsApp o correo y recibe una cotización personalizada en menos de 24 horas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: 5 }}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="h-full hover:shadow-xl transition-shadow bg-(--brand-navy)">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--brand-orange)' }}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="mb-3 text-white font-bold" >{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <p className="text-sm text-white">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="h-96 bg-gray-300 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--brand-navy)' }} />
            <p className="text-xl" style={{ color: 'var(--brand-navy)' }}>
              Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
