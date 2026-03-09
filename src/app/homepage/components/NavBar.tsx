"use client";

import { useState, useEffect } from "react";
import AppLogo from "@/components/ui/AppLogo";


const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Équipe", href: "#equipe" },
  { label: "À Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-deep/95 backdrop-blur-xl border-b border-offwhite-faint shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#accueil")}
            className="flex items-center gap-3 group"
            aria-label="GTS SARL - Retour en haut"
          >
            <AppLogo size={48} />
            <div className="hidden sm:block">
              <span
                className="block font-display font-bold text-offwhite text-lg leading-none tracking-tight"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                GTS
              </span>
              <span className="block text-amber text-[10px] font-body font-600 tracking-[0.18em] uppercase">
                SARL
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-offwhite-dim hover:text-amber text-sm font-body font-medium tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:block btn-amber px-5 py-2.5 rounded-full text-sm font-body"
            >
              Nous contacter
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-offwhite transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-offwhite transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-offwhite transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-navy-deep/98 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden ${
          menuOpen ? "open" : ""
        }`}
      >
        <ul className="space-y-6">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-offwhite font-display text-4xl sm:text-5xl font-light hover:text-amber transition-colors duration-200 block w-full text-left"
                style={{
                  fontFamily: "Fraunces, Georgia, serif",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-12 pt-8 border-t border-offwhite-faint">
          <p className="text-offwhite-dim text-sm font-body">
            (+243) 855 248 739
          </p>
          <p className="text-amber text-sm font-body mt-1">contact@gts.cd</p>
        </div>
      </div>
    </>
  );
}