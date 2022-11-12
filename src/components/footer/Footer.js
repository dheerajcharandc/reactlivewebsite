import React from 'react';
import './footer.css';
import {FaInstagram,FaTwitter} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
    {/* <a href="#" className='footer__logo'>Abhishek Singh</a> */}

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#qualification">Qualification</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Certificates</a></li>
      <li><a href="#contact">Contact Me</a></li>
    </ul>

    <div className="footer__socials">
      
      <a href="https://www.instagram.com/dheeraj.charan/?igshid=YmMyMTA2M2Y%3D" target='_blank' rel="noreferrer"><FaInstagram className='footer__socials-icon'/></a>
      <a href="https://twitter.com/Aryancharan4?t=iWC5HVF7FmLphvJRIkfA_Q&s=09" target='_blank' rel="noreferrer"><FaTwitter className='footer__socials-icon'/></a>
      <a href="https://auth.geeksforgeeks.org/user/dheerajcharandc" target='_blank' rel="noreferrer"><SiGeeksforgeeks className='footer__socials-icon'/></a>
    </div>

    <div className="footer__copyright">
      <h4>Made with &#10084; and 🍺</h4>
      <h4><strong>© Dheeraj Charan</strong></h4>
    </div>

    
    </footer>
  )
}

export default Footer