import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.ibb.co.com/S4CjzKwt/Untitled-design-2.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Arthuriant" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/andikariant/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Andika Rianto</h1>
          <p>Full Stack Engineer and IoT Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Arthuriant" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/andikariant/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;