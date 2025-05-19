import { Fade } from "react-slideshow-image";
import { FaCirclePlus } from "react-icons/fa6";
import "react-slideshow-image/dist/styles.css";

import { dataSlider } from "../data";

import "./styles/hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="slide-container">
        <Fade>
          {dataSlider.map((carousels, index) => {
            const { id, title, desc, img, btn } = carousels;
            return (
              <div className="slide" key={id}>
                <img src={img} alt={title} />
                <div className="inner-carousel">
                  <div className="hero-con container">
                    <h3 className="hero-p">FUN, EASY AND PROJECT-BASED</h3>
                    <h1 style={{ whiteSpace: "pre-line" }} className="">
                      {title}
                    </h1>
                    <p
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {desc}
                    </p>
                    <Link className="btn_main" to="/enroll">
                      <FaCirclePlus
                        style={{
                          color: "white",
                          fontSize: "18px",
                          marginRight: "10px",
                        }}
                      />{" "}
                      <span className="btn_main-txt">{btn}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
