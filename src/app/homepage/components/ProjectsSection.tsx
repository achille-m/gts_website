"use client";

import { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  metric: string;
  metricLabel: string;
}

const projects: Project[] = [
{
  id: "vsat-minier",
  title: "Déploiement VSAT — Multinationale Minière",
  category: "Télécommunications",
  location: "Zones reculées, RDC",
  description:
  "Installation et mise en service de réseaux VSAT pour une connectivité constante dans des sites miniers isolés, garantissant des communications fiables 24h/24.",
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_12730146d-1772609809239.png",
  alt: "Antenne satellite VSAT installée sur un site industriel en zone reculée de la RDC",
  metric: "99.8%",
  metricLabel: "Disponibilité réseau"
},
{
  id: "centrale-lubumbashi",
  title: "Centrale Électrique Industrielle — Lubumbashi",
  category: "Génie Civil & Électricité",
  location: "Lubumbashi, RDC",
  description:
  "Conception et mise en place d'une infrastructure électrique complète pour une usine industrielle, réduisant les temps d'arrêt de 60% et améliorant la capacité de production.",
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_18bbc3432-1772609815037.png",
  alt: "Tableau électrique industriel haute tension dans une usine à Lubumbashi",
  metric: "−60%",
  metricLabel: "Temps d'arrêt"
},
{
  id: "telecom-gouvernemental",
  title: "Système Télécom — Agence Gouvernementale",
  category: "Sécurité & Télécom",
  location: "Kinshasa, RDC",
  description:
  "Solutions de télécommunication sécurisées et fiables avec gestion efficace du trafic de données et protection avancée contre les intrusions.",
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_17b0ecc9d-1772609810409.png",
  alt: "Salle de serveurs et équipements réseau sécurisés pour une agence gouvernementale",
  metric: "0",
  metricLabel: "Incidents de sécurité"
},
{
  id: "licence-telecom",
  title: "Consulting — Licence Télécom Nationale",
  category: "Consulting & Réglementation",
  location: "Kinshasa, RDC",
  description:
  "Accompagnement complet d'une entreprise locale dans toutes les démarches pour obtenir une licence télécom auprès des autorités congolaises (ARPTC).",
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1578aa6c5-1772609811676.png",
  alt: "Réunion de consulting avec des professionnels autour d'un dossier de demande de licence",
  metric: "100%",
  metricLabel: "Licence obtenue"
}];


export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.
    querySelectorAll(".reveal-up, .reveal-left").
    forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="realisations"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #0D1B2A 0%, #162335 100%)" }}>
      
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="reveal-left">
            <div className="section-label mb-3">Projets réalisés</div>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight tracking-tight"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}>
              
              Nos{" "}
              <span className="text-amber-gradient italic font-light">
                Réalisations
              </span>
            </h2>
          </div>
          <p className="reveal-up delay-200 text-offwhite-dim font-body text-base leading-relaxed max-w-sm">
            Des projets concrets livrés à travers la République Démocratique du Congo.
          </p>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory">
          
          {projects.map((project, i) =>
          <div
            key={project.id}
            className="project-card snap-start flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[36vw] rounded-3xl overflow-hidden glass-card">
            
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 42vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1.5 rounded-full text-xs font-body font-semibold text-amber tracking-wide">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <div
                  className="font-display text-3xl font-bold text-amber leading-none"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                  
                    {project.metric}
                  </div>
                  <div className="text-offwhite-dim text-xs font-body">
                    {project.metricLabel}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5A623"
                  strokeWidth="1.8"
                  className="w-4 h-4 flex-shrink-0">
                  
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-offwhite-dim text-xs font-body">
                    {project.location}
                  </span>
                </div>
                <h3
                className="font-display text-xl font-bold text-offwhite mb-3 leading-tight"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                
                  {project.title}
                </h3>
                <p className="text-offwhite-dim font-body text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex gap-1">
            {projects.map((p, i) =>
            <div
              key={p.id}
              className="w-8 h-1 rounded-full"
              style={{
                background: i === 0 ? "#F5A623" : "rgba(232,228,218,0.15)"
              }} />

            )}
          </div>
          <span className="text-offwhite-dim text-xs font-body">
            Faites glisser pour voir plus →
          </span>
        </div>
      </div>
    </section>);

}