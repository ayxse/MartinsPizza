import { PIZZAS, SIZE_LABELS, type PizzaSize } from "../data/menu";
import MenuExtras from "./MenuExtras";
import SectionHead from "./SectionHead";

const SIZE_ORDER: PizzaSize[] = ["medium", "large", "xlarge", "sportman", "calzon"];

export default function Menu() {
  return (
    <section id="menu" className="bg-paper py-24">
      <div className="container-x">
        <SectionHead
          kicker="La carta"
          title={
            <>
              Nuestro <b>Menú</b>
            </>
          }
          description="Pizzas y calzones en cinco tamaños, además de pastas, sandwiches, postres y más — todo recién hecho en casa."
        />

        <MenuPaper />
        <MenuExtras />
      </div>
    </section>
  );
}

function MenuPaper() {
  return (
    <div
      className="bg-cream py-14 px-6 md:px-14 border border-ink-2/15 relative"
      style={{
        boxShadow:
          "0 0 0 8px var(--color-paper), 0 0 0 9px var(--color-red-dark), 0 30px 60px -20px rgba(43,24,16,0.3)",
      }}
    >
      <span
        className="hidden md:block absolute top-[18px] left-[30px] text-[28px] text-red"
        aria-hidden
      >
        ❦
      </span>
      <span
        className="hidden md:block absolute top-[18px] right-[30px] text-[28px] text-red"
        aria-hidden
      >
        ❦
      </span>

      <header className="text-center mb-12 pb-8 border-b border-ink-2/20">
        <span className="font-script text-[#26371f] text-2xl block mb-1.5">
          ~ Pizzas y Calzones ~
        </span>
        <h3 className="font-display italic text-[clamp(36px,5vw,54px)] text-red-dark">
          Menú de la Casa
        </h3>
      </header>

      <PriceHeader />

      {PIZZAS.map((pizza) => (
        <PriceRow key={pizza.name} pizza={pizza} />
      ))}

      <p className="text-center mt-10 font-script text-2xl text-green-dark">
        ~ Todos nuestros ingredientes son 100% naturales ~
      </p>
    </div>
  );
}

function PriceHeader() {
  return (
    <div className="hidden md:grid grid-cols-[2fr_repeat(5,1fr)] gap-3.5 pb-3.5 mb-1.5 border-b-2 border-ink">
      <div className="font-condensed text-sm tracking-wider text-green-dark">
        Ingrediente
      </div>
      {SIZE_ORDER.map((size) => (
        <div
          key={size}
          className="font-condensed text-sm tracking-wider text-green-dark text-center"
        >
          {SIZE_LABELS[size].full}
        </div>
      ))}
    </div>
  );
}

function PriceRow({ pizza }: { pizza: (typeof PIZZAS)[number] }) {
  const featured = pizza.featured ?? false;

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-[2fr_repeat(5,1fr)] gap-x-3.5 gap-y-1.5 py-2.5 md:py-3.5 border-b border-dashed border-ink-2/20 items-baseline ${
        featured
          ? "px-3.5 py-4 md:py-4.5 rounded bg-[linear-gradient(90deg,transparent,rgba(201,169,97,0.18),transparent)]"
          : ""
      }`}
    >
      <div
        className={`col-span-2 md:col-span-1 font-display italic font-medium text-[20px] text-ink flex items-baseline gap-2.5 ${
          featured ? "text-red-dark font-semibold" : ""
        } border-b border-dashed border-ink-2/20 md:border-b-0 pb-1.5 md:pb-0 mb-1.5 md:mb-0`}
      >
        {featured && <span className="text-gold">★</span>}
        <span>{pizza.name}</span>
        <span
          className="hidden md:block flex-1 border-b border-dotted border-ink-2/30 mx-1.5 self-center"
          aria-hidden
        />
      </div>

      {SIZE_ORDER.map((size) => (
        <div
          key={size}
          className="font-display font-semibold text-[15px] md:text-[18px] text-red-dark md:text-center tabular-nums"
        >
          <span className="md:hidden font-body font-normal text-[11px] text-ink-2 uppercase tracking-wider mr-1.5">
            {SIZE_LABELS[size].short}
          </span>
          {pizza.prices[size]}
        </div>
      ))}
    </div>
  );
}
