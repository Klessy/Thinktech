import { Link } from "react-router-dom";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import AboutImg from "../assets/img6.png";
import AboutExpertImg from "../assets/logo/student-2.png";
import AboutBookImg from "../assets/logo/book-2.png";
import AboutRewardImg from "../assets/logo/reward-2.png";
import AboutImgMain from "../assets/about-thinktech-removebg-preview.png";

import "./styles/aboutus.css";
const AboutUs = () => {
  return (
    <section className="about__section">
      <div className="container about__container">
        <div className="about__img-con">
          <div className="blur-effect"></div>
          <div className="about__img-one">
            <img src={AboutImgMain} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="about__img-two">
            <img src={AboutImg} alt="" loading="lazy" decoding="async" />
            <div className="circle-img"></div>
          </div>
        </div>
        <div className="about__who__we__are-con">
          <div className="about__title">
            <span className="pre-title">ABOUT US</span>
            <h2>Knowledge is Power Information is Liberating</h2>
          </div>
          <div className="about__what_we_offer-con">
            <div className="offer">
              <div className="circle-bg">
                <img
                  src={AboutExpertImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about_content">
                <h6>Industry Expert Instructor</h6>
                <p>
                  Online learning has become increasingly popular in recent
                  years, offering a flexible and convenient way for learning.
                </p>
              </div>
            </div>
            <div className="offer">
              <div className="circle-bg">
                <img
                  src={AboutBookImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about_content">
                <h6>Up-to-Date Course Content</h6>
                <p>
                  Our platform also features a collaborative learning
                  environment, where you can connect with fellow learners.
                </p>
              </div>
            </div>
            <div className="offer">
              <div className="circle-bg">
                <img
                  src={AboutRewardImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about_content">
                <h6>Biggest Student Community</h6>
                <p>
                  Our courses are designed by industry experts and delivered
                  through interactive online modules with a great community..
                </p>
              </div>
            </div>
          </div>
          <div className="">
            {/* <Link style={{ color: "#fff" }}>
              Know About Us
              <FaArrowRight />
            </Link> */}
            <Button
              text={"Know About Us"}
              icon={<FaArrowRight />}
              className="flex"
              link={"about"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
