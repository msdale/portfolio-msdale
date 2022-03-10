import React from "react";
import gitLogo from "../../assets/images/icons8-github-48.png"

// used in projectList (below)
import image_0 from "../../assets/images/whats-out-there.png";
import image_1 from "../../assets/images/Run-Buddy-pic.png";
import image_2 from "../../assets/images/work-day-scheduler.png";
import image_3 from "../../assets/images/weather-dashboard.png";
import image_4 from "../../assets/images/pricemart.png";
import image_5 from "../../assets/images/tech-blog.png";

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
    }
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