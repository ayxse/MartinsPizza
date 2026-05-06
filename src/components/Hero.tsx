import heroPizza from "../assets/pizza.png";
import { SITE } from "../data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,var(--color-cream),transparent_75%)] py-16 lg:py-24">
      {/* Soft fade on the sides for the rustic paper effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-20"
        style={{ background: "linear-gradient(90deg,var(--color-paper),transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20"
        style={{ background: "linear-gradient(-90deg,var(--color-paper),transparent)" }}
      />

      <div className="container-x relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] items-center gap-12 lg:gap-16">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}

function HeroText() {
  return (
    <div className="text-center lg:text-left">
      <div className="flex justify-center lg:justify-start lg:pl-1 mb-4">
        <span
          className="font-script text-[26px] sm:text-[28px] text-red"
          style={{ transform: "rotate(-3deg)", transformOrigin: "center" }}
        >
          ~ Auténtica pizzería familiar ~
        </span>
      </div>

      <h1 className="mt-2 font-display font-medium italic text-[clamp(56px,8.5vw,104px)] leading-[0.92] text-ink tracking-tight">
        Sabor que <br className="hidden sm:block" />
        <span
          className="font-script text-red-dark not-italic font-normal align-baseline"
          style={{ fontSize: "1.15em" }}
        >
          enamora
        </span>
    
      </h1>

      <p className="mt-7 font-display italic text-[20px] sm:text-[22px] text-ink-2 max-w-[560px] mx-auto lg:mx-0 leading-relaxed">
        "En cada porción, treinta años de pasión por la pizza hecha con el corazón.
        Masa amasada a mano, ingredientes frescos y el toque familiar que solo
        nosotros sabemos dar."
      </p>

      <div className="mt-9 flex flex-wrap gap-3.5 justify-center lg:justify-start">
        <a href="#menu" className="btn btn-red">
          Ver Nuestro Menú
        </a>
        <a href="#visita" className="btn btn-outline">
          Llama y Ordena
        </a>
      </div>

      <FeatureStrip />
    </div>
  );
}

function FeatureStrip() {
  const features = ["100% Natural", "Masa Diaria", "Mozzarella Real", "Horno Tradicional"];
  return (
    <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-[12px] tracking-[0.18em] uppercase text-ink-2/70 font-condensed">
      {features.map((f, i) => (
        <li key={f} className="flex items-center gap-2">
          {i > 0 && <span className="text-red/60">✦</span>}
          {i === 0 && <span className="text-red/60">✦</span>}
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

function HeroImage() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto lg:max-w-none">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[2px] border-[10px] border-cream"
        style={{
          boxShadow:
            "0 0 0 1px var(--color-ink-2), 0 30px 60px -20px rgba(43,24,16,0.45), 0 10px 30px -10px rgba(43,24,16,0.3)",
          transform: "rotate(1deg)",
        }}
      >
        <img
          src={heroPizza}
          alt="Pizza de pepperoni recién horneada en Martin's Pizza Palace"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Subtle warm overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(43,24,16,0.2) 100%)",
          }}
        />
      </div>

      {/* "Est. 1993" hand-written ribbon - top right */}
      <div
        className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 bg-red-dark text-cream px-5 py-2 font-script text-xl sm:text-2xl"
        style={{
          transform: "rotate(8deg)",
          boxShadow: "3px 3px 0 var(--color-ink)",
        }}
      >
        Est. {SITE.established}
      </div>
    </div>
  );
}
