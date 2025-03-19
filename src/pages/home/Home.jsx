import {
  Hero,
  Services,
  SkillSlider,
  AboutUs,
  PopularCourses,
  HowItWorks,
  NewsLetter,
  Projects,
  Team,
  FAQs,
} from "../../components";
// import MainHeader from "../../components/MainHeader";
import Testimonial from "../../components/Testimonial";
import { useTitle } from "../../hooks/useTitle";

import "./home.css";

const Home = () => {
  useTitle("Home");
  return (
    <div className="">
      <Hero />
      <Services />
      <SkillSlider />
      <AboutUs />
      <PopularCourses />
      <HowItWorks />
      <Projects />
      <NewsLetter />
      <Team />
      <FAQs />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
