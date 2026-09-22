export const site = {
  brand: "Impulsa",
  tagline: "Marketing digital para emprendedores",
  whatsappNumber: "521234567890", // TODO: reemplazar por el número real (formato internacional, sin +)
  email: "hola@impulsa.agency", // TODO: reemplazar por el correo real
  instagram: "https://instagram.com/impulsa.agency",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Módulos extra", href: "#modulos" },
  { label: "Preguntas", href: "#faq" },
];

export const services = [
  {
    icon: "Users",
    title: "Community Management",
    description:
      "Gestionamos tus redes sociales de principio a fin: calendario de contenido, diseño de piezas, copywriting y respuesta a tu comunidad.",
    points: ["Instagram, Facebook y TikTok", "Calendario de contenido mensual", "Diseño de piezas gráficas"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
    glow: "from-pink-400/50 to-rose-300/10",
  },
  {
    icon: "Globe",
    title: "Diseño & Desarrollo Web",
    description:
      "Creamos tu página web a medida, rápida, moderna y responsive, lista para convertir visitas en clientes.",
    points: ["Diseño 100% personalizado", "Optimizada para celular", "Módulos opcionales a medida"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    glow: "from-purple-300/50 to-fuchsia-200/10",
  },
  {
    icon: "TrendingUp",
    title: "Publicidad en Meta",
    description:
      "Configuramos y optimizamos campañas en Instagram y Facebook Ads pensadas para maximizar tus ventas.",
    points: ["Configuración de Meta Business", "Segmentación de audiencia", "Optimización continua"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    glow: "from-rose-300/50 to-orange-200/10",
  },
  {
    icon: "Camera",
    title: "Fotografía de Producto",
    description:
      "Sesiones fotográficas profesionales para que tu catálogo y tus redes luzcan al nivel de tu marca.",
    points: ["Sesión en estudio o locación", "Edición profesional", "Contenido listo para redes"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    glow: "from-amber-200/50 to-pink-200/10",
  },
];

export const process = [
  {
    step: "01",
    title: "Diagnóstico gratuito",
    description: "Conversamos sobre tu negocio, tu público y tus objetivos para entender qué necesitas realmente.",
  },
  {
    step: "02",
    title: "Propuesta a medida",
    description: "Armamos un paquete ajustado a tu presupuesto y a las metas de tu emprendimiento.",
  },
  {
    step: "03",
    title: "Diseño y desarrollo",
    description: "Construimos tu web y tu identidad digital mientras arrancamos la estrategia en redes.",
  },
  {
    step: "04",
    title: "Lanzamiento y crecimiento",
    description: "Publicamos, medimos resultados y optimizamos campañas para que tu negocio siga creciendo.",
  },
];

export const pricingPlans = [
  {
    name: "Presencia Digital",
    price: "600",
    period: "proyecto",
    description: "Ideal para arrancar tu presencia online con una base sólida.",
    featured: false,
    features: [
      "Landing page a medida (1 página)",
      "Diseño responsive",
      "Configuración inicial de redes sociales",
      "Botón directo a WhatsApp",
      "Hosting y dominio orientado (1 año)",
    ],
    cta: "Quiero este paquete",
  },
  {
    name: "Paquete Emprendedor",
    price: "1,500",
    period: "proyecto",
    description: "El combo completo para lanzar y hacer crecer tu marca en digital.",
    featured: true,
    features: [
      "Community management mensual",
      "Página web completa a medida",
      "Configuración de campañas en Meta Ads",
      "Sesión de fotografía de producto",
      "Botón directo a WhatsApp",
      "Reportes mensuales de resultados",
    ],
    cta: "Quiero este paquete",
  },
  {
    name: "E-commerce Pro",
    price: "Personalizado",
    period: "",
    description: "Todo lo del paquete Emprendedor, potenciado con ventas en línea.",
    featured: false,
    features: [
      "Todo lo del Paquete Emprendedor",
      "Carrito de compras integrado",
      "Pasarela de pagos en la web",
      "Notificación de ventas por email",
      "Seguimiento de pedidos con código",
      "Soporte prioritario",
    ],
    cta: "Cotizar mi proyecto",
  },
];

export const addOns = [
  {
    icon: "MessageCircle",
    title: "Módulo de WhatsApp",
    description: "Botón flotante que lleva a tus clientes directo al WhatsApp de tu negocio.",
  },
  {
    icon: "ShoppingCart",
    title: "Carrito de compras",
    description: "Catálogo de productos con carrito para que el cliente arme su pedido y lo envíe por WhatsApp.",
  },
  {
    icon: "CreditCard",
    title: "Pasarela de pagos",
    description: "Cobra directo en tu web y recibe un email con los datos de cada compra al instante.",
  },
  {
    icon: "Truck",
    title: "Seguimiento de envíos",
    description: "Tus clientes rastrean su pedido con un código mientras vos actualizás el estado del envío.",
  },
];

export const faqs = [
  {
    question: "¿Cuánto tarda en estar lista mi página web?",
    answer:
      "Depende de la complejidad del proyecto, pero una landing page a medida suele estar lista entre 1 y 3 semanas desde que definimos el diseño.",
  },
  {
    question: "¿Puedo agregar módulos más adelante?",
    answer:
      "Sí. Podés empezar con un paquete y sumar carrito de compras, pagos o seguimiento de envíos cuando tu negocio lo necesite.",
  },
  {
    question: "¿Incluye hosting y dominio?",
    answer:
      "Te ayudamos a configurar el hosting y el dominio, orientándote en cada paso para que tu web quede publicada y funcionando.",
  },
  {
    question: "¿Cómo es el manejo de mis redes sociales?",
    answer:
      "Un community manager se encarga de planificar el contenido, diseñar las piezas y publicar según un calendario mensual acordado con vos.",
  },
  {
    question: "¿Qué pasa si mi negocio todavía no tiene identidad visual?",
    answer:
      "No hay problema, podemos ayudarte a definir una identidad simple (colores, tipografías, estilo) como parte del proceso de diseño.",
  },
];
