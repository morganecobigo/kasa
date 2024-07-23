import React from "react";
import logo from "../../assets/logo/Logo2.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logo} alt="kasa" className="footer_logo" />
      <p className="footer_title">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
