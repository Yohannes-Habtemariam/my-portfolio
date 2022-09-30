import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineWork, MdOutlineContactMail } from "react-icons/md";
import { FcSelfServiceKiosk } from "react-icons/fc";
import {AiOutlineComment} from "react-icons/ai"
import "./NavLeft.css";
import { myContext } from "../../App";

const NavLeft = () => {
  const { activeMenu, setActiveMenu } = useContext(myContext);
  return (
    <nav className="nav-items">
      <a href="#"
        onClick={() => setActiveMenu("#")}
        className={activeMenu === "#" ? "active" : ""} >
        <AiFillHome />
      </a>

      <a href="#about" 
         onClick={() => setActiveMenu("#about")}
         className={activeMenu === "#about" ? "active" : ""} >
          <FaUserTie />
      </a>

      <a href="#experience"
        onClick={() => setActiveMenu("#experience")}
        className={activeMenu === "#experience" ? "active" : ""} >
        <MdOutlineWork />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveMenu("#portfolio")}
        className={activeMenu === "#portfolio" ? "active" : ""} >  
        <FcSelfServiceKiosk />
      </a>

      <a
        href="#testimonials"
        onClick={() => setActiveMenu("#testimonials")}
        className={activeMenu === "#testimonials" ? "active" : ""} >  
        <AiOutlineComment />
      </a>

      <a href="#contact"
        onClick={() => setActiveMenu("#contact")}
        className={activeMenu === "#contact" ? "active" : ""}
      >
        <MdOutlineContactMail />
      </a>
    </nav>
  );
};

export default NavLeft;
