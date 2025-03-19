import { weOffer } from "../../../data";
import WhyBgImg from "../../../assets/bg/shape-02-07-2.png";
import Shape_1 from "../../../assets/logo/service-icon-01.png";
import Shape_2 from "../../../assets/logo/service-icon-02.png";
import Shape_3 from "../../../assets/logo/service-icon-03.png";

const WhyUs = () => {
  return (
    <section className="whyus__section">
      <div className="container whyus__container">
        <div className="whyus__title text-center">
          <span className="pre-title">What we Offer</span>
          <h2>Why ThinkTech Stand Out</h2>
        </div>
        <div className="whyus__bg-img">
          <img src={WhyBgImg} alt="" />
        </div>
        <div className="whyus__wrapper">
          {weOffer.map((offer) => {
            const { id, img, title, desc } = offer;
            return (
              <div className="whyus__card" key={id}>
                <div className="whyus-img">
                  <img src={img} alt="" />
                </div>
                <div className="shape-list">
                  <img src={Shape_1} alt="" className="shape-1" />
                  <img src={Shape_2} alt="" className="shape-2" />
                  <img src={Shape_3} alt="" className="shape-3" />
                </div>
                <h6>{title}</h6>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
