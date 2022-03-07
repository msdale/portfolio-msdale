import React from "react";
import projImage from "../../assets/images/whats-out-there.png";
import gitLogo from "../../assets/images/icons8-github-48.png"

function Projects(props) {
  const currentProject = {
    name: "What's Out There!",
    type: "Interactive Full-Stack",
    description: "UFO sightings",
    image: projImage,
    appLink: "https://whats-out-there-stackattack.herokuapp.com/",
    gitLogo: gitLogo,
    gitRepo: "https://github.com/msdale/whats-out-there",
    accessibility: "UFO sightings"
  };
  return (
    <div className="flex-row">
      <section>
        <p>&nbsp;{currentProject.type}&nbsp;
          <a href={currentProject.gitRepo}>
            <img
              src={currentProject.gitLogo}
              alt="git logo"
            />
          </a>
        </p>
        <div>
          <a href={currentProject.appLink}>
            <img
              src={currentProject.image}
              alt={currentProject.accessibility}
              className="img-thumbnail mx-1"
            />
          </a>
        </div>
      </section>
      <section>
        <p>&nbsp;{currentProject.type}&nbsp;
          <a href={currentProject.gitRepo}>
            <img
              src={currentProject.gitLogo}
              alt="git logo"
            />
          </a>
        </p>
        <div>
          <a href={currentProject.appLink}>
            <img
              src={currentProject.image}
              alt={currentProject.accessibility}
              className="img-thumbnail mx-1"
            />
          </a>
        </div>
      </section>
      <section>
        <p>&nbsp;{currentProject.type}&nbsp;
          <a href={currentProject.gitRepo}>
            <img
              src={currentProject.gitLogo}
              alt="git logo"
            />
          </a>
        </p>
        <div>
          <a href={currentProject.appLink}>
            <img
              src={currentProject.image}
              alt={currentProject.accessibility}
              className="img-thumbnail mx-1"
            />
          </a>
        </div>
      </section>
      <section>
        <p>&nbsp;{currentProject.type}&nbsp;
          <a href={currentProject.gitRepo}>
            <img
              src={currentProject.gitLogo}
              alt="git logo"
            />
          </a>
        </p>
        <div>
          <a href={currentProject.appLink}>
            <img
              src={currentProject.image}
              alt={currentProject.accessibility}
              className="img-thumbnail mx-1"
            />
          </a>
        </div>
      </section>
      <section>
        <p>&nbsp;{currentProject.type}&nbsp;
          <a href={currentProject.gitRepo}>
            <img
              src={currentProject.gitLogo}
              alt="git logo"
            />
          </a>
        </p>
        <div>
          <a href={currentProject.appLink}>
            <img
              src={currentProject.image}
              alt={currentProject.accessibility}
              className="img-thumbnail mx-1"
            />
          </a>
        </div>
      </section>
      <section>
        <p>&nbsp;{currentProject.type}&nbsp;
          <a href={currentProject.gitRepo}>
            <img
              src={currentProject.gitLogo}
              alt="git logo"
            />
          </a>
        </p>
        <div>
          <a href={currentProject.appLink}>
            <img
              src={currentProject.image}
              alt={currentProject.accessibility}
              className="img-thumbnail mx-1"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
export default Projects;