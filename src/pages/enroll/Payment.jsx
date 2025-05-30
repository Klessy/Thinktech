import { BreadCrumb, Button, SEO } from "../../components";
import { FaWhatsapp } from "react-icons/fa";
import Contact from "../contact/Contact";
import PaystackPop from "@paystack/inline-js";
import { plans } from "../../data";
import WhatsAppButton from "./WhatsAppButton";

import "./payment.css";

const Payment = () => {
  return (
    <>
      <SEO
        title="Enroll | Thinktech Academy"
        description="Join a Class"
        url="https://thinktech.com.ng/enroll"
      />
      <section className="payment__page">
        <BreadCrumb title={"JOIN A CLASS"} path={"payment"} />
        <div className="payment__container container">
          <h2 className="curriculum-title">Curriculum</h2>
          <p>
            Our curriculum is designed using the Google MIT development standard
            for early learners, with milestones to access improvement, and
            activities based on the kid’s learning pattern.
          </p>
          <p>
            Our classes are project based, embedded with fun and practical
            problem-solving activities.
          </p>

          <p>
            {" "}
            Each student gets a material for the class, assessment report and a
            certificate.
          </p>
          <h2 className="price-subtitle">Our Pricing</h2>
          <div className="plan">
            {plans.map((plan) => {
              const {
                name,
                price,
                features,
                time,
                maxStudent,
                reschedule,
                hours,
                duration,
                courses,
                classes,
              } = plan;
              return (
                <div className="gold diamond">
                  <h3>{name}</h3>
                  <span className="pricing-price">
                    <sup className="currency">₦</sup>
                    <span>{price}</span>
                    <sub className="period">/Month</sub>
                  </span>
                  <ul className="pricing-lists">
                    <li class="price-list">
                      <i aria-hidden="true" class="far fa-check-circle"></i>
                      Students: {maxStudent}
                    </li>
                    <li class="price-list">
                      <i aria-hidden="true" class="far fa-check-circle"></i>
                      Time/Date: {time}
                    </li>
                    <li class="price-list">
                      <i aria-hidden="true" class="far fa-check-circle"></i>
                      Reschedule class: {reschedule}
                    </li>
                    <li class="price-list">
                      <i aria-hidden="true" class="far fa-check-circle"></i>
                      Classes: {classes}
                    </li>
                    <li class="price-list">
                      <i aria-hidden="true" class="far fa-check-circle"></i>
                      Hours: {hours}
                    </li>
                    <li class="price-list">
                      <i aria-hidden="true" class="far fa-check-circle"></i>
                      Duration: {duration} Month
                    </li>
                    <li class="price-list">
                      <i aria-hidden="true" class="far fa-check-circle"></i>
                      Courses: {courses}
                    </li>
                  </ul>
                  <ul>
                    {plan.features.map((feat, i) => (
                      <li className="price-list price-action">
                        <i aria-hidden="true" class="far fa-check-circle"></i>
                        <li key={i}>{feat}</li>
                      </li>
                    ))}
                  </ul>
                  <div className="action-btn">
                    {/* <Button text={"Join a Class"} link={""} /> */}
                    <WhatsAppButton plan={plan} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
