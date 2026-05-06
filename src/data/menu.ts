          export type PizzaSize = "medium" | "large" | "xlarge" | "sportman" | "calzon";

export interface Pizza {
  name: string;
  featured?: boolean;
  prices: Record<PizzaSize, string>;
}

export const SIZE_LABELS: Record<PizzaSize, { full: string; short: string }> = {
  medium: { full: 'Medium 6"', short: "Med" },
  large: { full: 'Large 8"', short: "Lg" },
  xlarge: { full: 'X-Large 10"', short: "XL" },
  sportman: { full: 'Sportman 12"', short: "Sp" },
  calzon: { full: "Calzones", short: "Cz" },
};

export const PIZZAS: Pizza[] = [
  {
    name: "Queso",
    prices: {
      medium: "$13.95",
      large: "$16.95",
      xlarge: "$19.95",
      sportman: "$22.95",
      calzon: "$10.75",
    },
  },
  {
    name: "Chorizo",
    prices: {
      medium: "$14.95",
      large: "$17.95",
      xlarge: "$19.95",
      sportman: "$23.95",
      calzon: "$10.75",
    },
  },
  {
    name: "Jamón",
    prices: {
      medium: "$14.95",
      large: "$17.95",
      xlarge: "$19.95",
      sportman: "$23.95",
      calzon: "$10.75",
    },
  },
  {
    name: "Pepperoni",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Bacon",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Carne Molida",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Pollo",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Salchicha Italiana",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Todas las Carnes",
    featured: true,
    prices: {
      medium: "$21.95",
      large: "$24.95",
      xlarge: "$26.95",
      sportman: "$30.95",
      calzon: "$12.95",
    },
  },
  {
    name: "Camarones",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$26.50",
      calzon: "$11.95",
    },
  },
  {
    name: "Setas",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Anchoas",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Brócoli",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Piña",
    prices: {
      medium: "$15.95",
      large: "$19.95",
      xlarge: "$21.95",
      sportman: "$25.50",
      calzon: "$10.75",
    },
  },
  {
    name: "Pimientos",
    prices: {
      medium: "$14.95",
      large: "$17.95",
      xlarge: "$19.95",
      sportman: "$23.95",
      calzon: "$10.75",
    },
  },
  {
    name: "Cebollas",
    prices: {
      medium: "$14.95",
      large: "$17.95",
      xlarge: "$19.95",
      sportman: "$23.95",
      calzon: "$10.75",
    },
  },
  {
    name: "Hawaiana",
    prices: {
      medium: "$16.95",
      large: "$20.95",
      xlarge: "$22.95",
      sportman: "$26.50",
      calzon: "$11.50",
    },
  },
  {
    name: "Vegetales",
    prices: {
      medium: "$20.95",
      large: "$22.95",
      xlarge: "$24.95",
      sportman: "$28.95",
      calzon: "$11.75",
    },
  },
  {
    name: "Combinación",
    featured: true,
    prices: {
      medium: "$20.95",
      large: "$22.95",
      xlarge: "$24.95",
      sportman: "$28.95",
      calzon: "$11.75",
    },
  },
  {
    name: "Dos Ingredientes",
    prices: {
      medium: "$16.95",
      large: "$20.95",
      xlarge: "$22.95",
      sportman: "$26.50",
      calzon: "$11.50",
    },
  },
];

export interface MenuItem {
  name: string;
  /** Precio mostrado tal cual (ej. "$12.50"). Omitir si la categoría no lo lista. */
  price?: string;
  /** Aclaración corta junto al nombre (ej. "Honey BBQ"). */
  note?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  /** Mostrado al pie cuando los items no traen precio. */
  priceNote?: string;
}

const ASK_IN_STORE = "Consulta precios en el local";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "aperitivos",
    title: "Aperitivos",
    priceNote: ASK_IN_STORE,
    items: [
      { name: "Mozarella Sticks" },
      { name: "Alitas de Pollo", note: "Honey BBQ" },
      { name: "Pan con Ajo" },
      { name: "Palitroques con Queso" },
      { name: "Albóndigas en Salsa" },
      { name: "Pan con Queso" },
    ],
  },
  {
    id: "pastas",
    title: "Pastas",
    items: [
      { name: "Spaguetti o Penne con Albóndigas", price: "$12.50" },
      { name: "Spaguetti o Penne en Combinación", price: "$13.95" },
      { name: "Spaguetti o Penne con Camarones", price: "$13.95" },
      { name: "Spaguetti o Penne Alfredo Albóndigas", price: "$13.50" },
      { name: "Spaguetti o Penne Alfredo Pollo", price: "$13.95" },
      { name: "Spaguetti o Penne Alfredo Camarones", price: "$14.50" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      { name: "Meatball", price: "$10.75" },
      { name: "Choripán", price: "$10.75" },
      { name: "Pollo", price: "$10.75" },
    ],
  },
  {
    id: "lasanas",
    title: "Lasañas",
    items: [
      { name: "Lasagna de Pollo", price: "$11.75" },
      { name: "Lasagna de Carne", price: "$11.75" },
      { name: "Lasagna Carne", note: "Combinación", price: "$13.95" },
      { name: "Lasagna Pollo", note: "Combinación", price: "$13.95" },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    priceNote: ASK_IN_STORE,
    items: [
      { name: "Flan de Vainilla o Queso" },
      { name: "Cheesecake" },
      { name: "Brownie" },
      { name: "Choco Martin's" },
      { name: "Tres Leches" },
      { name: "Mantecados", note: "8 sabores distintos" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    priceNote: ASK_IN_STORE,
    items: [
      { name: "Refrescos" },
      { name: "Piña Colada" },
      { name: "Batidas" },
      { name: "Jugos" },
      { name: "Frappé" },
      { name: "Blackouts" },
      { name: "Cervezas" },
      { name: "Tragos" },
      { name: "Vinos" },
    ],
  },
];
