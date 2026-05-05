import { PRIMARY_PHONE, SITE } from "../data/site";

export default function TopBar() {
  const cities = SITE.locations.map((l) => l.name).join(" · ");

  return (
    <div className="bg-green-dark text-paper text-[13px] py-2 tracking-wide">
      <div className="container-x flex flex-wrap items-center justify-between gap-2">
        <span>📍 {SITE.locations.length} ubicaciones · {cities}</span>
        <span>
          🍕 {SITE.hours.summary} ·{" "}
          <a
            href={PRIMARY_PHONE.href}
            className="hover:text-gold transition-colors"
          >
            <b>{PRIMARY_PHONE.display}</b>
          </a>
        </span>
      </div>
    </div>
  );
}
