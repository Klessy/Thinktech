import React from "react";
import { BreadCrumb } from "../../components";
import { useTitle } from "../../hooks/useTitle";
import WhoWeAre from "./components/WhoWeAre";
import WhyUs from "./components/WhyUs";
import FreeWorkshop from "./components/FreeWorkshop";

import "./about.css";
import AboutTeam from "./components/AboutTeam";

const About = () => {
  useTitle("About");
  return (
    <section className="about__page">
      <BreadCrumb title={"ABOUT US"} path={"About Us"} />
      <WhoWeAre />
      <WhyUs />
      <FreeWorkshop />
      <AboutTeam />
    </section>
  );
};

export default About;
