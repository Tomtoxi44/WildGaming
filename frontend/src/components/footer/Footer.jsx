import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com">
        <FaFacebook />
      </a>
      <a href="https://www.youtube.com">
        <FaYoutube />
      </a>
    </div>
  );
}

export default Footer;
