import { Link } from "react-router-dom";
import Button from "./Button";
import { CgNotes } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { coursesData } from "../data";

import "./styles/popularCourses.css";
const PopularCourses = () => {
  return (
    <section className="popular__courses-section">
      <div className="container popular__courses-container">
        <div className="popular__courses-title text-center">
          <span className="pre-title">FEATURED COURSES</span>
          <h2>Explore Our Popular Courses</h2>
        </div>
        <div className="popular__courses-wrapper">
          {coursesData.map((courses) => {
            const {
              id,
              img,
              author,
              authorImg,
              lessons,
              duration,
              desc,
              feature,
              techImg_one,
              techImg_two,
              techImg_three,
              techImg_four,
              course_link,
            } = courses;
            return (
              <div className="popular__courses-card" key={id}>
                <div className="popular__courses_card-img">
                  <img
                    src={img}
                    className="hover-img"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="featured">{feature}</div>
                </div>
                <div className="right">
                  <div className="popular__courses-author">
                    <div className="popular__courses-author-img">
                      <img
                        src={authorImg}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="author-title">{author}</span>
                  </div>
                  <ul className="popular__courses-schedule">
                    <li className="flex">
                      <div className="rect-bg">
                        <CgNotes style={{ fontSize: "18px" }} />
                      </div>
                      <span className="text-xl">{lessons}</span>
                    </li>
                    <li className="flex">
                      <div className="rect-bg bg-2">
                        <IoMdTime style={{ fontSize: "18px" }} />
                      </div>
                      <span className="text-xl">{duration}</span>
                    </li>
                  </ul>
                  <Link
                    to={course_link}
                    className="popular__courses-link"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    {desc}
                  </Link>
                  <div className="popular__courses-stack">
                    <img
                      src={techImg_one}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={techImg_two}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={techImg_three}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={techImg_four}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="popular__courses-btn text-center">
          <Button
            text={"View All Courses"}
            icon={<FaArrowRight />}
            link={"courses"}
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
