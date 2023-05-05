import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
}

export default Footer;
