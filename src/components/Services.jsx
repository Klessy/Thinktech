import React from "react";
import { Link } from "react-router-dom";
import ServiceBg from "../assets/bg/shape.png";
import ServiceBg_2 from "../assets/bg/shape-2.png";

import { serviceData } from "../data";

import { MdHomeRepairService } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";

import "./styles/services.css";
const Services = () => {
  return (
    <section className="service__section">
      <div className="container service__container">
        <div className="service-txt text-center">
          <span className="pre-title">What we Offer</span>
          <h2>Learn New Skills When and Where you Like</h2>
        </div>
        <div className="service-bg">
          <img src={ServiceBg} alt="" />
        </div>
        <div className="service-bg_2">
          <img src={ServiceBg_2} alt="" />
        </div>
        <div className="service__cards">
          {serviceData.map((services) => {
            const { id, icon, title, desc, btn } = services;
            return (
              <div className="service-card" key={id}>
                <div className="service-card_inner">
                  <div className="icon">
                    <span>
                      {/* <MdHomeRepairService style={{ fontSize: "30px" }} /> */}
                      <i style={{ fontSize: "30px" }}>{icon}</i>
                    </span>
                  </div>
                  <div className="content">
                    <h6>{title}</h6>
                    <p>{desc}</p>
                    <div className="read-more">
                      <Link className="learn__more" to={`/courses/${id}`}>
                        {btn}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
