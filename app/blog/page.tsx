"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "../common/Card";
import Button from "../common/Button";
import Hero from "./Hero";
import { articles } from "../constants";
import ExchangeCard from "./ExchangeCard";

const Blog = () => {
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Hero />
      {/* Featured Article */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden hover:shadow-2xl cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <Image
                    width={600}
                    height={400}
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-sm text-white" style={{ backgroundColor: 'var(--brand-ocean)' }}>
                      Destacado
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'var(--brand-green)', color: 'white' }}>
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--brand-navy)' }}>
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  <Button className="bg-(--brand-ocean) hover:bg-(--brand-ocean)/90 text-white w-fit cursor-pointer" onClick={() => handleRedirect(featuredArticle.url)}>
                    Leer Artículo Completo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl" style={{ color: 'var(--brand-navy)' }}>
              Artículos Recientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => {
              const Icon = article.icon;
              return (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleRedirect(article.url)}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer overflow-hidden group">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        fill
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--brand-ocean)' }}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: 'var(--brand-green)' }}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl mb-3 group-hover:text-(--brand-ocean) transition-colors" style={{ color: 'var(--brand-navy)' }}>
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
            <ExchangeCard />
          </div>
        </div>
      </section>
          
    </div>
  );
};

export default Blog;
