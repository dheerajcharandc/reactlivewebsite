import React from 'react';
import './header.css'
import CTA from './Cta.js'
import ME from '../../assets/mee.png';
import HeaderSocials from './HeaderSocials';
import Typewriter from "typewriter-effect";


const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <Typewriter
          options={{
            autoStart:true,
            loop:true,
            delay:100,
            strings:['&lt;&gt; <span>Hello World</strong></span> 🙏&lt;&frasl;&gt;'],
          }}
        />
        <h1><strong>I'm Dheeraj Charan</strong></h1>
        <Typewriter
          options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
              "<strong> EAT &#8594; SLEEP &#8594; CODE &#8594; REPEAT </strong>",
              "<strong>Init &#8594;Commit&#8594;Add&#8594;Push</strong>",
              "<strong>Build&#8594;Test&#8594;Deploy</strong>"
            ],
          }}
        />
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header