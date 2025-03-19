import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/astronaut-suit.webp";
import { useTitle } from "../../hooks/useTitle";

import "./notfound.css";

const NotFound = () => {
  useTitle("Page Not Found");
  return (
    <section className="notfound__page">
      <div className="container notfound__con">
        <div className="notfound-img">
          <img src={NotFoundImg} alt="" />
        </div>
        <div className="error-message">
          <h3 className="error-message-heading">404</h3>
          <p className="error-message-txt">OPPS! PAGE NOT FOUND</p>
          <p className="something_wrong">
            Something went wrong here! Look like you're lost in space
          </p>
          <Link to="/" className="page-error-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
