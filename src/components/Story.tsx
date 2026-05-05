import storyOven from "../assets/pizzaoven.png";
import logo from "../assets/logo.png";
import { SITE } from "../data/site";

export default function Story() {
  return (
    <section
      id="tradicion"
      className="bg-green-dark text-cream py-24 relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 80H0z' fill='%23c9a961' fill-opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-x relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <StoryArt />
        <StoryText />
      </div>
    </section>
  );
}

function StoryArt() {
  return (
    <div className="relative max-w-[500px] w-full mx-auto">
      <div
        className="aspect-[4/5] overflow-hidden relative"
        style={{
          border: "8px solid var(--color-gold)",
          transform: "rotate(-2deg)",
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.4)",
        }}
      >
        <span
          className="absolute -inset-5 border border-gold opacity-40 pointer-events-none z-10"
          style={{ transform: "rotate(2deg)" }}
          aria-hidden
        />
        <img
          src={storyOven}
          alt="Pizza de pepperoni saliendo del horno de leña en Martin's Pizza Palace"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Logo medallion overlapping bottom-right */}
      <div
        className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6"
        style={{ transform: "rotate(6deg)" }}
      >
        <div
          className="bg-cream rounded-full p-3 border border-gold/40"
          style={{
            boxShadow:
              "0 0 0 3px var(--color-green-dark), 0 0 0 4px var(--color-gold), 0 18px 30px -10px rgba(0,0,0,0.45)",
          }}
        >
          <img
            src={logo}
            alt={SITE.name}
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function StoryText() {
  return (
    <div>
      <span className="kicker text-gold!">— Nuestra historia —</span>
      <h2 className="section-title text-cream!">
        Una receta, una{" "}
        <span
          className="font-script text-gold not-italic font-normal align-baseline"
          style={{ fontSize: "1.15em" }}
        >
          familia
        </span>
      </h2>

      <div className="mt-8 space-y-4.5 font-display text-[20px] italic leading-relaxed text-[rgba(255,248,231,0.85)]">
        <p>
          Desde {SITE.established}, hemos abierto las puertas de {SITE.name} cada día
          con la misma promesa: ofrecer a Puerto Rico una pizza que sepa a casa, a
          tradición y a verdadero sabor.
        </p>
        <p>
          Hoy, con localides en{" "}
          {SITE.locations.map((l) => l.name).join(" y ")}, seguimos amasando con las
          manos, escogiendo cada ingrediente y horneando cada pizza con el cuidado de
          quien sabe que está alimentando recuerdos.
        </p>
    </div>

      <div className="mt-8 flex items-center gap-4.5">
        <span className="w-15 h-px bg-gold" style={{ width: "60px" }} />
        <span className="font-script text-[32px] text-gold">— La Familia Martin</span>
      </div>
    </div>
  );
}
