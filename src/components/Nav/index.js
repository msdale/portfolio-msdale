import React from 'react';
import profileImage from "../../assets/profile/profile-pic.png";
import pdf from "../../assets/documents/markdale_2021.pdf";

function Nav(props) {
  const {
    currentPage,
    handlePageChange
  } = props;



  return (
    <header>
      <nav className="flex-row">
        <h1 className="flex-row vcenter">
          <img id="my-profile" src={profileImage} alt="profile" />
            Mark Dale
        </h1>
        <ul className="flex-row center-content">
          <li className={`mx-2`}>
            <button id="navAbout" onClick={() => handlePageChange('About')}>About</button>
          </li>
          <li className={`mx-2`}>
            <button onClick={() => handlePageChange('Contact')}>Contact</button>
          </li>
          <li className={`mx-2`}>
            <button onClick={() => handlePageChange('Projects')}>Projects</button>
          </li>
          <li>
          {/*<a href={pdf} alt="Resume">Resume</a>*/}
          <a id="navResume" href={pdf} target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;