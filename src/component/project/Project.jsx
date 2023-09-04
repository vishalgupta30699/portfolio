import React from "react";
import "./Project.css";
import ProjectGrid from "./ProjectGrid";
import movie_hub from "../../assets/images/project_img/movie_hub.png";
import news_web from "../../assets/images/project_img/news_app.png";
import pomodoro from "../../assets/images/project_img/pomodoro-timer.png";

const Project = () => {
  const data = [
    {
      project_live_url: "https://movie-hub-silk-two.vercel.app/",
      project_source_url: "https://github.com/vishalgupta30699/movieHub",
      project_image: movie_hub,
      project_name: "Movie Hub",
      project_desc:
        " A movie-hub application that allows users to search for movies based on their favorite genres.",
      project_tech_stack: [
        "HTML",
        "SCSS",
        "JavaScript",
        "Redux",
        "React",
        "API",
      ],
    },
    {
      project_live_url: "https://news-app-six-xi.vercel.app/",
      project_source_url: "https://github.com/vishalgupta30699/News-app",
      project_image: news_web,
      project_name: "News Website",
      project_desc:
        "A news website is a place where you can find news articles and feeds.Daily News related to your category, search feature to go to a particular News or keywords, and Proper Pagination",
      project_tech_stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Next.Js",
        "React",
        "API",
      ],
    },
    {
      project_live_url: "https://vishalgupta30699.github.io/Pomodoro-Timer/",
      project_source_url: "https://github.com/vishalgupta30699/Pomodoro-Timer",
      project_image: pomodoro,
      project_name: "Pomodoro Timer",
      project_desc:
        "The objective of this project is to develop a digital Pomodoro Timer that helps individuals manage their time effectively, improve productivity, and maintain a healthy work-life balance.",
      project_tech_stack: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <div className="container">
      <div className="pro_content">
        <div className="project-content">
          <p>Portfolio</p>
          <h3>Each project is unique piece of development</h3>
          <div className="projects-grid">
            {data.map((project) => {
              return (
                <ProjectGrid
                  project_live_url={project.project_live_url}
                  project_source_url={project.project_source_url}
                  project_image={project.project_image}
                  project_name={project.project_name}
                  project_desc={project.project_desc}
                  project_tech_stack={project.project_tech_stack}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
