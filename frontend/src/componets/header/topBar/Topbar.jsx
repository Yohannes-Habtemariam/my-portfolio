import React, { useState } from 'react'
import "./Topbar.css";

const Topbar = () => {
    const [menubarActive, setMenubarActive] = useState(false);

  return (
    <div className={"topbar " + (menubarActive && "active")}>
        <div className='wrapper'>
            <div className='left'>
                <a href="#header" className='logo'>LisaConsult</a>
            </div>
            <div className='right'>
                <div className='hamburger' onClick={()=> setMenubarActive(!menubarActive)}>
                    <span className='line-one'></span>
                    <span className='line-two'></span>
                    <span className='line-three'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar