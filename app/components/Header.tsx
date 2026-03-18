"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300  bg-white shadow-md"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logotipo_colsur.png"
              alt="Logo colsur"
              width={200}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors hover:text-(--brand-ocean) ${
                  pathname === link.path
                    ? "text-(--brand-ocean)"
                    : "text-(--brand-navy)"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--brand-navy)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--brand-navy)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-3 transition-colors hover:text-(--brand-ocean) ${
                    pathname === link.path
                    ? "text-(--brand-ocean)"
                    : "text-(--brand-navy)"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
