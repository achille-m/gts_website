"use client";

import { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

const values = [
{
  icon:
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9c0-1.042-.133-2.052-.382-3.016z" />
      </svg>,

  title: "Excellence",
  desc: "Chaque projet reflète notre exigence des normes les plus élevées."
},
{
  icon:
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,

  title: "Innovation",
  desc: "Solutions techniques adaptées à un marché en constante évolution."
},
{
  icon:
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>,

  title: "Partenariat",
  desc: "Relations de confiance durables avec clients et partenaires locaux."
},
{
  icon:
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>,

  title: "Fiabilité",
  desc: "Transparence, intégrité et responsabilité à chaque étape."
}];


const clients = [
"Entreprises Télécom",
"Industries Minières",
"Agences Gouvernementales",
"Organisations Internationales",
"PME & Start-ups"];


export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            // Animate progress bars
            const bars = e.target.querySelectorAll<HTMLElement>(".progress-fill");
            bars.forEach((bar) => bar.classList.add("animated"));
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.
    querySelectorAll(".reveal-up, .reveal-left, .reveal-scale").
    forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="apropos"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #162335 0%, #0D1B2A 100%)" }}>
      
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="reveal-up mb-16">
          <div className="section-label mb-3">Notre identité</div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight tracking-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}>
            
            À Propos de{" "}
            <span className="text-amber-gradient italic font-light">GTS SARL</span>
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <div className="reveal-up delay-100">
              <p className="text-offwhite font-body text-lg leading-relaxed mb-6">
                Fondée à Kinshasa, <strong className="text-amber">Global Technical Services (GTS SARL)</strong> est une entreprise polyvalente offrant des services dans les domaines clés des télécommunications, du génie civil et de l'électricité industrielle.
              </p>
              <p className="text-offwhite-dim font-body text-base leading-relaxed mb-10">
                Implantée en République Démocratique du Congo, GTS SARL est votre partenaire de confiance pour la fourniture de solutions techniques et logistiques adaptées à un marché en constante évolution. Nous plaçons l'innovation et la satisfaction client au cœur de notre mission.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {values.map((v, i) =>
              <div
                key={v.title}
                className={`reveal-scale delay-${i * 100} glass-card rounded-2xl p-5 flex gap-4 items-start`}>
                
                  <div className="w-10 h-10 rounded-xl bg-amber-dim flex items-center justify-center text-amber flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <div
                    className="font-display font-bold text-offwhite text-base mb-1"
                    style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                    
                      {v.title}
                    </div>
                    <p className="text-offwhite-dim text-sm font-body leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Client sectors */}
            <div className="reveal-up delay-400">
              <div className="section-label mb-4">Secteurs clients</div>
              <div className="flex flex-wrap gap-2">
                {clients.map((c) =>
                <span
                  key={c}
                  className="px-4 py-2 rounded-full border border-amber/30 text-amber text-xs font-body font-medium">
                  
                    {c}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Image + expertise bars */}
          <div className="reveal-left delay-200">
            <div className="rounded-3xl overflow-hidden mb-8 relative h-72">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ea6a30b1-1772609808009.png"
                alt="Équipe GTS SARL sur un chantier de construction industrielle en République Démocratique du Congo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
              <div className="absolute bottom-6 left-6 glass-card rounded-2xl px-5 py-4">
                <div
                  className="font-display text-3xl font-bold text-amber"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                  
                  14 Bis
                </div>
                <div className="text-offwhite text-xs font-body mt-1">
                  Avenue TOMBALBAYE, Lemba — Kinshasa
                </div>
              </div>
            </div>

            {/* Expertise bars */}
            <div className="glass-card rounded-3xl p-7 space-y-6">
              <div className="section-label mb-2">Domaines d'expertise</div>
              {[
              { label: "Télécommunications & VSAT", value: 95 },
              { label: "Génie Civil & Électricité", value: 88 },
              { label: "Réseaux IT & Informatique", value: 90 },
              { label: "Consulting & Formation", value: 82 }].
              map((item) =>
              <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-offwhite text-sm font-body font-medium">
                      {item.label}
                    </span>
                    <span className="text-amber text-sm font-body font-semibold">
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-offwhite-faint overflow-hidden">
                    <div
                    className="progress-fill h-full rounded-full"
                    style={{ "--target-width": `${item.value}%` } as React.CSSProperties} />
                  
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}