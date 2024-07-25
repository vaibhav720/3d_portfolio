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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Application Developer",
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Mobile Application Developer",
      company_name: "Limitless Health Inc.",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2024 - Auguest 2024",
      points: [
        "Developed features such as a timer for the video player and an email notification system using Flutter and Hive.",
        "Additionally,contributed to the development of a team registration website using WordPress.",
        
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Aavenir",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Jun 2023",
      points: [
        "Automated data extraction from 2870 PDFs and JSON documents for PSCU, a US-based company, utilizing Agile methodologies and Object Oriented programming concepts. Developed front-end features using Angular, CSS, and JavaScript.",
        "Implemented parallel processing algorithms to optimize PDF data extraction and finding important key points and ranking according to confidence level, reducing processing time from 288 to 76 hours, achieving a 73.6% decrease.",
        " Utilized Angular, JavaScript, C++, Postman, and ServiceNow Rest API for contractflow automation",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "LDCE",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - September 2022",
      points: [
        " Led digitalization of the student portal, automating certificate verification and generation for 6,000 students and alumni.",
        "Engineered and deployed 14 features, including automatic data filling and dynamic form creation, enhancing user experience and efficiency in 4 months via REST APIs using Agile development lifecycle",
        "Technologies: React, Redux, CSS, Axios, jQuery, Mocha, Jest, Node.js, Express, MongoDB, CORS, Git.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "Coders Club",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Oct 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Stock Portfolio Manager",
      description:
        "Tech Stack: React.js, Redux, jQuery, Mocha, Jest, WebPack. Material-UI, JavaScript, CSS, HTML, Bootstrap, Firebase. APIs Used: Alpha Vantage, TradingView Widget, NewsAPI, Finnhub. Used git for the version control",
      tags: [
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
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Blog Page using Next.js and Strapi",
      description:
        "Dynamic, SEO-friendly blog using Strapi for content management and Next.js for server-side rendering, enabling seamless content creation, editing, and publishing with high performance and scalability.",
      tags: [
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
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Learn with AR",
      description:
        "Developed an Education AR app in HackED hackathon, were selected in top 10.Tech Used:- Github, Flutter, ARCore, Firebase.",
      tags: [
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
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };