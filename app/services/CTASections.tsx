const CTASections = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--brand-teal)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl mb-4 text-white">
          ¿Necesitas un Servicio Personalizado?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Nuestro equipo está listo para diseñar una solución a medida de tus necesidades
        </p>
        <a href="/contact" className="inline-block">
          <button className="px-8 py-4 rounded-lg text-lg transition-colors cursor-pointer" style={{ backgroundColor: 'var(--brand-orange)', color: 'white' }}>
            Contactar Ahora
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTASections;
