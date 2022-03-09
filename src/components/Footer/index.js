import React from 'react';
import gitLogo from "../../assets/images/icons8-github-48.png";

function Footer() {
  const gh = [
    {
      gitLogo: gitLogo,
      gitProfile: "https://github.com/msdale"
    }
  ];

  return (
    <div className="flex-row center-content">
      {gh.map((linkTo) => (
        <section>
          <div id="profile-links">
            <a href={linkTo.gitProfile}>
              <img
                src={linkTo.gitLogo}
                alt="git logo"
              />
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Footer;