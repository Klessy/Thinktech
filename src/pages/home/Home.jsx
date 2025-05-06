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
  SEO,
} from "../../components";
// import MainHeader from "../../components/MainHeader";
import Testimonial from "../../components/Testimonial";
import { useTitle } from "../../hooks/useTitle";

import "./home.css";

const Home = () => {
  // useTitle("Home");
  return (
    <>
      <SEO
        title="Home | Thinktech Academy"
        description="Empowering students and businesses with tech skills and digital presence."
        url="https://thinktech.com.ng"
      />
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
    </>
  );
};

export default Home;
