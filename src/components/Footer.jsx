import { NavLink } from "react-router";
import CLILOGO from "@/assets/images/CLILOG3.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-tan/20 bg-dusty-taupe">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(206,177,153,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(243,238,234,0.08),transparent_35%)]" />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-12">
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8">
          {/* Left — hidden on mobile */}
          <div className="hidden md:flex md:justify-start">
            <p className="font-brand text-xs tracking-[0.08em] text-almond-cream/85 sm:text-sm">
              Trinidad & Tobago | clidesignsltd@gmail.com
            </p>
          </div>

          {/* Center Logo — always visible */}
          <div className="flex justify-center">
            <NavLink to="/" end className="inline-flex w-fit">
              <img
                src={CLILOGO}
                alt="CLI Designs logo"
                className="h-16 w-auto object-contain sm:h-20 lg:h-20"
              />
            </NavLink>
          </div>

          {/* Right — hidden on mobile */}
          <div className="hidden items-center justify-center gap-3 md:flex md:justify-end">
            <a
              href="https://www.instagram.com/clidesigns?igsh=bzA3YnppbDBmbG45"
              target="_blank"
              rel="noreferrer"
              aria-label="CLI Designs Instagram"
              className="inline-flex items-center text-almond-cream/75 transition-all duration-300 hover:opacity-100"
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

            <div className="border-l border-tan/15 pl-3">
              <p className="font-brand text-xs tracking-[0.08em] text-almond-cream/75 sm:text-sm">
                © {new Date().getFullYear()} CLI Designs. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
