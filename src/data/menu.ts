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
