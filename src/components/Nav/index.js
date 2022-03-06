import React from 'react';
import profileImage from "../../assets/profile/profile-pic.png";
import Resume  from "../Resume";

function Nav() {

  return (
    <header>
      <nav className="flex-row">
        <h1>
          <img id="my-profile" src={profileImage} alt="profile" />
            Mark Dale
        </h1>
        <ul className="flex-row center-content">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>Projects</span>
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