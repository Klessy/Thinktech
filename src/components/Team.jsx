import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Button from "./Button";
import { teamPageData } from "../data";
// import DataInstructor from "../assets/images/man-medium.jpg";
import Designer from "../assets/images/Team-12-bg-removed.PNG";
import SoftwareDeveloper from "../assets/images/team-2-filter-bg-removed.jpg";
import ForexProfessional from "../assets/images/team-3-bg-removed.jpeg";
import DataInstructor2 from "../assets/images/mr-george_processed.jpeg";
import bgShape from "../assets/bg/shape-5.png";
import bgShapetwo from "../assets/bg/shape-6.png";

import "./styles/team.css";
// const index = [0, 1, 2, 3];
const Team = () => {
  // const findItem = teamPageData.find((item, index) => item.id !== index);
  // const filterItem = teamPageData.filter((item) => item.id !== index);

  const [toggleClose, setToggleClose] = useState(true);
  const [toggleSoftwareClose, setToggleSoftwareClose] = useState(true);
  const [toggleDataClose, setToggleDataClose] = useState(true);
  const handleClose = () => {
    setToggleClose(!toggleClose);
  };

  const handleCloseSoftwareButton = () => {
    setToggleSoftwareClose(!toggleSoftwareClose);
  };

  const handleCloseDataButton = () => {
    setToggleDataClose(!toggleDataClose);
  };

  return (
    <section className="team__section">
      <div className="container team__container">
        <div className="team__title text-center">
          <span className="pre-title">skilled instructors</span>
          <h2>Meet our Instructors</h2>
        </div>
        <div className="team__container-wrapper">
          <div className="team__container-bg-one">
            <img src={bgShape} alt="" />
          </div>
          <div className="team__container-bg-two">
            <img src={bgShapetwo} alt="" />
          </div>
          <div className="team-wrap">
            <div className="team-thumb">
              <img src={ForexProfessional} alt="Alfred Jonah Head of School" />
            </div>
            <div className="team-info">
              <h4>Mr Richmond</h4>
              <span>Professional Forex Trader</span>
              <div className="team-social">
                <div
                  className={`team-socials-wrapper ${
                    !toggleClose ? "show-btn" : "hide-btn"
                  }`}
                >
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>

                <button className="trigger-socials" onClick={handleClose}>
                  {!toggleClose ? (
                    <i className="fas fa-times"></i>
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="team-wrap">
            <div className="team-thumb">
              <img src={SoftwareDeveloper} alt="Alfred Jonah Head of School" />
            </div>
            <div className="team-info">
              <h4>Mr Precious</h4>
              <span>Software Developer</span>
              <div className="team-social">
                <div
                  className={`team-socials-wrapper ${
                    !toggleSoftwareClose ? "show-btn" : "hide-btn"
                  }`}
                >
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>

                <button
                  className="trigger-socials"
                  onClick={handleCloseSoftwareButton}
                >
                  {!toggleSoftwareClose ? (
                    <i className="fas fa-times"></i>
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="team-wrap">
            <div className="team-thumb">
              <img src={DataInstructor2} alt="Alfred Jonah Head of School" />
            </div>
            <div className="team-info">
              <h4>Mr George</h4>
              <span>Data Analyst</span>
              <div className="team-social">
                <div
                  className={`team-socials-wrapper ${
                    !toggleDataClose ? "show-btn" : "hide-btn"
                  }`}
                >
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>

                <button
                  className="trigger-socials"
                  onClick={handleCloseDataButton}
                >
                  {!toggleDataClose ? (
                    <i className="fas fa-times"></i>
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="team__container-wrapper">
          <div className="team__container-bg-one">
            <img src={bgShape} alt="" />
          </div>
          <div className="team__container-bg-two">
            <img src={bgShapetwo} alt="" />
          </div>

          {teamPageData.slice(0, 3).map((teamData) => {
            const {
              id,
              teamImg,
              teamTitle,
              btn,
              fb,
              instagram,
              twitter,
              designation,
            } = teamData;
            return (
              <div className="team-wrap">
                <div className="team-thumb">
                  <img src={teamImg} alt="Alfred Jonah Head of School" />
                </div>
                <div className="team-info">
                  <h4>{teamTitle}</h4>
                  <span>{designation}</span>
                  <div className="team-social">
                    <div className={!toggleClose ? "show-btn" : "hide-btn"}>
                      <a href="#">
                        <i>{fb}</i>
                      </a>
                      <a href="#">
                        <i>{instagram}</i>
                      </a>
                      <a href="">
                        <i>{twitter}</i>
                      </a>
                    </div>

                    <button className="" onClick={handleClose}>
                   
                      <i>{btn}</i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="team-btn">
          <Button
            text={"See All Members"}
            link={"team"}
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
