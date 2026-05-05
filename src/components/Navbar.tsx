import { useState } from "react";
import logo from "../assets/logo.png";
import { NAV_LINKS, SITE } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="bg-paper border-b-[3px] border-double border-red-dark py-3 shadow-[0_4px_20px_rgba(43,24,16,0.08)]"
      style={{ borderBottomStyle: "double" }}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 sm:gap-4 text-red-dark">
          <img
            src={logo}
            alt={SITE.name}
            className="h-[96px] w-[96px] sm:h-[112px] sm:w-[112px] object-contain drop-shadow-[0_4px_10px_rgba(43,24,16,0.18)]"
          />
          <span className="font-display text-[24px] sm:text-[26px] font-semibold tracking-wide leading-tight">
            Martin's
            <span className="block text-green-dark font-normal text-[16px] sm:text-[18px] tracking-[0.18em] uppercase font-condensed">
              Pizza Palace
            </span>
          </span>
        </a>

        <ul className="hidden md:flex gap-8 font-display text-lg font-semibold tracking-wider">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-red after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-0.5 after:bg-red after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-ink"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <ul className="md:hidden container-x mt-4 flex flex-col gap-4 pb-2 font-display text-lg font-semibold">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 border-b border-ink-2/20 hover:text-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
