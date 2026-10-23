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
  projects: {
    title: string;
    linkLabel: string;
    technologiesLabel: string;
    items: readonly {
      name: string;
      category: string;
      description: string;
      technologies: readonly string[];
      url?: string;
    }[];
  };
  services: {
    title: string;
    description: string;
    items: readonly {
      name: string;
      description: string;
    }[];
  };
  workProcess: {
    title: string;
    steps: readonly {
      title: string;
      description: string;
    }[];
  };
  contactSection: {
    title: string;
    description: string;
  };
  footer: {
    description: string;
    navigationLabel: string;
    profilesLabel: string;
    linkedInLabel: string;
    githubLabel: string;
    copyrightNotice: string;
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
    linkedin: string;
  };
  contact: {
    linkedin: string;
    github: string;
    whatsappNumber: string;
    whatsappMessage: string;
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
  projects: {
    title: "Proyectos que demuestran mi trabajo",
    linkLabel: "Ver proyecto",
    technologiesLabel: "Tecnologías utilizadas",
    items: [
      {
        name: "Amsonia Studio",
        category: "Sitio web comercial",
        description:
          "Desarrollo de un sitio web para una marca de productos digitales, con enfoque en diseño responsive, experiencia de usuario y presentación comercial.",
        technologies: ["Next.js", "React", "TypeScript"],
        url: "https://amsoniastudio.com/",
      },
      {
        name: "Developer Tools Suite",
        category: "Aplicación web",
        description:
          "Desarrollo de una plataforma de herramientas digitales orientadas a desarrolladores, utilizando componentes reutilizables e interfaces interactivas.",
        technologies: ["React", "TypeScript"],
      },
      {
        name: "Farmacia San Pablo",
        category: "Experiencia profesional en e-commerce",
        description:
          "Participación como desarrollador Frontend Senior dentro de un equipo en el desarrollo, mantenimiento y evolución de una plataforma empresarial de comercio electrónico.",
        technologies: ["Angular", "TypeScript", "Integraciones"],
        url: "https://www.farmaciasanpablo.com.mx/",
      },
    ],
  },
  services: {
    title: "¿En qué puedo ayudarte?",
    description:
      "Puedo colaborar contigo en el desarrollo, mejora y mantenimiento de sitios web y aplicaciones, adaptándome a las necesidades de tu proyecto.",
    items: [
      {
        name: "Desarrollo Frontend",
        description:
          "Desarrollo y mejora de interfaces, componentes y funcionalidades con React, Angular, Next.js y TypeScript.",
      },
      {
        name: "Sitios web profesionales",
        description:
          "Desarrollo de sitios web para negocios y profesionales, adaptables a dispositivos móviles y preparados para producción.",
      },
      {
        name: "Aplicaciones e integraciones",
        description:
          "Implementación de funcionalidades Full Stack, APIs e integraciones utilizando Node.js, .NET, PostgreSQL y SQL Server.",
      },
      {
        name: "Soporte y mantenimiento",
        description:
          "Corrección de errores, mejoras de rendimiento, actualización de funcionalidades y mantenimiento de aplicaciones existentes.",
      },
    ],
  },
  workProcess: {
    title: "Un proceso claro y transparente.",
    steps: [
      {
        title: "Cuéntame sobre tu proyecto",
        description:
          "Conversamos sobre lo que necesitas, tus objetivos y el problema que quieres resolver.",
      },
      {
        title: "Definimos la solución",
        description:
          "Analizo los requerimientos y preparo una propuesta con alcance, entregables, tiempos estimados y presupuesto.",
      },
      {
        title: "Desarrollo y seguimiento",
        description:
          "Implemento la solución y comparto avances para validar que el proyecto cumpla con lo acordado.",
      },
      {
        title: "Entrega y acompañamiento",
        description:
          "Revisamos los resultados, realizo la entrega correspondiente y podemos acordar soporte o mantenimiento posterior.",
      },
    ],
  },
  contactSection: {
    title: "¿Tienes un proyecto en mente?",
    description:
      "Cuéntame qué necesitas desarrollar, mejorar o resolver. Podemos conversar sobre tu idea y revisar cómo puedo ayudarte.",
  },
  footer: {
    description: "Desarrollador Frontend con experiencia Full Stack.",
    navigationLabel: "Navegación del sitio",
    profilesLabel: "Perfiles profesionales",
    linkedInLabel: "LinkedIn",
    githubLabel: "GitHub",
    copyrightNotice: "Todos los derechos reservados.",
  },
  navigation: [
    { id: "home", label: "Inicio", href: "/" },
    { id: "experience", label: "Experiencia", href: "#experiencia" },
    { id: "projects", label: "Proyectos", href: "#proyectos" },
    { id: "services", label: "Servicios", href: "#servicios" },
    { id: "process", label: "Cómo trabajo", href: "#como-trabajo" },
    { id: "contact", label: "Contacto", href: "#contacto" },
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
    whatsapp: "Hablemos por WhatsApp",
    linkedin: "Ver perfil profesional",
  },
  contact: {
    linkedin: "https://linkedin.com/in/carlos-pablo-dev",
    github: "https://github.com/carlospablob",
    whatsappNumber: "5544332211",
    whatsappMessage: "Hola, vi tu portafolio y me gustaría platicar sobre un proyecto.",
    email: "carlospablo.b@gmail.com",
  },
} as const satisfies SiteConfig;
