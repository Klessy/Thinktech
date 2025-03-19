import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, cName, icon, link }) => {
  return (
    <Link
      className={!cName ? "btn_main" : cName}
      to={`/${link}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {text}
      {icon}
    </Link>
  );
};

export default Button;
