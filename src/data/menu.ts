export type Art = "res" | "cerdo" | "pollo" | "pescado" | "trucha" | "sancocho";

export interface Dish {
  id: string;
  name: string;
  price: number; // COP
  category: "Carnes" | "Mar" | "Sopas";
  art: Art;
  // Cuando haya foto real: colocar en src/assets/dishes/ e importarla aquí.
  photo?: string;
  confirmPrice?: boolean;
}

// Transcripción visual preliminar de la captura (recortada). No agregar platos sin confirmar.
export const menu: Dish[] = [
  { id: "cerdo", name: "Cerdo", price: 15000, category: "Carnes", art: "cerdo" },
  { id: "pollo", name: "Pollo a la plancha", price: 15000, category: "Carnes", art: "pollo" },
  { id: "res", name: "Res", price: 15000, category: "Carnes", art: "res" },
  { id: "bocachico", name: "Bocachico", price: 25000, category: "Mar", art: "pescado" },
  { id: "robalo", name: "Filete de róbalo", price: 16000, category: "Mar", art: "pescado" },
  { id: "trucha", name: "Trucha", price: 20000, category: "Mar", art: "trucha" },
  { id: "sancocho", name: "Sancocho", price: 25000, category: "Sopas", art: "sancocho", confirmPrice: true },
];

export const cop = (n: number) => `$ ${n.toLocaleString("es-CO")}`;
