export interface Location {
  /** Short identifier for this branch — shown as the card title */
  name: string;
  address: {
    street: string;
    area?: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: {
    display: string;
    href: string;
  };
  /** Google Maps URL for the "Cómo llegar" link */
  mapsUrl: string;
  /** Embed URL for the inline iframe map */
  mapsEmbedUrl: string;
}

export const SITE = {
  name: "Martin's Pizza Palace",
  shortName: "Martin's",
  established: "1993",
  tagline: "Sabor familiar desde 1993",

  hours: {
    summary: "Mar – Dom · Lunes cerrado",
    schedule: [
      { days: "Lunes", range: "Cerrado", closed: true },
      { days: "Mar – Jue", range: "11:00 AM – 8:00 PM" },
      { days: "Vie – Sáb", range: "11:00 AM – 9:00 PM" },
      { days: "Domingo", range: "11:00 AM – 8:00 PM" },
    ],
  },

  locations: [
    {
      name: "Toa Baja",
      address: {
        street: "Carr. 2",
        area: "Candelaria",
        city: "Toa Baja",
        state: "PR",
        zip: "00949",
      },
      phone: {
        display: "(787) 251-1733",
        href: "tel:7872511733",
      },
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Martin%27s+Pizza+Palace+Carr.+2+Candelaria+Toa+Baja+PR+00949",
      mapsEmbedUrl:
        "https://www.google.com/maps?q=Martin%27s+Pizza+Palace+Carr.+2+Candelaria+Toa+Baja+PR+00949&output=embed",
    },
    {
      name: "Vega Alta",
      address: {
        street: "Calle Marginal H-36",
        city: "Vega Alta",
        state: "PR",
        zip: "00692",
      },
      phone: {
        display: "(787) 883-3101",
        href: "tel:+17878833101",
      },
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Martin%27s+Pizza+Palace+Calle+Marginal+H-36+Vega+Alta+PR+00692",
      mapsEmbedUrl:
        "https://www.google.com/maps?q=Martin%27s+Pizza+Palace+Calle+Marginal+H-36+Vega+Alta+PR+00692&output=embed",
    },
  ] satisfies readonly Location[],
} as const;

/** Convenience: the primary phone shown in nav/CTA. Both share for now. */
export const PRIMARY_PHONE = SITE.locations[0].phone;

export const NAV_LINKS = [
  { href: "#calidad", label: "Calidad" },
  { href: "#menu", label: "Menú" },
  { href: "#tradicion", label: "Tradición" },
  { href: "#visita", label: "Ubicaciones" },
] as const;
