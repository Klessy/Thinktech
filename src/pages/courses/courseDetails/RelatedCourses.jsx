import RelatedCourseImg from "../../../assets/images/course-4.webp";
import DataAnalysisImg from "../../../assets/images/course-5.webp";
import AnimationImg from "../../../assets/images/course-6.webp";
import TechImg_One from "../../../assets/logo/css.png";
import TechImg_Two from "../../../assets/logo/css.png";
import { CgNotes } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import "./relatedCourses.css";

const RelatedCourses = () => {
  return (
    <section className="related__courses-section">
      <div className="section-title">
        <span className="pre-title">Related Courses</span>
        <h2>COURSES YOU MAY LIKE</h2>
      </div>
      <div className="related__courses-container">
        <div className="related__courses-card">
          <div className="single-course">
            <div className="thumbnail">
              <img src={RelatedCourseImg} alt="" />
            </div>
            <div className="content">
              <ul className="related__courses-schedule">
                <li className="flex">
                  <CgNotes style={{ fontSize: "18px" }} />
                  <span className="text-2xl ml-1">16 lessons</span>
                </li>
                <li className="flex">
                  <IoMdTime style={{ fontSize: "18px" }} />
                  <span className="text-2xl ml-1">4 weeks</span>
                </li>
              </ul>
              <h4 className="desc">The Complete Guide to 3D Animation</h4>
              <div className="border-top">
                <div className="related__courses-stack">
                  <img
                    src={TechImg_One}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={TechImg_Two}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related__courses-card">
          <div className="single-course">
            <div className="thumbnail">
              <img src={DataAnalysisImg} alt="" />
            </div>
            <div className="content">
              <ul className="related__courses-schedule">
                <li className="flex">
                  <CgNotes style={{ fontSize: "18px" }} />
                  <span className="text-2xl ml-1">16 lessons</span>
                </li>
                <li className="flex">
                  <IoMdTime style={{ fontSize: "18px" }} />
                  <span className="text-2xl ml-1">4 weeks</span>
                </li>
              </ul>
              <h4 className="desc">The Complete Guide to 3D Animation</h4>
              <div className="border-top">
                <div className="related__courses-stack">
                  <img
                    src={TechImg_One}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={TechImg_Two}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related__courses-card">
          <div className="single-course">
            <div className="thumbnail">
              <img src={AnimationImg} alt="" />
            </div>
            <div className="content">
              <ul className="related__courses-schedule">
                <li className="flex">
                  <CgNotes style={{ fontSize: "18px" }} />
                  <span className="text-2xl ml-1">lesson</span>
                </li>
                <li className="flex">
                  <IoMdTime style={{ fontSize: "18px" }} />
                  <span className="text-2xl ml-1">Duration</span>
                </li>
              </ul>
              <h4 className="desc">The Complete Guide to 3D Animation</h4>
              <div className="border-top">
                <div className="related__courses-stack">
                  <img
                    src={TechImg_One}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={TechImg_Two}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
