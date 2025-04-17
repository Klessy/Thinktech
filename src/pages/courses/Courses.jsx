import { Link, useParams } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { BreadCrumb, Button } from "../../components";
import { CgNotes } from "react-icons/cg";
import { coursePageData } from "../../data";
import Course_1 from "../../assets/images/course-1.webp";

import "./courses.css";

const Courses = () => {
  useTitle("Courses");
  const { params } = useParams();
  return (
    <>
      <BreadCrumb title={"Courses"} path={"Course"} />
      <section className="courses__section">
        <div className="container courses__container">
          {coursePageData.map((courses) => {
            const {
              id,
              course_img,
              course_title,
              authorImg,
              author_title,
              course_desc,
              lessons,
              price,
              course_details,
            } = courses;
            return (
              <article className="course__wrapper" key={id}>
                <div to={"/courses/details"} className="course__card">
                  <div className="course__card-inner">
                    <div className="course__card-img">
                      <img src={course_img} alt="" className="course-thumb" />
                      <div className="status-group">
                        <span className="status-01">{course_title}</span>
                      </div>
                    </div>
                    <div className="course__content">
                      <div className="card-top">
                        <div className="authors__details">
                          <div className="author__thumb">
                            <img src={authorImg} alt="" />
                            <span className="author__title">
                              {author_title}
                            </span>
                          </div>
                        </div>
                        <ul className="course__lessons">
                          <li className="course_flex">
                            <CgNotes style={{ fontSize: "20px" }} />
                            <span className="lesson">{lessons} Lessons</span>
                          </li>
                        </ul>
                      </div>
                      <h4 className="course__title">{course_desc}</h4>
                      <div className="card-bottom">
                        <div className="price__wrapper">
                          <span className="course-price">${price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card__hover-action">
                    <div className="hover-content">
                      <div className="content-top">
                        <div className="top-status-bar">
                          <span className="thinktech-status">
                            {course_title}
                          </span>
                        </div>
                      </div>
                      <h4 className="hover-course__title">{course_desc}</h4>
                      <p>{course_details}</p>
                      <div className="hover-bottom-content">
                        <div className="author-meta">
                          <img src={Course_1} alt="" />
                          <span className="author__title">Precious</span>
                        </div>
                        <ul className="edu-meta">
                          <li className="course_flex">
                            <CgNotes style={{ fontSize: "20px" }} />
                            <span className="lesson">16 Lessons</span>
                          </li>
                        </ul>
                      </div>
                      <div className="read-more-btn">
                        {/* <Button
                          text={"Enroll Now"}
                          cName={"course__action-btn"}
                          link={`courses/${id}`}
                        /> */}
                        <Link
                          to={`/courses/${id}`}
                          className="course__action-btn"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Courses;
