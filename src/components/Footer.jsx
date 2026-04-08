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
      "group inline-flex w-fit items-center font-brand text-sm font-semibold uppercase tracking-[0.14em] transition duration-300",
      "text-[#F3EEEA]",
      isActive ? "opacity-100" : "opacity-75 hover:opacity-100",
    ].join(" ");

  return (
    <footer className="relative overflow-hidden border-t border-[#CEB199]/20 bg-[#8A7969]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(206,177,153,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(243,238,234,0.08),transparent_35%)]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start lg:gap-16">
          {/* Logo / Brand */}
          <div className="flex flex-col gap-6">
            <NavLink to="/" end className="inline-flex w-fit">
              <img
                src={CLILOGO}
                alt="CLI Designs logo"
                className="h-20 w-auto object-contain sm:h-24 lg:h-28"
              />
            </NavLink>

            <p className="max-w-md font-brand text-sm leading-7 text-[#E8D6C6] sm:text-base">
              Interior spaces shaped with warmth, restraint, and a lasting sense
              of atmosphere.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-end">
            <p className="font-brand text-xs font-semibold uppercase tracking-[0.24em] text-[#CEB199]/80">
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
                            "absolute left-0 -bottom-1 h-px w-full origin-left bg-[#CEB199] transition-transform duration-300 ease-out",
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

        <div className="mt-10 border-t border-[#CEB199]/20 pt-6">
          <p className="font-brand text-sm text-[#E8D6C6]/80">
            © {new Date().getFullYear()} CLI Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
