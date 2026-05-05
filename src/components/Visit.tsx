import SectionHead from "./SectionHead";
import { SITE, type Location } from "../data/site";

export default function Visit() {
  return (
    <section id="visita" className="bg-paper py-24 text-center">
      <div className="container-x">
        <SectionHead
          kicker="Te esperamos"
          title={
            <>
              Dos ubicaciones para <b>servirte</b>
            </>
          }
          description="Visítanos en cualquiera de nuestras dos pizzerías. Mismo sabor, mismo cuidado, misma familia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
          {SITE.locations.map((loc) => (
            <LocationCard key={loc.name} location={loc} />
          ))}
        </div>

        <HoursCard />
      </div>
    </section>
  );
}

function LocationCard({ location }: { location: Location }) {
  const { address, phone, mapsUrl, mapsEmbedUrl } = location;
  return (
    <article className="bg-cream border border-ink-2/15 p-7 sm:p-10 sm:px-7 relative text-left flex flex-col">
      <span
        className="absolute inset-2 border border-dashed border-ink-2/25 pointer-events-none"
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-red text-cream flex items-center justify-center text-xl shrink-0">
            📍
          </div>
          <h3 className="font-display italic text-[28px] text-ink leading-none">
            {location.name}
          </h3>
        </div>

        <address className="not-italic font-display text-[20px] text-ink-2 leading-snug mb-5 min-h-[5.25rem]">
          {address.street}
          {address.area && (
            <>
              <br />
              {address.area}
            </>
          )}
          <br />
          {address.city}, {address.state} {address.zip}
        </address>

        <div
          className="relative aspect-[16/10] overflow-hidden mb-5 bg-paper"
          style={{
            boxShadow:
              "0 0 0 1px var(--color-ink-2), 0 12px 30px -10px rgba(43,24,16,0.3)",
          }}
        >
          <iframe
            title={`Mapa de Martin's Pizza Palace en ${location.name}`}
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-dashed border-ink-2/20">
          <a
            href={phone.href}
            className="font-condensed tracking-widest text-[14px] text-red-dark hover:text-red flex items-center gap-2"
          >
            <span>📞</span>
            {phone.display}
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed tracking-widest text-[14px] text-green-dark hover:text-red flex items-center gap-2 ml-auto"
          >
            Cómo llegar
            <span>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function HoursCard() {
  return (
    <article className="bg-cream border border-ink-2/15 p-10 px-7 relative mt-7 max-w-[640px] mx-auto text-left">
      <span
        className="absolute inset-2 border border-dashed border-ink-2/25 pointer-events-none"
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full bg-green-dark text-cream flex items-center justify-center text-xl shrink-0">
            🕒
          </div>
          <h3 className="font-display italic text-[28px] text-ink leading-none">
            Horario
            <span className="block font-condensed not-italic text-[12px] tracking-[0.18em] text-ink-2/70 mt-1">
              MISMO HORARIO EN AMBAS UBICACIONES
            </span>
          </h3>
        </div>

        <ul className="space-y-2.5 font-display text-[19px]">
          {SITE.hours.schedule.map((row) => {
            const closed = "closed" in row && row.closed;
            return (
              <li
                key={row.days}
                className={`flex items-baseline gap-3 ${
                  closed ? "text-ink-2/55 italic" : "text-ink"
                }`}
              >
                <span className="font-semibold not-italic min-w-[110px]">
                  {row.days}
                </span>
                <span className="flex-1 border-b border-dotted border-ink-2/30 self-center" />
                <span className="whitespace-nowrap font-medium">{row.range}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
