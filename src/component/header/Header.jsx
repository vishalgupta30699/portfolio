import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  /**
   * Hide or show header code when scrolling
  const [show, setShow] = useState("show");
  const [lastScrollY, setLastScrollY] = useState(null);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (lastScrollY < window.scrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  */

  return (
    <nav className={`header`}>
      <div className="header__logo">
        <p onClick={scrollToTop}>Vishal.dev</p>
      </div>
      <div className="header__menu">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        {/* <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link> */}
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
