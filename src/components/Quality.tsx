import SectionHead from "./SectionHead";

const FEATURES = [
  {
    icon: "🌿",
    title: "Ingredientes 100% Naturales",
    description: "Sin atajos. Solo lo mejor de la huerta y el campo.",
  },
  {
    icon: "🥖",
    title: "Masa Fresca a Diario",
    description: "Amasada cada mañana con la receta familiar de siempre.",
  },
  {
    icon: "🧀",
    title: "Queso 100% Mozzarella",
    description: "Auténtica, cremosa y siempre derretida a la perfección.",
  },
  {
    icon: "🔥",
    title: "Horneadas al Punto",
    description: "El horno tradicional sigue siendo nuestro mejor secreto.",
  },
];

export default function Quality() {
  return (
    <section
      id="calidad"
      className="bg-cream border-y border-ink-2/10 py-24"
    >
      <div className="container-x">
        <SectionHead
          kicker="Lo que nos distingue"
          title={
            <>
              Nuestra calidad y experiencia
              <b>Hacen la Diferencia</b>
            </>
          }
          description="En Martin's Pizza Palace creemos que una buena pizza nace del respeto por los ingredientes y por quien la disfruta. Por eso seguimos haciendo todo como el primer día."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="text-center px-5 py-7 group">
              <div
                className="w-[90px] h-[90px] mx-auto mb-5 rounded-full border-2 border-green-dark bg-paper flex items-center justify-center text-4xl relative transition-all duration-300 group-hover:bg-green-dark group-hover:text-paper"
                style={{ transitionTimingFunction: "ease" }}
              >
                <span
                  className="absolute -inset-2 border border-dashed border-green-dark rounded-full opacity-40 pointer-events-none"
                />
                <span className="block transition-transform duration-500 group-hover:-rotate-6">
                  {feat.icon}
                </span>
              </div>
              <h3 className="font-display text-[22px] font-semibold italic text-ink mb-1.5">
                {feat.title}
              </h3>
              <p className="text-sm text-ink-2 max-w-[220px] mx-auto">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
