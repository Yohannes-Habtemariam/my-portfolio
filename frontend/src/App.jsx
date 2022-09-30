import React, { useState } from "react";
import About from "./componets/about/About";
import Contact from "./componets/contact/Contact";
import Experience from "./componets/experience/Experience";
import Footer from "./componets/footer/Footer";
import Portfolio from "./componets/portfolio/Portfolio";
import Testimonial from "./componets/testimonial/Testimonial";
import Home from "./componets/home/Home";
import NavLeft from "./componets/navLeft/NavLeft";
import TopNavbar from "./componets/navTop/NavTop";
import NavRight from "./componets/navRight/NavRight";

export const myContext = React.createContext();

const App = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <myContext.Provider value={{ activeMenu, setActiveMenu }}>
      <React.Fragment>
        <TopNavbar />
        <NavLeft />
        <NavRight/>
        
        <div>
          <Home />
          <About />
          <Experience />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </React.Fragment>
    </myContext.Provider>
  );
};

export default App;
