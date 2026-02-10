"use client";

import { motion } from "motion/react";
import { 
  Ship, Plane, Truck, Shield, Package, Globe, 
  Clock, Award, Users, ArrowRight 
} from "lucide-react";
import Button from "../common/Button";
import Link from "next/link";
import { Card, CardContent } from "../common/Card";
import Image from "next/image";

const Home = () => {
  const services = [
    {
      icon: Ship,
      title: "Transporte Marítimo",
      description: "Soluciones completas de carga marítima para importaciones y exportaciones globales.",
      image: "/shipping-containers-port-cargo.jpg"
    },
    {
      icon: Plane,
      title: "Transporte Aéreo",
      description: "Envíos urgentes y mercancías especiales con las mejores aerolíneas de carga.",
      image: "/cargo-airplane-flying.jpg"
    },
    {
      icon: Truck,
      title: "Transporte Terrestre",
      description: "Distribución nacional e internacional por carretera con seguimiento en tiempo real.",
      image: "/truck-highway-transportation.jpg"
    },
    {
      icon: Package,
      title: "Servicios de Valor Agregado",
      description: "Seguros, embalaje, desconsolidación, etiquetado y almacenamiento especializado.",
      image: "/logistics-warehouse-modern.jpg"
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Cobertura Global",
      description: "Red de agentes en más de 150 países para conectar tu negocio con el mundo."
    },
    {
      icon: Clock,
      title: "Agilidad y Puntualidad",
      description: "Optimizamos tiempos de tránsito y cumplimos con plazos de entrega garantizados."
    },
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Seguros de carga, protocolos de calidad y certificaciones internacionales."
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description: "Profesionales con amplia experiencia en logística y comercio internacional."
    },
  ];

  const stats = [
    { value: "25K+", label: "Envíos Completados" },
    { value: "150+", label: "Países de Cobertura" },
    { value: "500+", label: "Clientes Satisfechos" },
    { value: "15+", label: "Años de Experiencia" },
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Tech Solutions SA",
      text: "GlobalWay ha transformado nuestra logística internacional. Su profesionalismo y atención al detalle son incomparables.",
    },
    {
      name: "Carlos Rodríguez",
      company: "Import Export Corp",
      text: "Excelente servicio de tracking y atención personalizada. Siempre sabemos dónde está nuestra carga.",
    },
    {
      name: "Ana Martínez",
      company: "Global Trade Inc",
      text: "La mejor decisión fue confiar en GlobalWay. Han optimizado nuestros tiempos y reducido costos significativamente.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/icons/hero-bg.jpg"
            fill
            alt="Shipping containers at port"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-(--brand-navy)/95 via-(--brand-navy)/80 to-(--brand-navy)/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6"
          >
            Soluciones de Logística Global
            <br />
            <span className="text-(--brand-orange)">para tu Negocio</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            Conectamos tu carga con el mundo — Rápido, Seguro y Confiable
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-(--brand-orange) hover:bg-(--brand-orange)/90 text-white text-lg px-8 h-14">
                Cotizar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/tracking">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-(--brand-navy) text-lg px-8 h-14">
                Tracking de Envío
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-(--brand-teal) py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--brand-navy)' }}>
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales de logística adaptadas a las necesidades de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        fill
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-(--brand-navy)/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--brand-orange)' }}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2" style={{ color: 'var(--brand-navy)' }}>{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-(--brand-navy) hover:bg-(--brand-navy)/90 text-white">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Testimonials Section */}
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
                        <Award key={i} className="w-5 h-5 fill-(--brand-orange) text-(--brand-orange)" />
                      ))}
                    </div>
                    <p className="text-white/90 mb-4 italic">{`"${testimonial.text}"`}</p>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-white">{testimonial.name}</div>
                      <div className="text-sm text-(--brand-orange)">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-(--brand-teal) to-(--brand-navy)">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 text-white">
              ¿Listo para Expandir tu Negocio?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtén una cotización personalizada y descubre cómo podemos optimizar tu logística
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-(--brand-orange) hover:bg-(--brand-orange)/90 text-white text-lg px-10 h-14">
                Solicitar Cotización Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
