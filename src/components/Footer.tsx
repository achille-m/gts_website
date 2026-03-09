import AppLogo from "@/components/ui/AppLogo";


const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Équipe", href: "#equipe" },
  { label: "À Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-offwhite-faint bg-navy-deep">
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <AppLogo size={48} />
            <div>
              <div
                className="font-display font-bold text-offwhite text-lg leading-none"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                GTS SARL
              </div>
              <div className="text-offwhite-dim text-xs font-body mt-0.5">
                Global Technical Services
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Liens de pied de page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks?.map((link) => (
                <li key={link?.href}>
                  <a
                    href={link?.href}
                    className="text-offwhite-dim hover:text-amber text-sm font-body font-medium transition-colors duration-200"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright + legal */}
          <div className="text-right">
            <p className="text-offwhite-dim text-xs font-body">
              © 2026 Global Technical Services (GTS SARL)
            </p>
            <p className="text-offwhite-dim/50 text-xs font-body mt-1">
              Kinshasa, République Démocratique du Congo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}