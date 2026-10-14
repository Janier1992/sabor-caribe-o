// Datos editables del negocio. Dejar vacío todo lo que no esté confirmado:
// la página oculta o desactiva automáticamente lo que falte.
export const siteConfig = {
  name: "Restaurante Sabor Caribeño",
  city: "Medellín, Antioquia, Colombia",
  // PENDIENTE: la fachada muestra 322 685 7468 y otro número parcialmente legible.
  // Completar solo tras verificar. Formato: 57 + número, sin "+", espacios ni guiones.
  whatsappNumber: "", // ej. "573001234567"
  mapsUrl: "", // enlace oficial de Google Maps
  address: "",
  openingHours: "",
  instagramUrl: "",
  facebookUrl: "",
  whatsappGreeting: "Hola, quiero consultar el menú de Restaurante Sabor Caribeño",
};

export const whatsappLink = (message: string): string | null => {
  const n = siteConfig.whatsappNumber.replace(/\D/g, "");
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(message)}` : null;
};
