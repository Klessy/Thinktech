import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { locations } from "../../data";

import "./location.css";

const LocationPage = () => {
  const { city } = useParams();

  const location = locations.find((loc) => loc.slug === city);

  if (!location) {
    return (
      <div className="location-container">
        <h1 className="not-found ">City Not Found</h1>
        <p>This location doesn’t exist in our list.</p>
      </div>
    );
  }

  return (
    <div className="location-title">
      <Helmet>
        <title>{location.heading} | ThinkTech</title>
        <meta name="description" content={location.description} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">{location.heading}</h1>

      <p className="location-description ">{location.description}</p>

      <ul className="location-features">
        <li>In-person and online classes</li>
        <li>Beginner to advanced courses</li>
        <li>Trained instructors with industry experience</li>
        <li>Certificates upon completion</li>
      </ul>

      <p className="enroll-link">
        <a href="/enroll">Enroll Now</a>
      </p>
    </div>
  );
};

export default LocationPage;
