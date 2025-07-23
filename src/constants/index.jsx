import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "Education" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React , Next.js , Node , MongoDb , Tailwind , MySql , Javascript ,  Spring Boot ,";

export const PROJECTS = [
  {
    id: 1,
    title: "Blood Management System",
    description:
      "A full-featured Blood Management System developed using Spring Boot,MySQL and Bootstrap",
    imgSrc: project1,
    link: "https://github.com/MalikBandara/Final_project_second_sem.git",
  },
  {
    id: 2,
    title: "Next level gaming site",
    description:
      "I've started working on an interactive gaming website built using react and powered by GSAP animation to deliver smooth , engaging , and dynamic user experience ",
    imgSrc: project2,
    link: "https://gaming-web-react-malik.vercel.app/",
  },
  {
    id: 3,
    title: "Extra",
    description: ".....",
    imgSrc: project3,
    link: "https://portfolio-desing.vercel.app/",
  },
  {
    id: 4,
    title: "CineScope Movie Dashboard",
    description:
      "CineScope , a sleek and responsive movie Dashboard & Database built with Next.js , Shadcn/ui MongoDB",
    imgSrc: project4,
    link: "https://github.com/MalikBandara/cinescope-b03.git",
  },
  {
    id: 5,
    title: "Library Management system",
    description:
      "This library management system is made using React with TypeScript and tailwinds css for the frontend and Node js and mongoDB for the backend",
    imgSrc: project5,
    link: "https://github.com/MalikBandara/Book-Club-Backend.git",
  },
  {
    id: 6,
    title: "React Portfolio",
    description:
      "React portfolio create using React , tailwind css and framer motion ",
    imgSrc: project6,
    link: "https://github.com/MalikBandara/ReactPortfolio.git",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills. using HTML , CSS and JavaScript",
    imgSrc: project7,
    link: "https://portfolio-desing.vercel.app/",
  },
  {
    id: 8,
    title: "Culinary Management System ",
    description:
      "This system developed using MYSql , javaFx and hibernate this system simplifies the enrollment process for students in culinary courses and integrates a payment transaction process ",
    imgSrc: project8,
    link: "https://github.com/MalikBandara/Orm-Course_work.git",
  },
  {
    id: 9,
    title: "Image Slider using Figma",
    description:
      "this is my latest Figma design of Advanced image slider animation in figma ",
    imgSrc: project9,
    link: "https://www.figma.com/design/L8AVOoxuSDEMkeBq1bRlj6/Image-Slider-Malik?node-id=0-1&t=y7lfz16x38kgVJU2-1",
  },
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EDUCATION = [
  {
    institute: "Institute of Java and Software Engineering (IJSE)",
    course: "BSc (Hons) in Computer Science",
    year: "07/2025 - Present",
    description:
      "Currently pursuing my BSc (Hons) in Computer Science at the Institute of Java and Software Engineering (IJSE), where I’m gaining practical, hands-on experience in full-stack software development. The program covers a wide range of technologies including Python, Java, Spring Boot, HTML, CSS, JavaScript, React.js, TypeScript, MongoDB, SQL, and Microservices. It is designed to be highly industry-focused, emphasizing real-world application, software architecture, and modern coding practices. I’ve worked with MVC and layered architecture, implemented RESTful APIs, and collaborated on projects using Git and GitHub. This program is helping me build a solid foundation in both frontend and backend development, preparing me to tackle real-world software engineering challenges with confidence.",
  },
  {
    institute: "Comprehensive Master Java Developer ",
    course:
      "Oracle Certified Associate & Professional Java Programmer (OCAJP & OCPJP)",
    year: "2023 - 2024",
    description:
      "Successfully completed the Oracle Certified Associate Java SE and Oracle Certified Professional Java Programmer examinations. Gained strong understanding in programming fundamentals, object-oriented principles, exception handling, data structures and algorithms, multithreading, and JavaFX. Worked with relational databases using MySQL and JDBC. Built layered applications using MVC architecture, applied design patterns, and implemented ORM techniques. Also developed full-stack applications using Spring Boot for the backend and React for the frontend. Familiar with web technologies including HTML, CSS, JavaScript, jQuery, and Bootstrap.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100082522564202",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },

  {
    href: "https://github.com/MalikBandara",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/malikbandara?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "mmalith520@gmail.com",
  phone: "+94 71 607 7743",
};
