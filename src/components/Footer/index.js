import React from 'react';
import gitLogo from "../../assets/images/github-11-64.png";
import linkedinLogo from "../../assets/images/linkedin-5-64.png";

function Footer(props) {
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

  let thoughtText;
  if (props.currentPage === 'About') {
    thoughtText = <p id="text-thought-footer">Press on to reach the goal</p>;
  }

  return (
    <>
      <div className="flex-row center-content">
        {links.map((linkTo) => (
          <section>
            <div>
              <a href={linkTo.linkProfile} target="_blank" rel="noreferrer" alt="Link Icon">
                <img
                  className="my-footer-link"
                  src={linkTo.linkLogo}
                  alt="link logo"
                />
              </a>
            </div>
          </section>
        ))}
      </div>
      <div className="flex-row center-content">
        {thoughtText}
      </div>
    </>
  );
}

export default Footer;