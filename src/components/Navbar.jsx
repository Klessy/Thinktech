import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../assets/logo/thinktech.png";
import ThinktechLogo from "../assets/logo/thinktech-logo.png";

import { navLink } from "../data";

import "./styles/navbar.css";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const [isNavShowing, setIsNavShowing] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <nav>
      <div className="nav__container">
        <div className="navbar__img">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="thinktech-img"
          >
            <img src={Logo} alt="" className="thinktech-logo" />
            <img src={ThinktechLogo} alt="" className="mobile-logo" />
            <span className="company_name">hinktech</span>
            {/* <h1>ThinkTech</h1> */}
          </Link>
        </div>
        <ul className="navbar__links">
          {navLink.map((links, index) => {
            const { id, name, path } = links;
            return (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          {/* <button className="nav__toggle-btn" onClick={ ()=> setIsNavShowing(prev => !prev)}>
        {
          isNavShowing ? <GiHamburgerMenu /> : <MdOutlineClose/>
        }
      </button> */}

          {/* MOBILE VIEW */}
          <button
            className="mobile__menu"
            onClick={() => setIsNavShowing((prev) => !prev)}
          >
            <GiHamburgerMenu className="spin__right" />
          </button>
        </ul>
      </div>
      <div className="mobile__navbar">
        <ul
          className={`mobile__links ${
            isNavShowing ? "show__nav" : "hide__nav"
          }`}
        >
          {navLink.map((links) => {
            const { id, name, path } = links;
            return (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          <button
            onClick={() => setIsNavShowing((prev) => !prev)}
            className="mobile-navbar__close"
          >
            <MdOutlineClose className="spin__left" />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
