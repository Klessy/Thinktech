import { Slide, Fade, Zoom } from "react-slideshow-image";
import { Button } from "../../../components";

// import AboutImg from "../../../assets/img6.png";
// import AboutImg from "../../../assets/img6.png";
import AboutImg from "../../../assets/images/cross-sitting-to-learn.png";
import { aboutSlider } from "../../../data";

const WhoWeAre = () => {
  return (
    <section className="who__we__are">
      <div className="container who__we__are-con">
        <div className="who__we__are-txt">
          <h2>
            Think Tech offers a streamlined and comprehensive approach to
            learning the latest tech skills, making it easier than ever to
            thrive in the digital era.
          </h2>
          <span className="divider"></span>
          <div className="who__we__are-p">
            <p>
              Are you ready to unlock your potential in the tech world? At Think
              Tech, we’re your one-stop destination for learning the in-demand
              skills that will transform you from a beginner into an advanced
              tech developer. Whether you're looking to build your expertise or
              empower your kids with the skills of the future, we’ve got you
              covered!
            </p>
            <p>
              Whether you're pursuing a tech career or seeking a coding
              instructor for your kids, Think Tech provides the tools,
              resources, and guidance you need to succeed.
            </p>
          </div>
          <div className="who__we__are-btn">
            <Button text={"Enroll Now"} />
          </div>
        </div>
        <div className="about__img">
          {
            <Zoom scale={0.7} indicators={true} arrows={false} duration={3000}>
              {aboutSlider.map((carousels, index) => {
                const { id, img } = carousels;
                return (
                  <div className="about__slide" key={id}>
                    <img src={img} alt="Best School" />
                  </div>
                );
              })}
            </Zoom>
          }
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
