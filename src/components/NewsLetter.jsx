import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";

import "./styles/newsletter.css";
const NewsLetter = () => {
  return (
    <section className="newsletter__section">
      <div className="container newsletter__container">
        <div className="newsletter__content">
          <span className="newsletter__txt">Let us Help</span>
          <h2>Finding Your Right Courses</h2>
        </div>
        <div className="">
          <Button
            text={"Learn from today"}
            cName={"newsletter__btn"}
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
