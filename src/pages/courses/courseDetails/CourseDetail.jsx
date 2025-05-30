import { useParams } from "react-router-dom";
import { BreadCrumb, SEO } from "../../../components";
import CourseImg from "../../../assets/images/course-1.webp";
import CourseContent from "./CourseContent";
import CourseDetailSidebar from "./CourseDetailSidebar";
import RelatedCourses from "./RelatedCourses";
import { coursePageData } from "../../../data";
import "./courseDetail.css";
import { useTitle } from "../../../hooks/useTitle";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursePageData.find((item) => item.slug == courseId);
  // useTitle(course.course_title);
  return (
    <>
      <SEO
        title={`${course.course_title} | Thinktech Academy`}
        description={`${course.course_desc} | Thinktech Academy`}
        url={`https://thinktech.com.ng/courses/${courseId}`}
      />
      <BreadCrumb title={course.course_title} path={"CourseDetail"} />
      <section className="course__detail-section">
        <div className="course__detail-img">
          <img src={CourseImg} alt="" />
        </div>

        <div className=" container course__detail-con">
          <article className="course-content-wrapper">
            <div className="course__detail-content">
              <div className="content-details-top">
                <div className="author-thumb">
                  <img src={course.authorImg} alt="" />
                  <span className="author-title">
                    {course.author_title} - {courseId}
                  </span>
                </div>
              </div>
              <h3 className="course-heading">{course.course_desc}</h3>
              <div className="">
                <CourseContent course={course} />
              </div>
            </div>
            <div className="">
              <CourseDetailSidebar course={course} />
            </div>
          </article>
          <div>
            <RelatedCourses />
          </div>
        </div>
        {/* );
        })} */}
      </section>
    </>
  );
};

export default CourseDetail;
