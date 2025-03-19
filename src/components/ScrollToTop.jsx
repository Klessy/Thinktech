import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 900) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="scroll__con">
      <button
        className={`scroll__top ${scrollTop ? "show-scroll" : "hide-scroll"}`}
        onClick={() => window.scroll(0, 0)}
      >
        <TbArrowBigUpLineFilled />
      </button>
    </div>
  );
};

export default ScrollToTop;
