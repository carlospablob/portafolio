export type SiteConfig = {
  name: string;
  monogram: string;
  role: string;
  headline: string;
  description: string;
  technologies: readonly string[];
  hero: {
    technologiesLabel: string;
  };
  experience: {
    title: string;
    description: string;
    capabilities: readonly string[];
    positions: readonly {
      company: string;
      role: string;
      period: string;
      description: string;
    }[];
    linkedInLabel: string;
  };
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
    "Soy desarrollador especializado en Frontend con experiencia Full Stack. Desarrollo, mejoro y mantengo sitios web y aplicaciones utilizando React, Angular, Next.js, Node.js, .NET y bases de datos.",
  technologies: [
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "Node.js",
    ".NET",
    "PostgreSQL",
    "SQL Server",
  ],
  hero: {
    technologiesLabel: "Tecnologías principales",
  },
  experience: {
    title: "Experiencia que se convierte en resultados.",
    description:
      "Soy desarrollador especializado en Frontend, con experiencia en aplicaciones empresariales, comercio electrónico e integraciones. Combino conocimientos de interfaces modernas con capacidades Full Stack para construir soluciones mantenibles y centradas en el usuario.",
    capabilities: [
      "Desarrollo de aplicaciones empresariales y e-commerce.",
      "Optimización de rendimiento.",
      "Desarrollo e integraciones Full Stack.",
    ],
    positions: [
      {
        company: "Bunsan",
        role: "Full Stack Developer",
        period: "Abril 2026 – Actualidad",
        description:
          "Experiencia en desarrollo de aplicaciones web con alcance Full Stack.",
      },
      {
        company: "Farmacia San Pablo",
        role: "Frontend Sr Developer",
        period: "Abril 2021 – Marzo 2026",
        description:
          "Experiencia en desarrollo Frontend senior de sitios web y aplicaciones.",
      },
      {
        company: "Palo IT",
        role: "Frontend Sr Developer",
        period: "Agosto 2020 – Abril 2021",
        description:
          "Experiencia en desarrollo Frontend senior de aplicaciones web.",
      },
    ],
    linkedInLabel: "Ver perfil en LinkedIn",
  },
  navigation: [
    { id: "home", label: "Inicio", href: "/" },
    { id: "experience", label: "Experiencia", href: "#experiencia" },
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
    contact: "Cuéntame sobre tu proyecto",
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
