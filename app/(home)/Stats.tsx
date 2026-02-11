"use client";
import { motion } from "motion/react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="bg-(--brand-teal) py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 } }
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
