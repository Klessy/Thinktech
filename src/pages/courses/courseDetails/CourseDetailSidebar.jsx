import { IoTimeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { RiBarChart2Line } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import CourseSidebarImg from "../../../assets/images/course-preview.png";
import { Button } from "../../../components";

const CourseDetailSidebar = ({ course }) => {
  return (
    <aside className="course-details-sidebar">
      <div className="course-details-sidebar-inner">
        <div className="course-sidebar-img">
          <img src={CourseSidebarImg} alt="" />
        </div>
        <div className="course-details-sidebar-content">
          <ul className="course-meta-information">
            <li className="course-details-features-item">
              <span className="">
                <IoTimeOutline className="sidebar-icon" />
                <span>Duration</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.duration}
              </span>
            </li>
            <li className="course-details-features-item">
              <span className="">
                <CgNotes className="sidebar-icon" />
                <span>Lessons</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.lessons}
              </span>
            </li>
            <li className="course-details-features-item">
              <span className="">
                <RiBarChart2Line className="sidebar-icon" />
                <span>Skill Level</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.skillLevel}
              </span>
            </li>
            <li className="course-details-features-item">
              <span className="">
                <IoLanguageSharp className="sidebar-icon" />
                <span>Language</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.language}
              </span>
            </li>
            <li className="course-details-features-item">
              <span className="">
                <MdOutlineQuiz className="sidebar-icon" />
                <span>Quizzes</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.quizzes}
              </span>
            </li>
            <li className="course-details-features-item">
              <span className="">
                <LiaCertificateSolid className="sidebar-icon" />
                <span>Certificate</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.certificate}
              </span>
            </li>
            <li className="course-details-features-item">
              <span className="">
                <AiOutlinePercentage className="sidebar-icon" />
                <span>Pass Percentage</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.passPercentage}%
              </span>
            </li>
            <li className="course-details-features-item">
              <span className="">
                <MdOutlineDateRange className="sidebar-icon" />
                <span>Deadline</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.deadline}
              </span>
            </li>
            <li className="course-details-features-item">
              <span className="">
                <RxPerson className="sidebar-icon" />
                <span>Instructor</span>
              </span>
              <span className="course-details-feature-item-value">
                {course.courseSidebar?.instructorName}
              </span>
            </li>
          </ul>
          <div className="course-details-sidebar-btns">
            <div className="">
              <Button text={"Price"} cName={"course-price-btn"} />
            </div>
            <div className="">
              <Button text={"Buy Now"} cName={"purchase-course"} />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CourseDetailSidebar;
