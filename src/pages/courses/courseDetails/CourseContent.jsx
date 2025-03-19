import { useCallback, useState, useEffect } from "react";
import { courseContent } from "../../../data";
import AuthorImg from "../../../assets/img4.jpeg";
import CourseDetailSidebar from "./CourseDetailSidebar";
import { MdOutlineTopic } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { PiNotePencilBold } from "react-icons/pi";
// import { LuNotebookPen } from "react-icons/lu";

const CourseContent = ({ course }) => {
  const [courseTab, setCourseTab] = useState(1);
  // const [value, setValue] = useState(1);

  const toggleTab = (index) => {
    setCourseTab(index);
  };

  return (
    <section className="course__content-section">
      {/* <article className="course-content-wrapper"> */}
      <div className="course-summary">
        <ul className="learn-press-nav-tabs course-nav-tabs" data-tabs="4">
          <li
            className={
              courseTab === 1
                ? "course-nav course-nav-tab-overview course-active"
                : "course-nav course-nav-tab-overview"
            }
            onClick={() => toggleTab(1)}
          >
            <label for="tab-overview-input">Overview</label>
          </li>
          <li
            className={
              courseTab === 2
                ? "course-nav course-nav-tab-overview course-active"
                : "course-nav course-nav-tab-overview"
            }
            onClick={() => toggleTab(2)}
          >
            <label for="tab-overview-input">Curriculum</label>
          </li>
          <li
            className={
              courseTab === 3
                ? "course-nav course-nav-tab-overview course-active"
                : "course-nav course-nav-tab-overview"
            }
            onClick={() => toggleTab(3)}
          >
            <label for="tab-overview-input">Instructor</label>
          </li>
          <li
            className={
              courseTab === 4
                ? "course-nav course-nav-tab-overview course-active"
                : "course-nav course-nav-tab-overview"
            }
            onClick={() => toggleTab(4)}
          >
            <label for="tab-overview-input">Review</label>
          </li>
        </ul>
        <article className="course-tab-panels">
          <div
            className={
              courseTab === 1
                ? "course-details active__course-content"
                : "course-details-none"
            }
            onClick={() => toggleTab(1)}
          >
            <h4 className="course__desc-title">Course Description</h4>
            <p className="mb-2">{course.overview?.course_complete_desc}</p>
            {/* <p>{course.overview?.course_complete_desc}</p> */}
            <h4 className="course__desc-title">
              What You’ll Learn From This Course
            </h4>
            <ul className="course__highlights">
              {course.overview?.you_will_learn
                .toString()
                .split("\n")
                .map((str) => (
                  <li>{str}</li>
                ))}
            </ul>
            <h4 className="course__desc-title">Certification</h4>
            <p>{course.overview?.certification}</p>
          </div>
          <div
            className={
              courseTab === 2
                ? "curriculum active__curriculum-content"
                : "curriculum-none"
            }
            onClick={() => toggleTab(2)}
          >
            <h4 className="course__desc-title">Course Introduction</h4>
            {course.introduction
              .toString()
              .split("\n")
              .map((str) => (
                <li>
                  {" "}
                  <SlNote style={{ color: "#525fe1" }} /> {str}
                </li>
              ))}
          </div>
          <div
            className={
              courseTab === 3
                ? "instructor active__instructor-content"
                : "instructor-none"
            }
          >
            <div className="author-img">
              <img src={course.instructor?.instructorImg} alt="" />
            </div>
            <div className="author-details">
              <div className="author-wrapper">
                <span className="author-name">{course.author_title}</span>
                <span className="author-designation">
                  {course.instructor?.instructorRole}
                </span>
              </div>
              <p>{course.instructor?.instructorDesc}</p>
              <ul className="author-socials">
                <li>
                  <a href="#">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              courseTab === 4 ? "review active__review-content" : "review-none"
            }
          >
            <div className="review-wrapper">
              <div className="course-rate__summary">
                <div class="course-rate__summary-value">5.0</div>
                <div class="course-rate__summary-stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="course-rate__summary-text">
                  <span>1</span> rating{" "}
                </div>
              </div>
              <div class="course-rate__details">
                <div class="course-rate__details-row">
                  <span class="course-rate__details-row-star">
                    5{" "}
                    <i
                      class="fas fa-star"
                      style={{
                        color: "#ffa41b",
                        fontSize: "18px",
                        marginLeft: "5px",
                      }}
                    ></i>
                  </span>
                  <div class="course-rate__details-row-value">
                    <div class="rating-gray"></div>
                    {/* <div class="rating"></div> */}
                  </div>
                  <span class="rating-count">1</span>
                </div>
                <div class="course-rate__details-row">
                  <span class="course-rate__details-row-star">
                    5{" "}
                    <i
                      class="fas fa-star"
                      style={{
                        color: "#ffa41b",
                        fontSize: "18px",
                        marginLeft: "5px",
                      }}
                    ></i>
                  </span>
                  <div class="course-rate__details-row-value">
                    <div class="rating-gray"></div>
                    {/* <div class="rating"></div> */}
                  </div>
                  <span class="rating-count">0</span>
                </div>
                <div class="course-rate__details-row">
                  <span class="course-rate__details-row-star">
                    5{" "}
                    <i
                      class="fas fa-star"
                      style={{
                        color: "#ffa41b",
                        fontSize: "18px",
                        marginLeft: "5px",
                      }}
                    ></i>
                  </span>
                  <div class="course-rate__details-row-value">
                    <div class="rating-gray"></div>
                    {/* <div class="rating"></div> */}
                  </div>
                  <span class="rating-count">0</span>
                </div>
                <div class="course-rate__details-row">
                  <span class="course-rate__details-row-star">
                    5{" "}
                    <i
                      class="fas fa-star"
                      style={{
                        color: "#ffa41b",
                        fontSize: "18px",
                        marginLeft: "5px",
                      }}
                    ></i>
                  </span>
                  <div class="course-rate__details-row-value">
                    <div class="rating-gray"></div>
                    {/* <div class="rating"></div> */}
                  </div>
                  <span class="rating-count">0</span>
                </div>
                <div class="course-rate__details-row">
                  <span class="course-rate__details-row-star">
                    5{" "}
                    <i
                      class="fas fa-star"
                      style={{
                        color: "#ffa41b",
                        fontSize: "18px",
                        marginLeft: "5px",
                      }}
                    ></i>
                  </span>
                  <div class="course-rate__details-row-value">
                    <div class="rating-gray"></div>
                    {/* <div class="rating"></div> */}
                  </div>
                  <span class="rating-count">0</span>
                </div>
              </div>
            </div>
            <div className="course-reviews">
              <h3 className="course-review-head">Reviews</h3>
              <ul className="course-review-list">
                <li>
                  <div className="review-author">
                    <img src={AuthorImg} alt="" />
                  </div>
                  <div className="review-author-info">
                    <div className="review-top">
                      <h4>James August</h4>
                      <div className="review-stars-rated">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <div className="review-title">
                      <p>"Outanding Course"</p>
                    </div>
                    <div className="review-text">
                      <p>
                        As Thomas pointed out, Chegg’s survey appears more like
                        a scorecard that details obstacles and challenges that
                        the current university undergraduate student population
                        is going through in their universities and countries
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      {/* <div className="">
        <CourseDetailSidebar />
      </div> */}
      {/* </article> */}
    </section>
  );
};

export default CourseContent;
