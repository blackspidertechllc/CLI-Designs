import { NavLink } from "react-router";
import CLILOGO from "@/assets/images/CLILOG3.png";

const footerLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
  const navLinkClass = ({ isActive }) =>
    [
      "group inline-flex w-fit items-center font-brand text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 sm:text-sm",
      "text-parchment",
      isActive ? "opacity-100" : "opacity-75 hover:opacity-100",
    ].join(" ");

  return (
    <footer className="relative overflow-hidden border-t border-tan/20 bg-dusty-taupe">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(206,177,153,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(243,238,234,0.08),transparent_35%)]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start lg:gap-16">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center gap-5 md:items-start md:gap-6">
            <NavLink
              to="/"
              end
              className="inline-flex w-fit justify-center md:justify-start"
            >
              <img
                src={CLILOGO}
                alt="CLI Designs logo"
                className="h-20 w-auto object-contain sm:h-24 lg:h-28"
              />
            </NavLink>

            <p className="hidden max-w-sm font-brand text-sm leading-7 text-almond-cream/90 md:block">
              Interior spaces shaped with warmth, restraint, and a lasting sense
              of atmosphere.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden md:block md:justify-self-end">
            <p className="font-brand text-[11px] font-semibold uppercase tracking-[0.28em] text-tan/75">
              Navigation
            </p>

            <ul className="mt-6 flex flex-col gap-3.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={navLinkClass}>
                    {({ isActive }) => (
                      <span className="relative inline-block">
                        {link.label}
                        <span
                          className={[
                            "absolute left-0 -bottom-1.5 h-px w-full origin-left bg-tan transition-transform duration-300 ease-out",
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

        <div className="mt-10 hidden border-t border-tan/20 pt-5 md:block">
          <p className="font-brand text-xs tracking-[0.08em] text-almond-cream/75 sm:text-sm">
            © {new Date().getFullYear()} CLI Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}