import { NavLink } from "react-router";
import CLILOGO from "@/assets/images/CLILOG3.png";

const footerLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact us" },
];

export default function Footer() {
  const navLinkClass = ({ isActive }) =>
    [
      "group inline-flex w-fit items-center font-brand text-base font-semibold text-text-black transition duration-200",
      isActive ? "opacity-100" : "opacity-85 hover:opacity-100",
    ].join(" ");

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-brand-white/95">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start lg:gap-16">
          {/* Logo */}
          <div className="flex items-start">
            <NavLink to="/" end className="inline-flex">
              <img
                src={CLILOGO}
                alt="CLI Designs logo"
                className="h-24 w-auto object-contain sm:h-28 lg:h-32"
              />
            </NavLink>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-end">
            <p className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55">
              Navigation
            </p>

            <ul className="mt-5 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={navLinkClass}>
                    {({ isActive }) => (
                      <span className="relative inline-block">
                        {link.label}
                        <span
                          className={[
                            "absolute left-0 -bottom-1 h-0.5 w-full origin-left rounded-full bg-current transition-transform duration-300 ease-out",
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100",
                          ].join(" ")}
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6">
          <p className="font-brand text-sm text-text-black/65">
            © {new Date().getFullYear()} CLI Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
