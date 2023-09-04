import React from "react";
import "./Skills.css";
import htmlImage from "../../assets/images/html_img.png";
import cssImage from "../../assets/images/css_img.png";
import javascriptImage from "../../assets/images/javascript_img.png";
import reactImage from "../../assets/images/react_img.png";
import reduxImage from "../../assets/images/redux_img.png";
import nodeImage from "../../assets/images/node_img.png";
import cImage from "../../assets/images/c_img.png";
import cPlusImage from "../../assets/images/c++_img.png";
import nextImage from "../../assets/images/nextjs_img.png";
import mysqlImage from "../../assets/images/mysql_img.png";
import mongodbImage from "../../assets/images/mongodb_img.png";
import postmanImage from "../../assets/images/postman_img.png";
import gitImage from "../../assets/images/git_img.png";
import gitHubImage from "../../assets/images/github_img.png";
import jiraImage from "../../assets/images/jira_img.png";

const Skills = () => {
  return (
    <div className="skills_container">
      <div className="skills_content">
        <p>Skills</p>
        <div className="skills_tech-stack">
          <ul>
            <li>
              <img src={htmlImage} alt="" />
              <p>HTML</p>
            </li>
            <li>
              <img src={cssImage} alt="" />
              <p>CSS</p>
            </li>
            <li>
              <img src={javascriptImage} alt="" />
              <p>Javascript</p>
            </li>
            <li>
              <img src={reactImage} alt="" />
              <p>React</p>
            </li>
            <li>
              <img src={nodeImage} alt="" />
              <p>Node</p>
            </li>
            <li>
              <img src={reduxImage} alt="" />
              <p>Redux</p>
            </li>
            <li>
              <img src={mongodbImage} alt="" />
              <p>MongoDB</p>
            </li>
            <li>
              <img src={mysqlImage} alt="" />
              <p>MySQL</p>
            </li>
            <li>
              <img src={cImage} alt="" />
              <p>C</p>
            </li>
            <li>
              <img src={cPlusImage} alt="" />
              <p>C++</p>
            </li>
            <li>
              <img src={gitImage} alt="" />
              <p>Git</p>
            </li>
            <li>
              <img src={gitHubImage} alt="" />
              <p>Github</p>
            </li>
            <li>
              <img src={postmanImage} alt="" />
              <p>Postman</p>
            </li>
            <li>
              <img src={jiraImage} alt="" />
              <p>Jira</p>
            </li>
            <li>
              <img src={nextImage} alt="" />
              <p>NextJs</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
