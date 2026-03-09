"use client";

import { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

const stats = [
{ value: "15+", label: "Années d\'expérience", sub: "Fondée en 2009" },
{ value: "50+", label: "Projets livrés", sub: "À travers la RDC" },
{ value: "3", label: "Secteurs clés", sub: "Télécom · Civil · IT" }];


export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth - 0.5) * 20;
      const yPct = (clientY / innerHeight - 0.5) * 10;
      const glow = heroRef.current.querySelector<HTMLElement>(".hero-glow");
      if (glow) {
        glow.style.transform = `translate(${xPct}px, ${yPct}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const handleServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-deep">
      
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        aria-hidden="true" />
      

      {/* Ambient glow orbs */}
      <div
        className="hero-glow absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-700"
        style={{
          background:
          "radial-gradient(circle, rgba(245,166,35,0.08) 0%, rgba(30,58,95,0.15) 50%, transparent 70%)"
        }}
        aria-hidden="true" />
      
      <div
        className="ambient-pulse absolute bottom-1/4 left-1/6 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
          "radial-gradient(circle, rgba(42,77,122,0.25) 0%, transparent 70%)"
        }}
        aria-hidden="true" />
      

      {/* Main content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <div>
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber/30 bg-amber-dim mb-8"
              style={{ animation: "slideInLeft 0.6s ease forwards" }}>
              
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span className="section-label">
                Kinshasa, République Démocratique du Congo
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-display hero-title leading-[0.88] tracking-tight mb-6"
              style={{
                fontFamily: "Fraunces, Georgia, serif",
                animation: "slideInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s both"
              }}>
              
              <span className="block text-offwhite">Solutions</span>
              <span className="block text-amber-gradient">Techniques</span>
              <span className="block text-offwhite italic font-light">
                de Référence
              </span>
            </h1>

            {/* Sub */}
            <p
              className="text-offwhite-dim text-lg md:text-xl font-body font-light leading-relaxed max-w-xl mb-10"
              style={{
                animation:
                "slideInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both"
              }}>
              
              Global Technical Services (GTS SARL) — votre partenaire de
              confiance pour les télécommunications, le génie civil et les
              infrastructures IT en RDC.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                animation:
                "slideInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.45s both"
              }}>
              
              <button
                onClick={handleContact}
                className="btn-amber px-8 py-4 rounded-full text-base font-body">
                
                Demander un devis
              </button>
              <button
                onClick={handleServices}
                className="btn-outline-amber px-8 py-4 rounded-full text-base font-body">
                
                Nos services →
              </button>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-offwhite-faint"
              style={{
                animation:
                "slideInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.55s both"
              }}>
              
              {stats.map((s) =>
              <div key={s.label}>
                  <div
                  className="font-display text-4xl md:text-5xl font-bold text-amber leading-none"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                  
                    {s.value}
                  </div>
                  <div className="text-offwhite text-sm font-body font-medium mt-1">
                    {s.label}
                  </div>
                  <div className="text-offwhite-dim text-xs font-body mt-0.5">
                    {s.sub}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Floating cards stack */}
          <div className="hidden lg:block relative h-[520px]">
            {/* Main image card */}
            <div
              className="float-a absolute top-0 right-0 w-72 rounded-3xl overflow-hidden glass-card glow-amber"
              style={{ animation: "scaleIn 0.8s ease 0.6s both, floatA 6s ease-in-out 1.4s infinite" }}>
              
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1adecda1d-1772609807581.png"
                alt="Technicien GTS SARL installant une infrastructure télécom sur le terrain en RDC"
                width={288}
                height={320}
                className="w-full h-72 object-cover"
                priority />
              
              <div className="p-4">
                <div className="text-amber text-xs font-body font-semibold tracking-widest uppercase mb-1">
                  Télécom & Réseau
                </div>
                <div className="text-offwhite text-sm font-body font-medium">
                  Déploiement VSAT & Fibre
                </div>
              </div>
            </div>

            {/* Floating stat card 1 */}
            <div
              className="float-b absolute top-56 left-0 glass-card rounded-2xl p-5 w-52"
              style={{ animation: "scaleIn 0.7s ease 0.8s both, floatB 7.5s ease-in-out 1.8s infinite" }}>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-amber-dim flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="1.8"
                    className="w-5 h-5">
                    
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-display text-2xl font-bold text-amber leading-none"
                    style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                    
                    100%
                  </div>
                  <div className="text-offwhite-dim text-xs font-body">
                    Projets livrés
                  </div>
                </div>
              </div>
              <div className="text-offwhite text-xs font-body font-medium">
                Respect des délais et budgets
              </div>
            </div>

            {/* Floating stat card 2 */}
            <div
              className="float-c absolute bottom-0 right-8 glass-card rounded-2xl p-5 w-56"
              style={{ animation: "scaleIn 0.7s ease 1s both, floatC 5s ease-in-out 2s infinite" }}>
              
              <div className="text-amber text-xs font-body font-semibold tracking-widest uppercase mb-2">
                Présence nationale
              </div>
              <div
                className="font-display text-3xl font-bold text-offwhite leading-none mb-1"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                
                RDC
              </div>
              <div className="text-offwhite-dim text-xs font-body leading-relaxed">
                Kinshasa · Lubumbashi · Zones reculées
              </div>
              <div className="mt-3 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) =>
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full"
                  style={{ background: i <= 4 ? "#F5A623" : "rgba(232,228,218,0.15)" }} />

                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-offwhite-dim text-xs font-body tracking-widest uppercase">
          Défiler
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-amber to-transparent" />
      </div>
    </section>);

}