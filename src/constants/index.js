import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2019-2022",
    role: "Software Engineer, Backend",
    company: "Aera Technology",
    description:[
    " • Collaborated closely with other Product Managers, development teams,designers, and infrastructure specialists to deliver high-availability solutions", 
    " • Developed various products like analytics dashboards from business data, diagnostics tools, and voice applications", 
    " • Debugged code by analyzing configuration files and logs at, identifying root causes of issues ",
    " • Undertaken platform enablement, and transitions, performed system analysis, documentation, testing, implementation, and user support ",
    " • Provided Support for deployment activities at UAT and Production Level",
    " • Collaborated closely with global customer teams spanning two different time zones to resolve various issues and enhancements ",
    " • Supervised Interns and new joiners to help with daily tasks, reviewing peer coding and assigning work ",
    " • Recognized and Awarded twice, once regionally and globally for cross team support and for upholding organizational values", ],
    technologies: ["Python", "Java","SpringBoot","React", "Mysql","Exasol","AWS","Datadog","Tableau"],
  },
  {
    year: "2019",
    role: "Intern Full Stack Engineer",
    company: "Aera Technology",
    description: [
    " • Developed a POC Analytics Application with Spring and UI Framework, which consisted of building and modifying existing APIs to display analytics and KPIs.",
    " • Understanding, learning the code and technologies, and implementing daily assigned tasks.",
    " • Designed, coded, modified, and debugged application programs with complete independence and ownership.",
    " • Reviewing code from seniors and seeking suggestions to improve code quality."],
    technologies: ["Python", "Java","Spring Boot","React", "Mysql","Exasol"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
