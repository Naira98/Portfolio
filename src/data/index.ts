export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
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
          id: 1,
          name: "TypeScript",
          image: "typescript",
        },
        {
          id: 2,
          name: "Next.js",
          image: "next",
        },
        {
          id: 3,
          name: "Tailwind CSS",
          image: "tailwind",
        },
        {
          id: 4,
          name: "OAuth",
          image: "authjs",
        },
        {
          id: 5,
          name: "Supabase",
          image: "supabase",
        },
      ],
    ],
    image: "thewildoasiscustomerfacing",
    video: "thewildoasiscustomerfacing",
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
          id: 1,
          name: "TypeScript",
          image: "typescript",
        },
        {
          id: 2,
          name: "React",
          image: "react",
        },
        {
          id: 3,
          name: "Styled Components",
          image: "styledcomponents",
        },
        {
          id: 4,
          name: "Supabase",
          image: "supabase",
        },
        {
          id: 5,
          name: "React Router",
          image: "reactrouter",
        },
        {
          id: 6,
          name: "React Query",
          image: "reactquery",
        },
      ],
    ],
    image: "thewildoasishotelemployee",
    video: "thewildoasishotelemployee",
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
          id: 1,
          name: "TypeScript",
          image: "typescript",
        },
        {
          id: 2,
          name: "React",
          image: "react",
        },
        {
          id: 3,
          name: "React Query",
          image: "reactquery",
        },
        {
          id: 4,
          name: "React Router",
          image: "reactrouter",
        },
      ],
      [
        {
          id: 5,
          name: "Node.js",
          image: "node",
        },
        {
          id: 6,
          name: "Express",
          image: "express",
        },
        {
          id: 7,
          name: "MongoDB",
          image: "mongodb",
        },
        {
          id: 8,
          name: "JWT",
          image: "jwt",
        },
      ],
      [
        {
          id: 9,
          name: "Joi",
          image: "joiwhite",
        },
        {
          id: 10,
          name: "Jest",
          image: "jest",
        },
        {
          id: 11,
          name: "Docker",
          image: "docker",
        },
        {
          id: 12,
          name: "Docker compose",
          image: "dockercompose",
        },
      ],
    ],
    image: "socialmedia",
    video: "socialmedia",
    github: "https://github.com/Naira98/SocialMedia",
    website: "http://158.101.255.206/",
  },
  {
    id: 3,
    title: "E-commerce",
    des: "Full stack online shop with an admin panel for sellers to showcase their products and a storefront for clients to browse and purchase products.",
    iconLists: [
      [
        {
          id: 1,
          name: "Node.js",
          image: "node",
        },
        {
          id: 2,
          name: "Express",
          image: "express",
        },
        {
          id: 3,
          name: "MongoDB",
          image: "mongodb",
        },
        {
          id: 4,
          name: "Express Validator",
          image: "expressvalidator",
        },
        {
          id: 5,
          name: ".ejs",
          image: "ejs",
        },
        {
          id: 6,
          name: "Stripe",
          image: "stripe",
        },
      ],
    ],
    image: "ecommerce",
    video: "ecommerce",
    github: "https://github.com/Naira98/E-commerce",
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
