import React from "react";
import { FAQs } from "../../components";
import BreadCrumbs from "../../components/BreadCrumb";

const HowItWorksPage = () => {
  return (
    <section className="how_it_works__page">
      <BreadCrumbs title={"Take a Tour with Us"} path={"How it works"} />
      <div className="how_it_works__container">
        <FAQs />
      </div>
    </section>
  );
};

export default HowItWorksPage;
