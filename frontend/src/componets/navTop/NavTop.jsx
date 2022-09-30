import React, { useContext } from "react";
import { myContext } from "../../App";
import "./NavTop.css";

const NavTop = () => {
  const { activeMenu, setActiveMenu } = useContext(myContext);

  return (
    <div className={"topbar " + (activeMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#" className="logo">
            LisaConsult
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setActiveMenu(!activeMenu)} >
            <span className="line-one"></span>
            <span className="line-two"></span>
            <span className="line-three"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
