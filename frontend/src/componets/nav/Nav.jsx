import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineWork, MdOutlineContactMail } from "react-icons/md";
import { FcSelfServiceKiosk } from "react-icons/fc";
import "./Nav.css";

const Nav = () => {
  // State varible to controll the active section
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="nav-items">
      <a href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""} >
        <AiFillHome />
      </a>

      <a href="#about" 
         onClick={() => setActiveNav("#about")}
         className={activeNav === "#about" ? "active" : ""} >
          <FaUserTie />
      </a>

      <a href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""} >
        <MdOutlineWork />
      </a>

      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""} >  
        <FcSelfServiceKiosk />
      </a>

      <a href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineContactMail />
      </a>
    </nav>
  );
};

export default Nav;