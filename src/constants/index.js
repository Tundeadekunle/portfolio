import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kmtn,
  power,
  jobsng,
  kashinSS,
  wande,
  woman10,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Full Stack",
    icon: backend,
  },
  {
    title: "3D Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "KMT",
    icon: kmtn,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Developing a user friendly web applications using React.js, CSS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      //"Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.JS Developer",
    company_name: "Freelance",
    icon: kmtn,
    iconBg: "#E6DEDD",
    date: "April 2021 - Feb 2023",
    points: [
      "Developing a user friendly web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: kmtn,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, MongoDB and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tunde gives good attention to every details of every designs and execute it 100%. He was tasked with creation of websites landing page while at KMT",
    name: "Adeola",
    designation: "CEO",
    company: "KMT",
    //: "https://randomuser.me/api/portraits/women/4.jpg",
    image: "wande.jpeg",
  },
  {
    testimonial:
      "Tunde is a Frontend developer who truly cares about their clients' desires and success.",
    name: "Elizabeth A.",
    designation: "CEO",
    company: "EverythinKiddies",
    //: "https://randomuser.me/api/portraits/men/5.jpg",
    image: "woman10.jpg",
  },
  {
    testimonial:
      "An intelligent Frontend developer, does cool work",
    name: "Clement O.",
    designation: "CEO",
    company: "POWER Co.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Power",
    description:
      "I was tasked to create the landing page of a dashboard that allows the admins to tarck, analyse, and manage sales, expenses from various custoers and agents. It is a convenient and efficient solution sales analysis.",
      
    /*tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],*/
    image: power,
    link: "powermin.netlify.app",
  },
  {
    name: "JobsNg",
    description:
      "A landing page of a Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    /*tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],*/
    image: jobsng,
    link: "jobsng.netlify.app",
  },
  {
    name: "Kashin",
    description:
      "A web based platform that allows users to send money to Nigeria from any part of the world, with low charge rate in USDT.",
    /*tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],*/
    image: kashinSS,
    //link: "everythingkiddies.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };