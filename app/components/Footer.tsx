import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { companyName, navLinks, rodrigosPhoneNumber, santiagosPhoneNumber, services } from "../constants";
import Image from "next/image";
// import { useEffect } from "react";

const Footer = () => {
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const element = document.getElementById(hash.substring(1));
  //     if (element) {
  //       setTimeout(() => {
  //         element.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }, 100);
  //     }
  //   }
  // }, []);

  return (
    <footer className="bg-(--brand-navy) text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image
              src="/footer_logo.png"
              alt="Logo colsur"
              width={200}
              height={100}
            />
            <p className="text-sm text-gray-300 mb-4">
              Conectamos tu carga con el mundo — Rápido, Seguro y Confiable
            </p>
            {/* <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-(--brand-ocean) flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-(--brand-ocean) flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-(--brand-ocean) flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-(--brand-ocean) flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-(--brand-ocean)">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="hover:text-(--brand-ocean) transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-(--brand-ocean)">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="hover:text-(--brand-ocean) transition-colors">
                      {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-(--brand-ocean)">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{rodrigosPhoneNumber}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{santiagosPhoneNumber}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>comercial@colsurcomex.com.ar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 {companyName.join(" ")}. Todos los derechos reservados.</p>
            {/* <div className="flex gap-6">
              <a href="#" className="hover:text-(--brand-ocean) transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-(--brand-ocean) transition-colors">
                Términos de Servicio
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
