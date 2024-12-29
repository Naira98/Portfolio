import { ExperiencesType } from "./types";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Skills", link: "#skills" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 0,
    title: "The World Oasis “Customer Facing”",
    des: "Airbnb clone. Customer facing website to discover cabins with an intuitive calendar that displays available dates allowing guests to book their stay.",
    iconLists: [
      [
        {
          name: "TypeScript",
          image: "typescript",
        },
        {
          name: "Next.js",
          image: "next",
        },
        {
          name: "Tailwind CSS",
          image: "tailwind",
        },
        {
          name: "OAuth",
          image: "authjs",
        },
        {
          name: "Supabase",
          image: "supabase",
        },
      ],
    ],
    image: "thewildoasiscustomerfacing",
    video: "thewildoasiscustomerfacing",
    logo: "thewildoasiscustomerfacing",
    github: "https://github.com/Naira98/TheWildOasis-CustomerFacing",
    website: "https://the-wild-oasis-website-plum-pi.vercel.app/",
  },
  {
    id: 1,
    title: "The World Oasis “Employee Dashboard”",
    des: "The hotel's internal website offers a dashboard where staff monitor hotel statistics, track bookings, manage check-ins and check-outs with ease.",
    iconLists: [
      [
        {
          name: "TypeScript",
          image: "typescript",
        },
        {
          name: "React",
          image: "react",
        },
        {
          name: "Styled Components",
          image: "styledcomponents",
        },
        {
          name: "Supabase",
          image: "supabase",
        },
        {
          name: "React Router",
          image: "reactrouter",
        },
        {
          name: "React Query",
          image: "reactquery",
        },
      ],
    ],
    image: "thewildoasisemployeedashboard",
    video: "thewildoasisemployeedashboard",
    logo: "thewildoasisemployeedashboard",
    github: "https://github.com/Naira98/TheWildOasis-EmployeeDashboard",
    website: "https://the-world-oasis-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "Social Media",
    des: "Full stack online platform allows users to create, share content and  connect with friends. With support of dark mode and responsive design.",
    iconLists: [
      [
        {
          name: "TypeScript",
          image: "typescript",
        },
        {
          name: "React",
          image: "react",
        },
        {
          name: "React Query",
          image: "reactquery",
        },
        {
          name: "React Router",
          image: "reactrouter",
        },
      ],
      [
        {
          name: "Node.js",
          image: "node",
        },
        {
          name: "Express",
          image: "express",
        },
        {
          name: "MongoDB",
          image: "mongodb",
        },
        {
          name: "JWT",
          image: "jwt",
        },
      ],
      [
        {
          name: "Joi",
          image: "joiwhite",
        },
        {
          name: "Jest",
          image: "jest",
        },
        {
          name: "Docker",
          image: "docker",
        },
        {
          name: "Docker Compose",
          image: "dockercompose",
        },
      ],
    ],
    image: "socialmedia",
    video: "socialmedia",
    logo: "socialmedia",
    github: "https://github.com/Naira98/SocialMedia",
    website: "http://158.101.255.206/",
  },
  {
    id: 3,
    title: "World Wise",
    des: "Full stack website to keep track of your adventures that combines interactive mapping technology with user-driven reviews of his visits to any country.",
    iconLists: [
      [
        {
          name: "Node.js",
          image: "node",
        },
        {
          name: "Express",
          image: "express",
        },
        {
          name: "MongoDB",
          image: "mongodb",
        },
        {
          name: "JWT",
          image: "jwt",
        },
        {
          name: "React",
          image: "react",
        },
        {
          name: "CSS Modules",
          image: "cssmodules",
        },
        {
          name: "React Router",
          image: "reactrouter",
        },
        {
          name: "React Leaflet",
          image: "reactleaflet",
        },
      ],
    ],
    image: "worldwise",
    video: "worldwise",
    logo: "worldwise",
    github: "https://github.com/Naira98/worldWise",
  },
] as const;

