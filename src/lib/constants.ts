export const site = {
  brand: "Impulsa",
  whatsappNumber: "521234567890", // TODO: reemplazar por el número real (formato internacional, sin +)
  email: "hola@impulsa.agency", // TODO: reemplazar por el correo real
  instagram: "https://instagram.com/impulsa.agency",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { id: "services", href: "#servicios" },
  { id: "process", href: "#proceso" },
  { id: "pricing", href: "#paquetes" },
  { id: "addOns", href: "#modulos" },
  { id: "faq", href: "#faq" },
] as const;

export const serviceCatalog = [
  {
    id: "community",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
    glow: "from-pink-400/50 to-rose-300/10",
  },
  {
    id: "web",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    glow: "from-purple-300/50 to-fuchsia-200/10",
  },
  {
    id: "ads",
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    glow: "from-rose-300/50 to-orange-200/10",
  },
  {
    id: "photography",
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    glow: "from-amber-200/50 to-pink-200/10",
  },
] as const;

export const processCatalog = [
  { id: "discovery", step: "01" },
  { id: "proposal", step: "02" },
  { id: "creation", step: "03" },
  { id: "launch", step: "04" },
] as const;

export const pricingCatalog = [
  {
    id: "presence",
    price: "600",
    customPrice: false,
    hasPeriod: true,
    featured: false,
  },
  {
    id: "entrepreneur",
    price: "1,500",
    customPrice: false,
    hasPeriod: true,
    featured: true,
  },
  {
    id: "ecommerce",
    price: null,
    customPrice: true,
    hasPeriod: false,
    featured: false,
  },
] as const;

export const addOnCatalog = [
  { id: "whatsapp", icon: "MessageCircle" },
  { id: "cart", icon: "ShoppingCart" },
  { id: "payments", icon: "CreditCard" },
  { id: "tracking", icon: "Truck" },
] as const;
