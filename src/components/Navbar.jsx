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
      "relative inline-flex items-center px-2 py-1 font-brand font-bold",
      "text-lg lg:text-2xl text-text-black transition-opacity duration-200",
      isActive ? "opacity-100" : "opacity-90 hover:opacity-70",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block rounded-xl px-2 py-2 font-brand font-bold",
      "text-lg text-text-black transition-opacity duration-200",
      isActive
        ? "opacity-100 underline underline-offset-4"
        : "opacity-90 hover:opacity-70",
    ].join(" ");

  return (
    <nav className="fixed top-0 left-0 z-50 w-full  bg-brand-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-12">
        <NavLink
          to="/"
          end
          className="whitespace-nowrap font-brand text-xl font-bold text-text-black sm:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          CLI Designs
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-4 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={desktopLinkClass}>
              {({ isActive }) => (
                <span className="relative inline-block">
                  {link.label}
                  <span
                    className={[
                      "absolute left-0 -bottom-1 h-0.5 w-full origin-left rounded-full",
                      "bg-current transition-transform duration-300 ease-out",
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
          className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
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
                "absolute left-0 top-0 block h-0.5 w-6 bg-text-black transition-all duration-300",
                menuOpen ? "top-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-2 block h-0.5 w-6 bg-text-black transition-all duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-4 block h-0.5 w-6 bg-text-black transition-all duration-300",
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
          "overflow-hidden border-t border-black/10 bg-brand-white md:hidden",
          "transition-all duration-300 ease-out",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="flex flex-col gap-2 px-4 py-4">
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