export const moreProjects = [
  {
    id: 4,
    title: "Fast React Pizza",
    des: "Pizza restaurant storefront with streamlined online ordering experience, priority management and tracking orders.",
    iconLists: [
      [
        {
          name: "React",
          image: "react",
        },
        {
          name: "Redux",
          image: "redux",
        },
        {
          name: "Tailwind CSS",
          image: "tailwind",
        },

        {
          name: "React Router",
          image: "reactrouter",
        },
      ],
    ],
    image: "fastreactpizza",
    video: "fastreactpizza",
    logo: "fastreactpizza",
    website: "https://fast-react-pizza-web.vercel.app/",
    github: "https://github.com/Naira98/FastReactPizza",
  },
  {
    id: 5,
    title: "Bosta",
    des: "A responsive bilingual (Arabic and English) order tracking interface, enabling users to track shipments effortlessly. The design focuses on accessibility, usability, and seamless functionality across all screen sizes.",
    iconLists: [
      [
        {
          name: "TypeScript",
          image: "typescript",
        },
        {
          name: "React",
          image: "react",
        },
        {
          name: "React Query",
          image: "reactquery",
        },
        {
          name: "Tailwind CSS",
          image: "tailwind",
        },

        {
          name: "React Router",
          image: "reactrouter",
        },
        {
          name: "React-i18next",
          image: "i18n",
        },
      ],
    ],
    image: "bosta",
    video: "bosta",
    logo: "bosta",
    github: "https://github.com/Naira98/Bosta",
  },
  {
    id: 6,
    title: "E-commerce",
    des: "Full stack online shop with an admin panel for sellers to showcase their products and a storefront for clients to browse and purchase products.",
    iconLists: [
      [
        {
          name: "Node.js",
          image: "node",
        },
        {
          name: "Express",
          image: "express",
        },
        {
          name: "MongoDB",
          image: "mongodb",
        },
        {
          name: "Express Validator",
          image: "expressvalidator",
        },
        {
          name: ".ejs",
          image: "ejs",
        },
        {
          name: "Stripe",
          image: "stripe",
        },
      ],
    ],
    image: "ecommerce",
    video: "ecommerce",
    logo: "ecommerce",
    github: "https://github.com/Naira98/E-commerce",
  },
  {
    id: 7,
    title: "BattleShip Game",
    des: "Simulation of the classic board game with added digital convenience with some features as sound effects that enhance the tactical experience.",
    iconLists: [
      [
        {
          name: "HTML",
          image: "html",
        },
        {
          name: "CSS",
          image: "css",
        },
        {
          name: "JavaScript",
          image: "javascript",
        },
        {
          name: "Node.js",
          image: "node",
        },
        {
          name: "Express",
          image: "express",
        },
      ],
    ],
    image: "battleship",
    logo: "battleship",
    website: "https://battle-ship-game-phi.vercel.app/",
    github: "https://github.com/Naira98/BattleShip",
  },
] as const;

export const experiences: ExperiencesType = [
  {
    title: "Full Stack Developer",
    company: "Blucell",
    startDate: new Date("May 2024"),
    endDate: null,
    employmentType: "Full Time",
    location: "Dubai",
    locationType: "Remote",
    description: [
      "Specializing in developing outsource projects for clients across various industries.",
      "Tech used: Node.js, Express, MongoDB, React, and Next.js.",
    ],
  },
] as const;

export const skills = [
  { name: "TypeScript", img: "typescript" },

  { name: "Next.js", img: "next" },
  { name: "React.js", img: "react" },
  { name: "Redux", img: "redux" },
  { name: "React Query", img: "reactquery" },
  { name: "Tailwind CSS", img: "tailwind" },

  { name: "Node.js", img: "node" },
  { name: "Express", img: "express" },
  { name: "MongoDB", img: "mongodbtransparent" },
  { name: "PostgreSQL", img: "postgresql" },
  { name: "Redis", img: "redis" },
  { name: "JWT", img: "jwt" },

  { name: "HTML", img: "html" },
  { name: "CSS", img: "css" },

  { name: "Frmer Motion", img: "framermotion" },
  { name: "Figma", img: "figma" },
  { name: "Git", img: "git" },

  { name: "Docker", img: "docker" },
  { name: "Zod", img: "zod" },
  { name: "Joi", img: "joitransparent" },
  { name: "Jest.js", img: "jest" },
  { name: "Formik", img: "formik" },
] as const;

export const socialMedia = [
  {
    name: "github",
    img: "github",
    link: "https://www.github.com/Naira98",
  },
  {
    name: "linkedin",
    img: "linkedin",
    link: "https://www.linkedin.com/in/nairamm",
  },
  {
    name: "gmail",
    img: "gmail",
    link: "mailto:nairamm99@gmail.com",
  },
  {
    name: "whatsapp",
    img: "whatsapp",
    link: "https://wa.me/201012470323",
  },
] as const;
