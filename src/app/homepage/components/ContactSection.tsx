"use client";

import { useState, useRef, useEffect } from "react";

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal-up, .reveal-scale")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API or email service
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Adresse",
      value: "14 Bis, Avenue TOMBALBAYE, Quartier Salongo, Commune de Lemba — Kinshasa, RDC",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.49 2 2 0 0 1 3.59 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 5.55 5.55l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.33 16.92z" />
        </svg>
      ),
      label: "Téléphone",
      value: "(+243) 855 248 739 | 81 070 71 08 | 999 977 011",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      value: "contact@gts.cd | sales@gts.cd",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
        </svg>
      ),
      label: "Site web",
      value: "www.gts.cd",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-navy-deep">
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="section-label mb-3">Travaillons ensemble</div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight tracking-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}
          >
            Contactez{" "}
            <span className="text-amber-gradient italic font-light">GTS SARL</span>
          </h2>
          <p className="text-offwhite-dim font-body text-base leading-relaxed max-w-lg mx-auto mt-4">
            Vous avez un projet en télécommunications, génie civil ou IT ? Notre équipe est prête à vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16">
          {/* Form */}
          <div className="reveal-scale delay-100">
            {submitted ? (
              <div className="glass-card rounded-3xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-dim flex items-center justify-center text-amber mx-auto mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3
                  className="font-display text-2xl font-bold text-offwhite mb-3"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}
                >
                  Message envoyé !
                </h3>
                <p className="text-offwhite-dim font-body">
                  Nous vous répondrons dans les plus brefs délais. Merci de votre intérêt pour GTS SARL.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-outline-amber px-6 py-3 rounded-full text-sm font-body"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-offwhite-dim text-xs font-body font-semibold tracking-widest uppercase mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      placeholder="Jean-Pierre Kabila"
                      className="w-full bg-navy-mid/60 border border-offwhite-faint rounded-xl px-4 py-3 text-offwhite font-body text-sm placeholder-offwhite-dim/40 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-offwhite-dim text-xs font-body font-semibold tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="vous@exemple.cd"
                      className="w-full bg-navy-mid/60 border border-offwhite-faint rounded-xl px-4 py-3 text-offwhite font-body text-sm placeholder-offwhite-dim/40 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-offwhite-dim text-xs font-body font-semibold tracking-widest uppercase mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="(+243) ..."
                    className="w-full bg-navy-mid/60 border border-offwhite-faint rounded-xl px-4 py-3 text-offwhite font-body text-sm placeholder-offwhite-dim/40 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-offwhite-dim text-xs font-body font-semibold tracking-widest uppercase mb-2">
                    Sujet *
                  </label>
                  <select
                    name="sujet"
                    value={form.sujet}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-mid/60 border border-offwhite-faint rounded-xl px-4 py-3 text-offwhite font-body text-sm focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-colors"
                  >
                    <option value="" className="bg-navy-deep">
                      Sélectionnez un sujet...
                    </option>
                    <option value="telecom" className="bg-navy-deep">
                      Projet Télécommunications
                    </option>
                    <option value="civil" className="bg-navy-deep">
                      Génie Civil & Électricité
                    </option>
                    <option value="it" className="bg-navy-deep">
                      Réseaux & IT
                    </option>
                    <option value="consulting" className="bg-navy-deep">
                      Consulting & Licences
                    </option>
                    <option value="formation" className="bg-navy-deep">
                      Formation
                    </option>
                    <option value="autre" className="bg-navy-deep">
                      Autre demande
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-offwhite-dim text-xs font-body font-semibold tracking-widest uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full bg-navy-mid/60 border border-offwhite-faint rounded-xl px-4 py-3 text-offwhite font-body text-sm placeholder-offwhite-dim/40 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-amber w-full py-4 rounded-xl text-base font-body"
                >
                  Envoyer la demande →
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6 reveal-up delay-300">
            <div className="glass-card rounded-3xl p-8 space-y-7">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-dim flex items-center justify-center text-amber flex-shrink-0 mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <div className="section-label mb-1">{info.label}</div>
                    <p className="text-offwhite font-body text-sm leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="glass-card rounded-3xl p-8">
              <div className="section-label mb-4">Localisation</div>
              <div className="rounded-2xl overflow-hidden bg-navy-mid h-48 flex items-center justify-center relative">
                <div
                  className="absolute inset-0 bg-grid-pattern bg-grid opacity-50"
                  aria-hidden="true"
                />
                <div className="relative text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-dim flex items-center justify-center text-amber mx-auto mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="text-offwhite font-body font-semibold text-sm">
                    Commune de Lemba
                  </div>
                  <div className="text-offwhite-dim font-body text-xs mt-1">
                    Kinshasa, RDC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}