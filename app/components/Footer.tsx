import { Ship, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-(--brand-navy) text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--brand-orange)' }}>
                <Ship className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">GlobalWay</span>
                <span className="text-xs text-(--brand-orange)">Forwarders</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Conectamos tu carga con el mundo — Rápido, Seguro y Confiable
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-(--brand-orange) flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-(--brand-orange) flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-(--brand-orange) flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-(--brand-orange) flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-(--brand-orange)">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-(--brand-orange) transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-(--brand-orange) transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-300 hover:text-(--brand-orange) transition-colors">
                  Tracking
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-(--brand-orange) transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-(--brand-orange) transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-(--brand-orange) transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-(--brand-orange)">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Transporte Marítimo</li>
              <li>Transporte Aéreo</li>
              <li>Transporte Terrestre</li>
              <li>Servicios Aduanales</li>
              <li>Almacenaje</li>
              <li>Seguros de Carga</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-(--brand-orange)">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Av. Principal 1234, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+54 11 4567-8900</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@globalway.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 GlobalWay Forwarders. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-(--brand-orange) transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-(--brand-orange) transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
