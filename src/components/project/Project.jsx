import { Link } from "react-router-dom";
import Button from "../Button";
const Project = ({ project }) => {
  return (
    <section className="portfolio__project">
      <div className="project-con" data-aos="fade-up">
        <div className="portfolio__project-img">
          <img
            src={project.image}
            alt={project.title}
            className="port-img"
            loading="lazy"
          />
        </div>
        <div className="project-desc">
          <h4>{project.title}</h4>
          <p>{project.desc}</p>
        </div>
        <div className="project__btn-link">
          <a href={project.demo} className="btn_main" target="_blank">
            View demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
