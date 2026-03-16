import { cva } from "class-variance-authority";
import { Award, Clock, FileCheck, Globe, Mail, MessageCircle, Package, Phone, Plane, Shield, Ship, TrendingUp, Truck, Users, Warehouse } from "lucide-react";
import { Service } from "../models/service";


export const phoneNumber = "+54 9 11 2756-3537";
export const companyName = ["GlobalWay", "Forwarders"];
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/services", label: "Servicios" },
    // { path: "/tracking", label: "Tracking" },
    { path: "/about", label: "Nosotros" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contacto" },
  ];

export const services: Service[] = [
    {
      id: "maritime",
      icon: Ship,
      title: "Transporte Marítimo",
      description: "Soluciones completas de carga marítima para importaciones y exportaciones globales.",
      sum_description: "Transporte Marítimo",
      features: [
        "FCL (Full Container Load) - Contenedores completos",
        "LCL (Less than Container Load) - Carga consolidada",
        "Servicios de carga Break Bulk y proyectos especiales",
        "Gestión de documentación y despacho aduanero",
        "Rastreo en tiempo real del contenedor",
      ],
      image: "/containers_hero.jpeg"
    },
    {
      id: "air",
      icon: Plane,
      title: "Transporte Aéreo",
      description: "Envíos urgentes y mercancías especiales con las mejores aerolíneas de carga.",
      sum_description: "Rapidez y eficiencia en el aire",
      features: [
        "Servicios express para cargas urgentes",
        "Carga general y mercancías especiales",
        "Transporte de productos perecederos con cadena de frío",
        "Hand carry y courier internacional",
        "Charter de aviones para proyectos especiales",
      ],
      image: "/airplane.jpeg"
    },
    {
      id: "land",
      icon: Truck,
      title: "Transporte Terrestre",
      description: "Distribución nacional e internacional por carretera con seguimiento en tiempo real.",
      sum_description: "Soluciones de distribución nacional e internacional",
      features: [
        "Transporte nacional de carga completa y parcial",
        "Distribución urbana y last mile delivery",
        "Transporte internacional por carretera",
        "Vehículos especializados (refrigerados, secos, plataformas)",
        "Tracking GPS en tiempo real",
      ],
      image: "/truck.jpeg"
    },
    {
      id: "value-added",    
      icon: Package,
      title: "Servicios de Valor Agregado",
      description: "Seguros, embalaje, desconsolidación, etiquetado y almacenamiento especializado.",
      image: "/logistic.jpeg"
    },
  ];

export const benefits = [
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

export const stats = [
    { value: "25K+", label: "Envíos Completados" },
    { value: "150+", label: "Países de Cobertura" },
    { value: "500+", label: "Clientes Satisfechos" },
    { value: "15+", label: "Años de Experiencia" },
  ];

export const testimonials = [
    {
      name: "María González",
      company: "Tech Solutions SA",
      text: `${companyName.join(" ")} ha transformado nuestra logística internacional. Su profesionalismo y atención al detalle son incomparables.`,
    },
    {
      name: "Carlos Rodríguez",
      company: "Import Export Corp",
      text: "Excelente servicio de tracking y atención personalizada. Siempre sabemos dónde está nuestra carga.",
    },
    {
      name: "Ana Martínez",
      company: "Global Trade Inc",
      text: `La mejor decisión fue confiar en ${companyName.join(" ")}. Han optimizado nuestros tiempos y reducido costos significativamente.`,
    },
  ];

export const additionalServices = [
    {
      icon: FileCheck,
      title: "Servicios Aduanales",
      description: "Gestión integral de trámites de importación y exportación con agentes especializados.",
    },
    {
      icon: Warehouse,
      title: "Almacenamiento",
      description: "Bodegas propias y en red global con sistemas de gestión WMS avanzados.",
    },
    {
      icon: Package,
      title: "Embalaje y Etiquetado",
      description: "Servicios de empaque especializado, etiquetado y preparación de mercancías.",
    },
    {
      icon: Shield,
      title: "Seguros de Carga",
      description: "Pólizas de seguro internacional para proteger tu inversión en tránsito.",
    },
    {
      icon: Clock,
      title: "Consultoría Logística",
      description: "Asesoramiento estratégico para optimizar costos y tiempos de tu cadena de suministro.",
    },
  ];

export const values = [
    {
      icon: Award,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en transparencia, responsabilidad y cumplimiento.",
    },
    {
      icon: TrendingUp,
      title: "Agilidad",
      description: "Respondemos con rapidez a las necesidades del mercado y adaptamos nuestras soluciones.",
    },
    {
      icon: Globe,
      title: "Globalidad",
      description: "Presencia internacional con red de agentes en más de 150 países alrededor del mundo.",
    },
    {
      icon: Users,
      title: "Compromiso",
      description: "Equipo dedicado a superar las expectativas y garantizar el éxito de cada proyecto.",
    },
  ];

export const coverage = [
    { region: "América", countries: "45 países", color: "var(--brand-orange)" },
    { region: "Europa", countries: "38 países", color: "var(--brand-teal)" },
    { region: "Asia", countries: "42 países", color: "var(--brand-navy)" },
    { region: "África", countries: "28 países", color: "var(--brand-orange)" },
    { region: "Oceanía", countries: "12 países", color: "var(--brand-teal)" },
  ];

export const articles = [
    {
      id: 1,
      title: "Guía Completa para Embalaje de Carga Internacional",
      excerpt: "Aprende las mejores prácticas para embalar mercancías según el modo de transporte. Tips esenciales para proteger tu inversión durante el tránsito.",
      author: "Carlos Rodríguez",
      date: "1 Feb 2026",
      category: "Guías",
      url: "https://www.petersandmay.com/es/guide/a-guide-to-general-cargo-preparation-packaging-for-shipment/",
      image: "/articulo_1.jpg",
      icon: Package,
    },
    {
      id: 2,
      title: "Comercio Exterior: Documentación Esencial para Exportar",
      excerpt: "Lista completa de documentos requeridos para operaciones de exportación. Evita demoras en aduana con esta guía práctica y actualizada.",
      author: "Ana Martínez",
      date: "28 Ene 2026",
      category: "Comercio Exterior",
      url: "https://www.icontainers.com/es/guias-logistica-internacional/",
      image: "/articulo_2.jpg",
      icon: Globe,
    },
    {
      id: 3,
      title: "Transporte Marítimo vs Aéreo: ¿Cuál Elegir?",
      excerpt: "Comparativa detallada entre los dos principales modos de transporte internacional. Costos, tiempos y casos de uso recomendados.",
      author: "Diego Fernández",
      date: "22 Ene 2026",
      category: "Comparativas",
      url: "https://www.worldwideexpress.com/air-freight-vs-sea-freight-guide/",
      image: "/articulo_3.jpg",
      icon: TrendingUp,
    }
  ];

export const messageQuote = 'Hola, me gustaría recibir una cotización personalizada para mi envío.';
export const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(messageQuote)}`;
export const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [phoneNumber],
      href: whatsappLink,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@globalway.com"],
      href: "mailto: info@globalway.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: [phoneNumber],
      href: `tel:${phoneNumber.replace(/\D/g, '')}`,
    },
    {
      icon: Clock,
      title: "Horario",
      details: ["Lunes a Viernes", "9:00 - 18:00 hs", "Sábados: 9:00 - 13:00 hs"],
      href: "#",
    },
  ];