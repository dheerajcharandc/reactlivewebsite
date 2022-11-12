import React from 'react';
import './portfolio.css';
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG4} alt="" />
        </div>
          <h3>Covid Tracker</h3>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG3} alt="" />
        </div>
          <h3>IMDb Clone</h3>
         
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG2} alt="" />
        </div>
          <h3>Weather Lens</h3>
         
        </article>

      </div>
    </section>
  )
}

export default Portfolio