import React from "react";
import { locations } from "../../data";

import "./location.css";

const Locations = () => {
  return (
    <div className="locations-container">
      <h1 className="locations-title">Explore Tech Training by City</h1>
      <ul className="locations-list">
        {locations.map((loc) => (
          <li key={loc.slug}>
            <a href={`/tech-skills/${loc.slug}`} className="locations-link">
              {loc.heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
