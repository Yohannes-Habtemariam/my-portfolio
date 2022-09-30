import React, { useState, useContext } from 'react'
import { myContext } from '../../App';
import "./NavRight.css";

const NavRight = () => {
   const { activeMenu, setActiveMenu } = useContext(myContext);
  return (
    <div className={"menu " + (activeMenu && "active")}>
        <ul>
            <li onClick={() => setActiveMenu(!activeMenu)}>
                <a href="#">Home</a>
            </li>

            <li onClick={() => setActiveMenu(!activeMenu)}>
                <a href="#about">About</a>
            </li>

            <li onClick={() => setActiveMenu(!activeMenu)}>
                <a href="#experience">Experience</a>
            </li>

            <li onClick={() => setActiveMenu(!activeMenu)}>
                <a href="#portfolio">Portfolio</a>
            </li>

            <li onClick={() => setActiveMenu(!activeMenu)}>
                <a href="#testimonials">testimonials</a>
            </li>

            <li onClick={() => setActiveMenu(!activeMenu)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default NavRight;