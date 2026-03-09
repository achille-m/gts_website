import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GTS SARL — Global Technical Services | Kinshasa, RDC",
  description:
    "Global Technical Services (GTS SARL) — Solutions techniques de référence en télécommunications, génie civil et infrastructures IT en République Démocratique du Congo. Kinshasa, Lubumbashi et au-delà.",
  keywords: [
    "GTS SARL",
    "Global Technical Services",
    "télécommunications RDC",
    "VSAT Congo",
    "génie civil Kinshasa",
    "infrastructure IT",
    "électricité industrielle",
    "consulting télécom",
  ],
  openGraph: {
    title: "GTS SARL — Global Technical Services",
    description:
      "Votre partenaire de confiance pour les solutions techniques en RDC — Télécom, Génie Civil, IT.",
    type: "website",
    locale: "fr_CD",
  },
};

export default function Homepage() {
  return (
    <main className="bg-navy-deep min-h-screen">
      <NavBar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}