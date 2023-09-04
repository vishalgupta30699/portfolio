import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footerc">
          <h3>Copyright © 2023. All rights are reserved</h3>
          <div className="social-links">
            <a
              href="https://github.com/VishalGupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-gupta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
