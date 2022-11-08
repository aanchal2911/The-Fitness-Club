import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import { useState } from "react";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <img className="logo" src={Logo} alt="" />
        {menuOpen === false && mobile === true ? (
          <div
            style={{
              background: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setmenuOpen(true)}
          >
            <img
              src={bars}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                onClick={() => setmenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="program"
                spy={true}
                smooth={true}
                onClick={() => setmenuOpen(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="reasons"
                spy={true}
                smooth={true}
                onClick={() => setmenuOpen(false)}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="plans"
                spy={true}
                smooth={true}
                onClick={() => setmenuOpen(false)}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="Testimonials"
                spy={true}
                smooth={true}
                onClick={() => setmenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
