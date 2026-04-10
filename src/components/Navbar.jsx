import { useState } from "react";
import { NavLink } from "react-router";
import CLILOGO from "@/assets/images/CLILOG3.png";

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
      "text-parchment transition duration-300",
      isActive ? "opacity-100" : "opacity-80 hover:opacity-100",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block rounded-2xl px-4 py-3 font-brand text-base font-semibold uppercase tracking-[0.14em]",
      "text-parchment transition duration-300",
      isActive
        ? "bg-parchment/15 opacity-100"
        : "opacity-80 hover:bg-parchment/10 hover:opacity-100",
    ].join(" ");

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-tan/20 bg-dusty-taupe/55 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-4 sm:px-6 md:justify-between lg:px-12">
        <NavLink
          to="/"
          end
          className="whitespace-nowrap font-brand text-lg font-semibold uppercase tracking-[0.18em] text-parchment transition duration-300 hover:opacity-85 sm:text-xl"
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
                      "absolute -bottom-2 left-0 h-px w-full origin-left bg-tan transition-transform duration-300 ease-out",
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
          className="absolute right-4 inline-flex items-center justify-center rounded-full border border-tan/20 bg-parchment/10 p-2 text-parchment transition duration-300 hover:bg-parchment/20 md:hidden sm:right-6"
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
                "absolute left-0 top-0 block h-0.5 w-6 bg-parchment transition-all duration-300",
                menuOpen ? "top-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-2 block h-0.5 w-6 bg-parchment transition-all duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-4 block h-0.5 w-6 bg-parchment transition-all duration-300",
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
          "overflow-hidden bg-dusty-taupe/95 backdrop-blur-xl md:hidden",
          "transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          menuOpen
            ? "max-h-[calc(100vh-5rem)] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col px-4 py-4 sm:px-6",
            "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="flex flex-1 flex-col items-center gap-2">
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

          {/* Mobile menu footer */}
          <div className="mt-2 pt-2">
            <div className="flex flex-col items-center gap-5 text-center">
              <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                <img
                  src={CLILOGO}
                  alt="CLI Designs logo"
                  className="h-16 w-auto object-contain"
                />
              </NavLink>

              <p className="font-brand text-xs tracking-[0.08em] text-almond-cream/85">
                Trinidad & Tobago | clidesignsltd@gmail.com
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/clidesigns?igsh=bzA3YnppbDBmbG45"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="CLI Designs Instagram"
                  className="inline-flex items-center text-almond-cream/75 transition-opacity duration-300 hover:text-almond-cream"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                <div className="border-l border-tan/20 pl-3">
                  <p className="font-brand text-xs tracking-[0.08em] text-almond-cream/75">
                    © {new Date().getFullYear()} CLI Designs. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
