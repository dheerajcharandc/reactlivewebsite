import React from 'react'
import './about.css';
import ME from '../../assets/mee.png';
import {RiComputerLine} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiCodeBlock} from 'react-icons/bi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <BiCodeBlock className='about__icon'/>
            <h5>03+</h5>
            <small>Years Experience in <strong>Programming</strong></small>
          </article>

          

          <article className='about__card'>
          <RiComputerLine className='about__icon'/>
            <h5>300+</h5>
            <small> <strong>DSA Probelems</strong> solved</small>
          </article>

        </div>
        <p>&gt; Web  Developer. <br />&gt; Coding enthusiast with more than 300 questions solved on various platforms. <br />&gt; Algorithm lover <br />&gt; 
        Strong engineering professional background in Mechanical Engineering from <a href="http://www.nsit.ac.in/" target='_blank'> NSUT, Delhi</a> .</p>
        <a href="#contact" className='btn btn-primary'>Contact Me &nbsp; <BsFillTelephoneFill/> </a>
        </div>
      </div>
    </section>
  )
}

export default About