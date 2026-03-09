"use client";

import { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  education: string;
  experience: string;
  bio: string;
  image: string;
  alt: string;
}

const team: TeamMember[] = [
{
  id: "achille-muyaka",
  name: "Achille MUYAKA",
  role: "Directeur Général",
  education: "Génie Informatique — Université de Kinshasa",
  experience: "10+ ans",
  bio: "Spécialisé dans la gestion de projets d'infrastructures critiques et la digitalisation, M. MUYAKA a fondé GTS SARL après des postes de direction dans des entreprises locales et internationales.",
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_158ce42f5-1769366107832.png",
  alt: "Achille MUYAKA, Directeur Général de GTS SARL, en costume professionnel"
},
{
  id: "michel-ossodu",
  name: "Michel OSSODU",
  role: "Directeur des Opérations",
  education: "Ingénierie Industrielle — École Polytechnique de Montréal",
  experience: "12+ ans",
  bio: "Maîtrise en ingénierie industrielle, M. Ossodu supervise l'exécution de chaque projet dans le respect des délais, budgets et standards qualité les plus exigeants.",
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png",
  alt: "Michel OSSODU, Directeur des Opérations de GTS SARL, souriant en environnement professionnel"
},
{
  id: "papy-ebele",
  name: "Papy EBELE",
  role: "Directeur Technique",
  education: "Systèmes Informatiques & Télécoms",
  experience: "15+ ans",
  bio: "Reconnu pour son approche innovante dans le déploiement d'infrastructures critiques, M. Ebele supervise toutes les équipes techniques d'installation et de maintenance.",
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_171e8bef7-1772443819213.png",
  alt: "Papy EBELE, Directeur Technique de GTS SARL, en tenue professionnelle avec un ordinateur"
},
{
  id: "marlene-nyota",
  name: "Marlène NYOTA",
  role: "Directrice des Ressources Humaines",
  education: "Gestion des Ressources Humaines",
  experience: "8+ ans",
  bio: "Mme Nyota dirige les initiatives de recrutement et de formation, veillant à ce que GTS SARL dispose d'une équipe qualifiée et motivée pour répondre aux besoins du secteur.",
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1fbaa900e-1767459288239.png",
  alt: "Marlène NYOTA, Directrice des Ressources Humaines de GTS SARL, en tenue professionnelle"
}];


export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    sectionRef.current?.
    querySelectorAll(".reveal-up, .reveal-scale").
    forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="equipe" ref={sectionRef} className="py-24 md:py-32 bg-navy-deep">
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="section-label mb-3">Notre équipe dirigeante</div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight tracking-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}>
            
            Les Visages de{" "}
            <span className="text-amber-gradient italic font-light">GTS SARL</span>
          </h2>
          <p className="text-offwhite-dim font-body text-base leading-relaxed max-w-xl mx-auto mt-4">
            Une équipe pluridisciplinaire réunissant plus de 45 ans d'expérience cumulée dans les secteurs techniques les plus exigeants.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) =>
          <div
            key={member.id}
            className={`reveal-scale delay-${i * 100} team-card group flex flex-col`}>
            
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-navy-mid mb-5 relative">
                <AppImage
                src={member.image}
                alt={member.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="flex items-start justify-between mb-2">
                <h3
                className="font-display text-xl font-bold text-offwhite leading-tight"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                
                  {member.name}
                </h3>
                <span className="text-amber font-body font-semibold text-xs mt-1 flex-shrink-0 ml-2">
                  {member.experience}
                </span>
              </div>
              <div className="section-label mb-3">{member.role}</div>
              <p className="text-offwhite-dim font-body text-sm leading-relaxed">
                {member.bio}
              </p>
              <div className="mt-4 pt-4 border-t border-offwhite-faint">
                <p className="text-offwhite-dim text-xs font-body">
                  {member.education}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}