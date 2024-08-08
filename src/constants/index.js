import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import aws from "../assets/certficates/aws.png";
import spark from "../assets/certficates/spark.png";


export const HERO_CONTENT = 'I am passionate data engineer, specialized experience in data engineering, and machine learning and analytics. Proven expertise in cloud computing and modern data technologies .Engineered diverse products such as analytics dashboards, diagnostic tools, and a voice intent builder using Java, SQL, Python, and AWS. Designed and implemented robust data models and ETL/ELT processes for reporting and analytics projects, leveraging Python, SQL, and Apache Airflow. Skilled in AWS Data & Analytics Infrastructure management, achieving operational efficiencies and substantial post-deployment issue reductions.'

export const ABOUT_TEXT = `I am a dedicated and versatile software engineer with a passion for creating efficient and user-friendly web applications. With over 3 years of specialized experience in data engineering and an advanced degree in machine learning and analytics from Lambton College, I have honed my skills in cloud computing and modern data technologies. My journey in software development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    title: "Movie Recommendation System",
    
    image: project1,
    description:
      "Movie Recommendation System using LLM Embbedings",
    technologies: ["python", "lama2", "numpy", "faiss", "pandas"],
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
    title: "Face Detection Application (Security App)",
    image: project4,
    description:
      " Backend Module of the kkwst-face-detection model. It is a RESTful API built using FastAPI, providing endpoints for interacting with user accounts to manage user actions and the application",
    technologies: ["python", "fastapi", "sqllite", "Vgg16","opencv"],
  },
];

export const CERTIFICATES = [

  {
    title: "AWS Cloud Technical Essentials",
    link:"https://www.coursera.org/account/accomplishments/verify/4BE8NL85DTER",
    image: aws,
    description:
      "comprehensive understanding of AWS terminology, security measures, and various AWS compute services like EC2, Lambda, ECS,explored AWS database solutions such as RDS, DynamoDB, and S3",
    technologies: ["EC2", "IAM", "S3","RDS","DynamoDB","Lamdba","ECS"],
  },
  {
    title: "DataBricks - Apache Spark (TM) SQL for Data Analysts",
    link:"https://www.coursera.org/account/accomplishments/verify/M42784NBTSA2",
    image: spark,
    description:
      "learned how to ingest, transform, and query data to extract valuable insights. I also leveraged my existing SQL skills to start working with Apache Spark.",
    technologies: ["Spark", "SparkSql", "RDDs", "Data Cleaning","Data Processing","Medallion Architecture"],
  },
];


export const CONTACT = {
  address: "Toronto, Ontario, Canada",
  
  email: "me@example.com",
};
