export type SiteConfig = {
  name: string;
  monogram: string;
  role: string;
  headline: string;
  description: string;
  technologies: readonly string[];
  navigation: readonly {
    id: string;
    label: string;
    href: string;
  }[];
  header: {
    desktopNavigationLabel: string;
    mobileNavigationLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  actions: {
    viewProjects: string;
    contact: string;
    downloadResume: string;
    whatsapp: string;
  };
  contact: {
    linkedin: string;
    github: string;
    whatsapp: string;
    email: string;
  };
};

export const siteConfig = {
  name: "Carlos Pablo Bautista",
  monogram: "CPB",
  role: "Senior Frontend Developer · Full Stack Development",
  headline:
    "Desarrollo sitios web y aplicaciones que resuelven necesidades reales de negocio.",
  description:
    "Desarrollador de software especializado en crear experiencias web claras, accesibles y mantenibles, con una visión integral del producto y sus objetivos de negocio.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Angular",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Sequelize",
  ],
  navigation: [
    { id: "home", label: "Inicio", href: "/" },
    { id: "experience", label: "Experiencia", href: "" },
    { id: "projects", label: "Proyectos", href: "" },
    { id: "services", label: "Servicios", href: "" },
    { id: "process", label: "Cómo trabajo", href: "" },
    { id: "contact", label: "Contacto", href: "" },
  ],
  header: {
    desktopNavigationLabel: "Navegación principal",
    mobileNavigationLabel: "Navegación móvil",
    openMenuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
  },
  actions: {
    viewProjects: "Ver proyectos",
    contact: "Contactarme",
    downloadResume: "Descargar CV",
    whatsapp: "Contactar por WhatsApp",
  },
  contact: {
    linkedin: "",
    github: "",
    whatsapp: "",
    email: "",
  },
} as const satisfies SiteConfig;
