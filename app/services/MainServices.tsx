"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { services } from "../constants";
import { Service } from "../models/service";

const MainServices = () => {
  const mainServices: Service[] = services.slice(0, 3);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isReverse = index % 2 !== 0;
            
            return (
              <motion.div
                id={service.id}
                key={`${service.title}-main-service`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`scroll-mt-32 flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      height={400}
                      width={600}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--brand-ocean)' }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl" style={{ color: 'var(--brand-navy)' }}>
                        {service.title}
                      </h2>
                      <p className="text-lg" style={{ color: 'var(--brand-green)' }}>
                        {service.sum_description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features?.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'var(--brand-green)' }}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
