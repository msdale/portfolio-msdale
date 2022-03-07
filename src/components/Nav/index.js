import React from 'react';
import profileImage from "../../assets/profile/profile-pic.png";
import Resume  from "../Resume";

function Nav() {

  return (
    <header>
      <nav className="flex-row">
        <h1 className="flex-row vcenter">
          <img id="my-profile" src={profileImage} alt="profile" />
            Mark Dale
        </h1>
        <ul className="flex-row center-content">
          <li className="mx-2">
            <a id="navAbout" href="#about">
              About me
            </a>
          </li>
          <li>
            <a id="navContact">Contact</a>
          </li>
          <li>
            <a id="navProjects">Projects</a>
          </li>
          <li>
            <Resume />

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;