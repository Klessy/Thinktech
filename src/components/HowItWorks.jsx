import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
import HowItWorksImg from "../assets/images/thinktech-students-with-laptops-ready-to-learn.jpg";
import BgShapeOne from "../assets/bg/shape-4.png";
import BgShapeTwo from "../assets/bg/shape-3.png";
import BgRotate from "../assets/bg/video-infinite-rotate-2.png";
import "./styles/how_it_works.css";
const HowItWorks = () => {
  return (
    <section className="how__it__works-section">
      <div className="how__it__works-con">
        <div className="bg-overlay"></div>
        <div className="how__it__works-wrapper">
          <div className="how__it__works-shape-one">
            <img src={BgShapeOne} alt="" loading="lazy" />
          </div>
          <div className="how__it__works-shape-two">
            <img src={BgShapeTwo} alt="" />
          </div>
          <div className="bg-rotate">
            <img src={BgRotate} decoding="async" alt="" />
          </div>
          <div className="how__it__works-img">
            <img src={HowItWorksImg} alt="" />
          </div>
          <div className="how__it__works-content">
            <div className="how__it__works-title">
              <span className="pre-title">Learn From Today</span>
              <h2>
                Transform your Life <br /> Through Education
              </h2>
            </div>
            <p>
              Our online learning platform is designed to be flexible, enabling
              you to fit your learning around your busy schedule. You can access
              the courses on any devic, including desktop computers
            </p>
            <div className="">
              <Button
                text={"How it Works"}
                icon={<FaArrowRight />}
                link={"how_it_works"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
