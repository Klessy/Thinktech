import React from "react";
import { BreadCrumb, SEO } from "../../components";
import { useTitle } from "../../hooks/useTitle";
import WhoWeAre from "./components/WhoWeAre";
import WhyUs from "./components/WhyUs";
import FreeWorkshop from "./components/FreeWorkshop";

import "./about.css";
import AboutTeam from "./components/AboutTeam";

const About = () => {
  // useTitle("About");
  return (
    <>
      <SEO
        title="About | Thinktech Academy"
        description=" Think Tech offers a streamlined and comprehensive approach to
        learning the latest tech skills, making it easier than ever to
        thrive in the digital era."
        url="https://thinktech.com.ng/about"
      />
      <section className="about__page">
        <BreadCrumb title={"ABOUT US"} path={"About Us"} />
        <WhoWeAre />
        <WhyUs />
        <FreeWorkshop />
        <AboutTeam />
      </section>
    </>
  );
};

export default About;
