import React, { useState, useEffect } from "react";
import fleche from "../../assets/fleche.png";

function ScrollOnTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    document.addEventListener("scroll", toggleVisibility);
    return () => document.removeEventListener("scroll", toggleVisibility);
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={handleClick}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
      <img src={fleche} alt="scroll button" />
      {/* <span className="sr-only">Back to top</span> */}
    </button>
  );
}
export default ScrollOnTop;
