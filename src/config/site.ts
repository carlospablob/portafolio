export type SiteConfig = {
  name: string;
  role: string;
  headline: string;
  description: string;
  technologies: readonly string[];
  navigation: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  actions: {
    viewProjects: string;
    contact: string;
    downloadResume: string;
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
  navigation: {
    home: "Inicio",
    about: "Sobre mí",
    services: "Servicios",
    projects: "Proyectos",
    contact: "Contacto",
  },
  actions: {
    viewProjects: "Ver proyectos",
    contact: "Contactarme",
    downloadResume: "Descargar CV",
  },
  contact: {
    linkedin: "",
    github: "",
    whatsapp: "",
    email: "",
  },
} as const satisfies SiteConfig;
