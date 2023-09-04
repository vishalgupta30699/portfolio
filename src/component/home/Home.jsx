import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import htmlImage from "../../assets/images/html_img.png";
import cssImage from "../../assets/images/css_img.png";
import javascriptImage from "../../assets/images/javascript_img.png";
import reactImage from "../../assets/images/react_img.png";
import reduxImage from "../../assets/images/redux_img.png";
import nodeImage from "../../assets/images/node_img.png";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="main">
          <div className="hero-bio">
            <h1>Front-End React Developer</h1>
            <p>Hi, I'm Vishal Gupta 👋. A passionate Full Stack Developer .</p>
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
            <div className="doc_btn">
              <a
                href="https://drive.google.com/file/d/1D3lwqdGiVctFz75LhfJltfpd_8QITGii/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button>Resume</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1oATCWvbgmg6XfmYUUUDhy1KQ2DcTxoru/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button>CV</button>
              </a>
            </div>
          </div>
          <div className="hero-img">{/* <img src={myImage} alt="" /> */}</div>
        </div>
        <div className="tech-stack">
          <h2>Tech Stack</h2>
          <ul>
            <li>
              <img src={htmlImage} alt="" />
            </li>
            <li>
              <img src={cssImage} alt="" />
            </li>
            <li>
              <img src={javascriptImage} alt="" />
            </li>
            <li>
              <img src={reactImage} alt="" />
            </li>
            <li>
              <img src={nodeImage} alt="" />
            </li>
            <li>
              <img src={reduxImage} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
