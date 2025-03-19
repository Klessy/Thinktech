import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../../../components";
import WorkShopImg from "../../../assets/images/computer-workshop.jpg";
import FreeHandouts from "../../../assets/logo/winner-05-2.png";
import ProjectGuide from "../../../assets/logo/offer-icon-01-2.png";

const FreeWorkshop = () => {
  return (
    <section className="workshop__section">
      <div className="container workshop__container">
        <div className="workshop__content">
          <span className="text-white">Free Workshop</span>
          <h2>Join our Free Trial Class</h2>
          {/* <p>Having any doubt feel free to check our free trial classes where you
            will have a first hand knowledge</p> */}
          <p>
            Join us at our “Free Workshop” event to expand your knowledge, gain
            new insights, and connect with like-minded individuals. Our expert
            speakers will provide valuable insights on a range of topics.
            practical sessions will be carried out
          </p>
          <div className="workshop__free">
            <div className="workshop__take-away">
              <img src={FreeHandouts} alt="" />
              <h6 className="workshop__free-title">10+</h6>
              <span className="free">Comprehensive handout</span>
            </div>
            <div className="workshop__take-away">
              <img src={ProjectGuide} alt="" />
              <h6 className="workshop__free-title">10+</h6>
              <span className="free">Completed Projects</span>
            </div>
          </div>
          <div className="">
            <Button
              text={"More Upcoming Workshop"}
              cName={"workshop-btn"}
              icon={<FaArrowRight />}
            />
          </div>
        </div>
        <div className="workshop__img">
          <img src={WorkShopImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FreeWorkshop;
