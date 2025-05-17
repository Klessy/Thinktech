import React from "react";
import { Helmet } from "react-helmet"; // optional, but helps SEO

const LocationPage = () => {
  return (
    <div className="location-container">
      <Helmet>
        <title>Tech Skills in Delta | ThinkTech</title>
        <meta
          name="description"
          content="ThinkTech offers hands-on tech skill acquisition programs in Lagos, Nigeria, empowering kids and adults with real-world digital skills."
        />
      </Helmet>

      <h1 className="location-title">Tech Skills in Delta, Sapele</h1>

      <p className="location-description">
        ThinkTech offers hands-on tech skill acquisition programs in{" "}
        <strong>Sapele, Delta State, Nigeria</strong>, empowering both kids and
        adults with real-world digital skills.
      </p>

      <ul className="location-features">
        <li>In-person and online classes</li>
        <li>Beginner to advanced courses</li>
        <li>Trained instructors with industry experience</li>
        <li>Certificates upon completion</li>
      </ul>

      <p className="location-description">
        Whether you're a student, professional, or parent looking for
        skill-building opportunities for your kids, ThinkTech has the right
        program for you in Lagos.
      </p>

      <p className="enroll-link ">
        <a href="/enroll">Enroll Now</a>
      </p>
    </div>
  );
};

export default LocationPage;
