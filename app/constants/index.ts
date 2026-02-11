import { cva } from "class-variance-authority";
import { Clock, Globe, Package, Plane, Shield, Ship, Truck, Users } from "lucide-react";


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

export const services = [
    {
      icon: Ship,
      title: "Transporte Marítimo",
      description: "Soluciones completas de carga marítima para importaciones y exportaciones globales.",
      image: "/containers_hero.jpeg"
    },
    {
      icon: Plane,
      title: "Transporte Aéreo",
      description: "Envíos urgentes y mercancías especiales con las mejores aerolíneas de carga.",
      image: "/airplane.jpeg"
    },
    {
      icon: Truck,
      title: "Transporte Terrestre",
      description: "Distribución nacional e internacional por carretera con seguimiento en tiempo real.",
      image: "/truck.jpeg"
    },
    {
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
