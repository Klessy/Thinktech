import Marquee from "react-fast-marquee";
import { skillMarquee } from "../data";

import "./styles/skillSlider.css";
const SkillSlider = () => {
  return (
    <section className="skillslider__section">
      <div className="container skillslider__container">
        <Marquee pauseOnHover={true} speed={30} delay={5}>
          <div className="image__wrapper-con">
            {skillMarquee.map((skillsImg, index) => {
              const { img } = skillsImg;
              return (
                <div className="image__wrapper">
                  <img loading="lazy" src={img} alt="" />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SkillSlider;
