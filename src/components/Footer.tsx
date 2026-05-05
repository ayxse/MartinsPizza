import logo from "../assets/logo.png";
import { SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper-2 pt-12 pb-8 text-center">
      <div className="container-x">
        <img src={logo} alt={SITE.name} className="w-20 mx-auto mb-4.5 opacity-95" />
        <div className="font-display italic text-[26px] text-cream mb-1.5">
          {SITE.name}
        </div>
        <div className="font-script text-[22px] text-gold mb-6">{SITE.tagline}</div>

        <div className="flex items-center justify-center gap-3.5 my-4.5 text-gold opacity-60">
          <span className="w-15 h-px bg-current" style={{ width: "60px" }} />
          <span>✦</span>
          <span className="w-15 h-px bg-current" style={{ width: "60px" }} />
        </div>

        <div className="text-[13px] opacity-60 tracking-wide">
          © {new Date().getFullYear()} {SITE.name} ·{" "}
          {SITE.locations.map((l) => l.name).join(" & ")}, Puerto Rico · Todos los
          derechos reservados
        </div>
      </div>
    </footer>
  );
}
