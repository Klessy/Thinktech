import { teamPageData } from "../../data";
import BreadCrumb from "../../components/BreadCrumb";

import "./team.css";
import { useTitle } from "../../hooks/useTitle";
import { SEO } from "../../components";

const Team = () => {
  useTitle("Team");
  return (
    <>
      <SEO
        title="Team | Thinktech Academy"
        description=" The ThinkTech Dream Team"
        url="https://thinktech.com.ng/team"
      />
      <section className="teamPage__section">
        <BreadCrumb title={"The ThinkTech Dream Team"} path={"Team"} />
        <div className="teamPage__con container">
          <article className="team__wrapper">
            {teamPageData.map((team) => {
              const { id, teamImg, teamTitle, designation } = team;
              return (
                <div className="team__card" key={id}>
                  <div className="team__card-inner">
                    <div className="team__img">
                      <img src={teamImg} alt="" />
                    </div>
                    <div className="hover-items">
                      <div class="hover__icons">
                        <a href="#" className="icon">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="icon">
                          <i class="fab fa-github"></i>
                        </a>
                        <a href="#" className="icon">
                          <i class="fab fa-behance"></i>
                        </a>
                        <a href="#" className="icon">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="thinktech__instructor-info text-center">
                    <h5>{teamTitle}</h5>
                    <span className="thinktech__instructor-desc">
                      {designation}
                    </span>
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default Team;
