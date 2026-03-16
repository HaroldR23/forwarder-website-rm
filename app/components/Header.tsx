"use client";

import { useState } from "react";
import { Ship, Menu, X } from "lucide-react";
import Button from "../common/Button";
import { companyName, navLinks } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--brand-navy)' }}>
              <Ship className="w-6 h-6" style={{ color: 'var(--brand-orange)' }} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>{companyName[0]}</span>
              <span className="text-xs" style={{ color: 'var(--brand-teal)' }}>{companyName[1]}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors hover:text-(--brand-orange) ${
                  pathname === link.path
                    ? "text-(--brand-orange)"
                    : "text-(--brand-navy)"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-(--brand-orange) hover:bg-(--brand-orange)/90 text-white cursor-pointer">
                Cotizar Ahora
              </Button>
            </Link>
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
                className={`block py-3 transition-colors hover:text-(--brand-orange) ${
                    pathname === link.path
                    ? "text-(--brand-orange)"
                    : "text-(--brand-navy)"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-4 bg-(--brand-orange) hover:bg-(--brand-orange)/90 text-white cursor-pointer">
                Cotizar Ahora
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
