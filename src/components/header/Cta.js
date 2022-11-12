import React from 'react';
import CV from '../../assets/DHEERAJCV.pdf';
import './cta.css';
import {BsDownload,BsFillTelephoneFill} from 'react-icons/bs';



const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV &nbsp;<BsDownload className='cta__icon'/></a>
      <a href="#contact" className='btn btn-primary'>Contact Me &nbsp;<BsFillTelephoneFill className='cta__icon'/> </a>
    </div>
  )
}

export default CTA;
