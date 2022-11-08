import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="Footer-container">
        <hr />
        <div className="footer">
          <div className="social-links">
            <img src={github} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
          <div className="logo-f">
            <img src={logo} alt="" />
          </div>
          <div className="blur blur-f-1"></div>
          <div className="blur blur-f-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
