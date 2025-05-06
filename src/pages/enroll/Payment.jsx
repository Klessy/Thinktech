import { BreadCrumb, Button, SEO } from "../../components";
import Contact from "../contact/Contact";
import PaystackPop from "@paystack/inline-js";

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
            <div className="gold">
              <h3>Gold</h3>
              <span className="pricing-price">
                <sup className="currency">₦</sup>
                <span>25,000</span>
                <sub className="period">/Month</sub>
              </span>
              <ul className="pricing-lists">
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Students: 4
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Time/Date: Flexible
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Reschedule class: No
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Classes: 8
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Hours: 8
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Duration: 1 Month
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Courses: 1
                </li>
              </ul>

              <div className="action-btn">
                <Button text={"Join a Class"} link={""} />
              </div>
            </div>

            <div className="diamond">
              <h3>Diamond</h3>
              <span className="pricing-price">
                <sup className="currency">₦</sup>
                <span>50,000</span>
                <sub className="period">/Month</sub>
              </span>
              <ul className="pricing-lists">
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Students: 1
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Time/Date: Flexible
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Reschedule class: Yes
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Classes: 12
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Hours: 1:30mins
                </li>
                <li class="price-list">
                  <i aria-hidden="true" class="far fa-check-circle"></i>
                  Duration: 1 Month
                </li>
                {/* <li class="price-list">
                <i aria-hidden="true" class="far fa-check-circle"></i>
                Courses: 1
              </li> */}
              </ul>

              <div className="action-btn">
                <Button text={"Join a Class"} link={""} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
