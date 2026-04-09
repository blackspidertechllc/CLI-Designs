import { useState } from "react";
import { NavLink } from "react-router";

const navLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLinkClass = ({ isActive }) =>
    [
      "relative inline-flex items-center px-1 py-1 font-brand text-sm font-semibold uppercase tracking-[0.16em]",
      "text-[#F3EEEA] transition duration-300",
      isActive ? "opacity-100" : "opacity-80 hover:opacity-100",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block rounded-2xl px-4 py-3 font-brand text-base font-semibold uppercase tracking-[0.14em]",
      "text-[#F3EEEA] transition duration-300",
      isActive
        ? "bg-[#F3EEEA]/15 opacity-100"
        : "opacity-80 hover:bg-[#F3EEEA]/10 hover:opacity-100",
    ].join(" ");

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#CEB199]/20 bg-[#8A7969]/55 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-4 sm:px-6 md:justify-between lg:px-12">
        <NavLink
          to="/"
          end
          className="whitespace-nowrap font-brand text-lg font-semibold uppercase tracking-[0.18em] text-[#F3EEEA] transition duration-300 hover:opacity-85 sm:text-xl"
          onClick={() => setMenuOpen(false)}
        >
          CLI Designs
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={desktopLinkClass}>
              {({ isActive }) => (
                <span className="relative inline-block">
                  {link.label}
                  <span
                    className={[
                      "absolute -bottom-2 left-0 h-px w-full origin-left bg-[#CEB199] transition-transform duration-300 ease-out",
                      isActive ? "scale-x-100" : "scale-x-0",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="absolute right-4 inline-flex items-center justify-center rounded-full border border-[#CEB199]/20 bg-[#F3EEEA]/10 p-2 text-[#F3EEEA] transition duration-300 hover:bg-[#F3EEEA]/20 md:hidden sm:right-6"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="relative block h-5 w-6">
            <span
              className={[
                "absolute left-0 top-0 block h-0.5 w-6 bg-[#F3EEEA] transition-all duration-300",
                menuOpen ? "top-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-2 block h-0.5 w-6 bg-[#F3EEEA] transition-all duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-4 block h-0.5 w-6 bg-[#F3EEEA] transition-all duration-300",
                menuOpen ? "top-2 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav-menu"
        className={[
          "overflow-hidden border-t border-[#CEB199]/20 bg-[#8A7969]/95 backdrop-blur-xl md:hidden",
          "transition-all duration-300 ease-out",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
