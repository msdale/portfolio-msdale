import React from "react";
import gitLogo from "../../assets/images/icons8-github-48.png"

// used in projectList (below)
import image_0 from "../../assets/images/whats-out-there.png";
import image_1 from "../../assets/images/Run-Buddy-pic.png";
import image_2 from "../../assets/images/work-day-scheduler.png";
import image_3 from "../../assets/images/weather-dashboard.png";
import image_4 from "../../assets/images/pricemart.png";
import image_5 from "../../assets/images/tech-blog.png";
import image_6 from "../../assets/images/sparkling-spaces.png";
import image_7 from "../../assets/images/password-generator.png";
import image_8 from "../../assets/images/code-quiz.png";
import image_9 from "../../assets/images/readme-generator.png";
import image_10 from "../../assets/images/team-profile-generator.png";
import image_11 from "../../assets/images/note-taker-screenshot.png";
import image_12 from "../../assets/images/employee-tracker.png";
import image_13 from "../../assets/images/ecommerce.png";
import image_14 from "../../assets/images/regex-tutorial.png";
import image_15 from "../../assets/images/whats-up.png";
import image_16 from "../../assets/images/budget-tracker.png";

function Projects(props) {
  const projectList = [
    {
      name: "What's Out There!",
      type: "Interactive Full-Stack",
      description: "UFO sightings",
      image: image_0,
      appLink: "https://whats-out-there-stackattack.herokuapp.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/whats-out-there",
      accessibility: "UFO sightings"
    },
    {
      name: "Run Buddy",
      type: "HTML/CSS",
      description: "Fitness training services",
      image: image_1,
      appLink: "https://msdale.github.io/run-buddy/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/run-buddy",
      accessibility: "Fitness training services"
    },
    {
      name: "Work Day Scheduler",
      type: "Third-Party APIs",
      description: "A simple calendar app for scheduling your work day tasks",
      image: image_2,
      appLink: "https://msdale.github.io/work-day-scheduler/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/work-day-scheduler",
      accessibility: "Work day task calendar"
    },
    {
      name: "Weather Dashboard",
      type: "Server-Side APIs",
      description: "A quick look at the weather in a city of your choosing",
      image: image_3,
      appLink: "https://msdale.github.io/weather-dashboard/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/weather-dashboard",
      accessibility: "City weather briefing"
    },
    {
      name: "PriceMart",
      type: "Interactive Front-End",
      description: "A price comparitor application",
      image: image_4,
      appLink: "https://msdale.github.io/pricemart/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/pricemart",
      accessibility: "Retail price comparitor"
    },
    {
      name: "Tech Blog",
      type: "Model-View-Controller",
      description: "A CMS style technical blog",
      image: image_5,
      appLink: "https://tech-blog-msdale.herokuapp.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/tech-blog",
      accessibility: "CMS technical blog"
    },
    {
      name: "Sparkling Spaces",
      type: "Interactive Full-Stack MERN",
      description: "Cleaning service",
      image: image_6,
      appLink: "https://sparkling-spaces.herokuapp.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/sparkling-spaces",
      accessibility: "UFO sightings"
    },
    {
      name: "Password Generator",
      type: "HTML/CSS/Javascript",
      description: "Password Generator",
      image: image_7,
      appLink: "https://msdale.github.io/password-generator/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/password-generator",
      accessibility: "Password Generator"
    },
    {
      name: "Code Quiz",
      type: "Web APIs",
      description: "Code Quiz",
      image: image_8,
      appLink: "https://msdale.github.io/code-quiz/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/code-quiz",
      accessibility: "Code Quiz"
    },
    {
      name: "README Generator",
      type: "Node JS",
      description: "README Generator",
      image: image_9,
      appLink: "https://github.com/msdale/readme-generator/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/readme-generator",
      accessibility: "README Generator"
    },
    {
      name: "Team Profile Generator",
      type: "OOP Development (Using classes)",
      description: "Team Profile Generator",
      image: image_10,
      appLink: "https://github.com/msdale/team-profile-generator/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/team-profile-generator",
      accessibility: "Team Profile Generator"
    },
    {
      name: "Note Taker",
      type: "Express JS",
      description: "Note Taker",
      image: image_11,
      appLink: "https://note-taker-msdale.herokuapp.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/note-taker",
      accessibility: "Note Taker"
    },
    {
      name: "Employee Tracker",
      type: "SQL",
      description: "Employee Tracker",
      image: image_12,
      appLink: "https://github.com/msdale/employee-tracker/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/employee-tracker",
      accessibility: "Employee Tracker"
    },
    {
      name: "ECommerce",
      type: "Object-Relational Mapping (ORM)",
      description: "ECommerce",
      image: image_13,
      appLink: "https://github.com/msdale/e-commerce/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/e-commerce",
      accessibility: "ECommerce"
    },
    {
      name: "Regex Tutorial",
      type: "Use and Understand Regex",
      description: "User and Understand Regex",
      image: image_14,
      appLink: "https://gist.github.com/msdale/bbddb89fd71ac1065ef2f5715399d089/",
      gitLogo: gitLogo,
      gitRepo: "https://gist.github.com/msdale/bbddb89fd71ac1065ef2f5715399d089/",
      accessibility: "Use and Understand Regex"
    },
    {
      name: "Whats Up",
      type: "NoSQL",
      description: "Social Network API",
      image: image_15,
      appLink: "https://github.com/msdale/whats-up/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/whats-up",
      accessibility: "Social Network API"
    },
    {
      name: "Budget Tracker",
      type: "PWA (Progressive Web Application)",
      description: "Budget Tracker",
      image: image_16,
      appLink: "https://budget-tracker-msdale.herokuapp.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/budget-tracker",
      accessibility: "Social Network API"
    },
  ];

  return (
    <div className="flex-row">
      {projectList.map((project) => (
        <section>
          <p>&nbsp;{project.type}&nbsp;
            <a href={project.gitRepo} target="_blank" rel="noreferrer" alt="git Icon">
              <img
                className="my-project-link"
                src={project.gitLogo}
                alt="git logo"
              />
            </a>
          </p>
          <div>
            <a href={project.appLink} target="_blank" rel="noreferrer" alt="app image">
              <img
                src={project.image}
                alt={project.accessibility}
                className="img-thumbnail mx-1 my-project-link"
              />
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}
export default Projects;