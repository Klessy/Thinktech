import { Link } from "react-router-dom";

import "./styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__container container">
        <div className="footer__address">
          <h5>About</h5>
          <p>Africa’s software engineering school for beginners.</p>
          <ul className="footer__location">
            <li>
              <a href="#">
                <i className="fas fa-map-marker-alt"></i>
              </a>
              "Nigeria"
              <br />
              "Delta State Sapele"
            </li>
            <li>
              <a href="#">
                <i className="far fa-envelope"></i>
              </a>
              thinktech@gmail.com
            </li>
            <li>
              <a href="#">
                <i className="fas fa-tty"></i>
              </a>
              +2349035917372
            </li>
          </ul>
          {/* <ul className="social_link">
            <li>
              <a href="#">
                <i className="far fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
          </ul> */}
        </div>
        <div className="footer__address">
          <h5>Our Courses</h5>
          <ul className="footer__courses">
            <li>
              <Link to="">Full Stack development</Link>
            </li>
            <li>
              <Link to="">Data Analysis</Link>
            </li>
            <li>
              <Link to="">Animation</Link>
            </li>
            <li>
              <Link to="">Graphic Design</Link>
            </li>
            <li>
              <Link to="">Animation</Link>
            </li>
            <li>
              <Link to="">Microsoft Suites</Link>
            </li>
          </ul>
        </div>
        <div className="footer__address">
          <h5>Quick Links</h5>
          <ul className="footer__address-link">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Courses</Link>
            </li>
            <li>
              <Link to="">Gallery</Link>
            </li>
            <li>
              <Link to="">Team</Link>
            </li>
          </ul>
        </div>
        <div className="footer__address">
          <h5>Connect</h5>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <i className="far fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 Design by Team ThinkTech Templates</p>
      </div>
    </footer>
  );
};

export default Footer;
