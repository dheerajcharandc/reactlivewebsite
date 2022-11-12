import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Qualification from './components/trial/Qualification';

const App = () => {
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  const mobileNum = process.env.REACT_APP_CONTACT_INFO_MOBILE_NUM

  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Qualification/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Contact service_id={service_id} template_id={template_id} public_key={public_key} mobileNum={mobileNum} />
      <Footer/>
    </>
  )
}

export default App;