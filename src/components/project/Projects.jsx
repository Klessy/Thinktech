import { useState, useEffect } from "react";
import ProjectCategories from "./ProjectCategories";
import { projectData } from "../../data";

import "./projects.css";
import Portfolio from "./Portfolio";
const Projects = () => {
  const [projects, setProjects] = useState(projectData.slice(0, 6));
  const categories = projectData.map((item) => item.category);
  const [loading, setLoading] = useState(true);

  const uniqueCategories = ["Latest", ...new Set(categories)];

  const filterProjectHandler = (category) => {
    if (category === "Latest") {
      setProjects(projectData.slice(0, 6));
      return;
    }
    const filterProjects = projectData.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section className="project__section">
      <div className="container project__container">
        <div className="project__title text-center">
          <span className="pre-title">What you will Build</span>
          <h2>Build Some Industry Standard Project as you Learn</h2>
        </div>
        <div className="projects__center">
          <ProjectCategories
            categories={uniqueCategories}
            onFilterProjects={filterProjectHandler}
          />
          <Portfolio projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
