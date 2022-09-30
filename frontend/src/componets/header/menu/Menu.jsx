import React, { useState } from 'react'
import "./Menu.css"

const Menu = () => {
    const [menubarActive, setMenubarActive] = useState(false);
  return (
    <div className={"menu " + (menubarActive && "active")}>
        <ul>
            <li>
                <a href="#header">Home</a>
            </li>

            <li>
                <a href="#about">About</a>
            </li>

            <li>
                <a href="#experience">Experience</a>
            </li>

            <li>
                <a href="#portfolio">Portfolio</a>
            </li>

            <li>
                <a href="#testimonials">Testimonails</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu