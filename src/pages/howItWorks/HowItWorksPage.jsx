import React from "react";
import { FAQs, SEO } from "../../components";
import BreadCrumbs from "../../components/BreadCrumb";

const HowItWorksPage = () => {
  return (
    <>
      <SEO
        title="How it Works | Thinktech Academy"
        description="Join Us Today as we take you on a tour through our programs"
        url="https://thinktech.com.ng/how_it_works"
      />
      <section className="how_it_works__page">
        <BreadCrumbs title={"Take a Tour with Us"} path={"How it works"} />
        <div className="how_it_works__container">
          <FAQs />
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
