import React from 'react';
import gitLogo from "../../assets/images/github-11-64.png";
import linkedinLogo from "../../assets/images/linkedin-5-64.png";

function Footer() {
  const links = [
    {
      linkLogo: gitLogo,
      linkProfile: "https://github.com/msdale"
    },
    {
      linkLogo: linkedinLogo,
      linkProfile: "https://www.linkedin.com/in/mark-dale-29a456222/"
    },
  ];

  return (
    <div className="flex-row center-content">
      {links.map((linkTo) => (
        <section>
          <div id="profile-links">
            <a href={linkTo.linkProfile}>
              <img
                id="my-profile"
                src={linkTo.linkLogo}
                alt="link logo"
              />
            </a>
          </div>
        </section>
      ))}
      <p id="text-thought">I forget what is in the past, and try as hard as I can to reach the goal before me...</p>
    </div>
  );
}

export default Footer;