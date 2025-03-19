import { teamPageData } from "../../../data";
import DataInstructor from "../../../assets/images/man-medium.jpg";
// import WebInstructor from "../../../assets/images/Team-12.PNG";
import ShapeBg from "../../../assets/bg/shape-6.png";
import ShapeBg_2 from "../../../assets/bg/shape-11.png";

const AboutTeam = () => {
  return (
    <section className="about__team-section">
      <div className="container about__team-container">
        <div className="about__team-title text-center">
          <span className="pre-title">Meet Our Experts</span>
          <h2>The ThinkTech Dream Team</h2>
        </div>
        <div className="about__team-bg">
          <img src={ShapeBg} alt="" />
        </div>
        <article className="team__wrapper">
          {teamPageData.slice(0, 3).map((team) => {
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
  );
};

export default AboutTeam;
