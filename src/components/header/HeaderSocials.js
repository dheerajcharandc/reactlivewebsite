import React from 'react';
import {BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs';
import {SiGeeksforgeeks} from 'react-icons/si'
import './headerSocials.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/dheeraj-charan-3a67121b0//" target="_blank" rel="noreferrer"><BsLinkedin className='header__socials-icon'/></a>
    <a href="https://auth.geeksforgeeks.org/user/dheerajcharandc" target="_blank" rel="noreferrer"><SiGeeksforgeeks className='header__socials-icon'/></a>
    <a href="https://www.facebook.com/dheeraj.charan.148" target="_blank" rel="noreferrer"><BsFacebook className='header__socials-icon'/></a>
    <a href="https://www.instagram.com/dheeraj.charan/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer"><BsInstagram className='header__socials-icon'/></a>
    </div>
  )
}

export default HeaderSocials