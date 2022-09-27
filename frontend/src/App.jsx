import React from 'react';
import Nav from './componets/nav/Nav';
import Header from './componets/header/Header';
import About from './componets/about/About';
import Contact from './componets/contact/Contact';
import Experience from './componets/experience/Experience';
import Footer from './componets/footer/Footer';
import Portfolio from './componets/portfolio/Portfolio';
import Services from './componets/services/Services';
import Testimonial from './componets/testimonial/Testimonial';

const App = () => {
  return (
    <React.Fragment> 
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;