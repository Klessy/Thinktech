import Project from "./Project";

const Portfolio = ({ projects }) => {
  return (
    <section className="">
      <div className="projects-lists">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
