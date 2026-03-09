"use client";

import { useEffect, useRef } from "react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  size: "large" | "medium" | "small";
}

const services: Service[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M16 3h5v5M4 20 20.2 3.8M21 16v5h-5M15 15l5.1 5.1" />
      </svg>
    ),
    title: "Projets Télécom & VSAT",
    description:
      "Planification, conception et mise en œuvre de projets de télécommunication complets — réseaux VSAT pour zones reculées, infrastructures réseau critiques.",
    tag: "Télécommunications",
    size: "large",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Réseaux & Infrastructures IT",
    description:
      "Conception et installation de solutions réseau, développement d'applications sur mesure, gestion de data centers et hébergement de domaines.",
    tag: "Informatique",
    size: "medium",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Électricité Industrielle",
    description:
      "Installations électriques dans des environnements industriels complexes — centrales, usines et sites miniers.",
    tag: "Génie Civil",
    size: "medium",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Installation & Maintenance",
    description:
      "Solutions complètes d'installation et de maintenance de matériel télécom, vente d'accessoires spécialisés.",
    tag: "Maintenance",
    size: "small",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
      </svg>
    ),
    title: "Import / Export",
    description:
      "Commerce de pièces détachées d'engins, matériel télécom, articles de construction et équipements industriels.",
    tag: "Commerce",
    size: "small",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Consulting & Licences",
    description:
      "Bureau d'étude et services de consultance pour l'obtention de licences télécom auprès des autorités congolaises.",
    tag: "Consulting",
    size: "medium",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Formations Télécom & IT",
    description:
      "Formation et développement de compétences dans les secteurs des télécommunications et des technologies de l'information.",
    tag: "Formation",
    size: "small",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: "Génie Civil & Construction",
    description:
      "Travaux de construction spécialisés, plomberie et menuiserie pour des installations durables et conformes aux normes.",
    tag: "Construction",
    size: "small",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal-up, .reveal-scale");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-navy-deep">
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="reveal-up">
            <div className="section-label mb-3">Ce que nous faisons</div>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight tracking-tight"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Nos <span className="text-amber-gradient italic font-light">Services</span>
            </h2>
          </div>
          <p className="reveal-up delay-200 text-offwhite-dim font-body text-base leading-relaxed max-w-md md:text-right">
            Des solutions techniques complètes pour les télécommunications, le génie civil et les infrastructures informatiques en RDC.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {/* Large card — spans 2 cols */}
          <div className="reveal-scale delay-100 lg:col-span-2 service-card glass-card rounded-3xl p-8 cursor-default">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-dim flex items-center justify-center text-amber">
                {services[0].icon}
              </div>
              <span className="section-label">{services[0].tag}</span>
            </div>
            <h3
              className="font-display text-2xl md:text-3xl font-bold text-offwhite mb-3 leading-tight"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              {services[0].title}
            </h3>
            <p className="text-offwhite-dim font-body text-base leading-relaxed">
              {services[0].description}
            </p>
            <div className="mt-6 pt-6 border-t border-offwhite-faint flex items-center gap-2 text-amber text-sm font-body font-medium">
              <span>Expertise complète</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Medium cards */}
          {services.slice(1, 3).map((s, i) => (
            <div
              key={s.title}
              className={`reveal-scale delay-${(i + 2) * 100} service-card glass-card rounded-3xl p-7 cursor-default`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-dim flex items-center justify-center text-amber mb-5">
                {s.icon}
              </div>
              <span className="section-label block mb-3">{s.tag}</span>
              <h3
                className="font-display text-xl font-bold text-offwhite mb-3 leading-tight"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                {s.title}
              </h3>
              <p className="text-offwhite-dim font-body text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}

          {/* Small cards — 4 across bottom */}
          {services.slice(3).map((s, i) => (
            <div
              key={s.title}
              className={`reveal-scale delay-${Math.min((i + 4) * 100, 600)} service-card glass-card rounded-2xl p-6 cursor-default`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-dim flex items-center justify-center text-amber flex-shrink-0">
                  {s.icon}
                </div>
                <span className="section-label">{s.tag}</span>
              </div>
              <h3
                className="font-display text-lg font-bold text-offwhite mb-2 leading-tight"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                {s.title}
              </h3>
              <p className="text-offwhite-dim font-body text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}