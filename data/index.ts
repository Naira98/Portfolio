import { ProjectType, SkillType } from "./types";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const projects: ProjectType[] = [
  {
    id: 0,
    title: "The World Oasis “Customer Facing”",
    des: "Airbnb clone. Customer facing website to discover cabins with an intuitive calendar that displays available dates allowing guests to book their stay.",
    iconLists: [
      {
        id: 1,
        name: "TypeScript",
        image: "typescript.svg",
      },
      {
        id: 2,
        name: "Next.js",
        image: "next.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        image: "tailwind.png",
      },
      {
        id: 4,
        name: "OAuth",
        image: "auth-js.png",
      },
      {
        id: 5,
        name: "Supabase",
        image: "supabase.svg",
      },
    ],
    img: "TheWildOasisCustomerFacing/image.png",
    video: "TheWildOasisCustomerFacing/TheWildOasisCustomerFacing.mp4",
    github: "https://github.com/Naira98/TheWildOasis-CustomerFacing",
    website: "https://the-wild-oasis-website-plum-pi.vercel.app/",
  },
  {
    id: 1,
    title: "The World Oasis “Employee Dashboard”",
    des: "The hotel's internal website offers a dashboard where staff monitor hotel statistics, track bookings, manage check-ins and check-outs with ease",
    iconLists: [
      {
        id: 1,
        name: "TypeScript",
        image: "typescript.svg",
      },
      {
        id: 2,
        name: "React",
        image: "react.webp",
      },
      {
        id: 3,
        name: "Styled Components",
        image: "styled-components.png",
      },
      {
        id: 4,
        name: "Supabase",
        image: "supabase.svg",
      },
      {
        id: 5,
        name: "React Router",
        image: "react-router.png",
      },
      {
        id: 6,
        name: "React Query",
        image: "react-query.png",
      },
    ],
    img: "TheWildOasisHotelEmployee/image.png",
    video: "TheWildOasisHotelEmployee/TheWildOasisHotelEmployee.mp4",
    github: "https://github.com/Naira98/TheWildOasis-EmployeeDashboard",
    website: "https://the-world-oasis-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "Social Media",
    des: "Full stack online platform allows users to create, share content and  connect with friends. With support of dark mode and responsive design.",
    iconLists: [
      {
        id: 1,
        name: "TypeScript",
        image: "typescript.svg",
      },
      {
        id: 2,
        name: "React",
        image: "react.webp",
      },
      {
        id: 3,
        name: "React Query",
        image: "react-query.png",
      },
      {
        id: 4,
        name: "React Router",
        image: "react-router.png",
      },
      {
        id: 5,
        name: "Node.js",
        image: "node.png",
      },
      {
        id: 6,
        name: "Express",
        image: "express.png",
      },
      {
        id: 7,
        name: "MongoDB",
        image: "mongodb.png",
      },
      {
        id: 8,
        name: "JWT",
        image: "jwt.png",
      },
      {
        id: 9,
        name: "Joi",
        image: "Joi-white.png",
      },
      {
        id: 10,
        name: "Jest",
        image: "jest.webp",
      },
      {
        id: 11,
        name: "Docker",
        image: "docker.webp",
      },
      {
        id: 12,
        name: "Docker compose",
        image: "docker-compose.webp",
      },
    ],
    img: "SocialMedia/image.png",
    video: "SocialMedia/Social Media.mp4",
    github: "https://github.com/Naira98/SocialMedia",
    website: "http://158.101.255.206/",
  },
  {
    id: 3,
    title: "E-commerce",
    des: "Full stack online shop with an admin panel for sellers to showcase their products and a storefront for clients to browse and purchase products.",
    iconLists: [
      {
        id: 1,
        name: "Node.js",
        image: "node.png",
      },
      {
        id: 2,
        name: "Express",
        image: "express.png",
      },
      {
        id: 3,
        name: "MongoDB",
        image: "mongodb.png",
      },
      {
        id: 4,
        name: "Express Validator",
        image: "express-validator.svg",
      },
      {
        id: 5,
        name: ".ejs",
        image: "ejs.jpeg",
      },
      {
        id: 6,
        name: "Stripe",
        image: "stripe.jpeg",
      },
    ],
    img: "E-Commerce/image.png",
    video: "E-Commerce/E-Commerce.mp4",
    github: "https://github.com/Naira98/E-commerce",
  },
];

export const skillGroups: SkillType[] = [
  { name: "TypeScript", img: "typescript.svg" },

  { name: "Next.js", img: "next.svg" },
  { name: "React.js", img: "react.webp" },
  { name: "Redux", img: "redux.png" },
  { name: "React Query", img: "react-query.png" },
  { name: "Tailwind CSS", img: "tailwind.png" },

  { name: "Node.js", img: "node.png" },
  { name: "Express", img: "express.png" },
  { name: "MongoDB", img: "mongodb-transparent.svg" },
  { name: "PostgreSQL", img: "PostgreSQL.png" },
  { name: "Redis", img: "redis.png" },
  { name: "JWT", img: "jwt.png" },

  { name: "HTML", img: "html.png" },
  { name: "CSS", img: "css.svg" },
  { name: "Git", img: "git.png" },

  { name: "Docker", img: "docker.webp" },
  { name: "Zod", img: "zod.png" },
  { name: "Joi", img: "joi-transparent.png" },
  { name: "Jest.js", img: "jest.webp" },
  { name: "Formik", img: "formik.png" },
];

export const socialMedia = [
  {
    name: "github",
    img: "github.svg",
    link: "https://www.github.com/Naira98",
  },
  {
    name: "linkedin",
    img: "linkedin.svg",
    link: "https://www.linkedin.com/in/nairamm",
  },
  {
    name: "gmail",
    img: "gmail.svg",
    link: "mailto:nairamm99@gmail.com",
  },
  {
    name: "whatsapp",
    img: "whatsapp.svg",
    link: "https://wa.me/201012470323",
  },
];
