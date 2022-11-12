import React from 'react';
import './qualification.css'
import {FaRegCalendarAlt} from 'react-icons/fa'

const Qualification = () => {
  return (
    <section id='qualification'>
      <h5>My personal journey</h5>
      <h2>Qualification</h2>

      <div className="container qualification_container">

        <div className="qualification__sections">
          {/* <!--=============== QUALIFICATION CONTENT 1 ===============--> */}
          <div className="qualification__content qualification__active" data-content id="education">
            {/* <!--=============== QUALIFICATION 1 ===============--> */}


            {/* <!--=============== QUALIFICATION 2 ===============--> */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h5>Bachelor of Technology</h5>
                <h5>Mechanical Engineering</h5>
                <h3>Netaji Subhas University of Technology</h3>
                <div className="qualification__calendar">
                  <FaRegCalendarAlt/> &nbsp;
                  <span>2019-2023</span>
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 3 ===============--> */}
            <div className="qualification__data">
              <div>
                <h5>High Schooling</h5>
                <h5>Science</h5>
                <h3>SBBSJ CHITTOR</h3>
                <div className="qualification__calendar">
                  
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 4 ===============--> */}
            <div className="qualification__data">
              <div></div>

              <div className="qualification__time">
                <span className="qualification__rounder"></span>
                {/* <!-- <span className="qualification__line"></span> --> */}
              </div>

              <div>
                <h5>Secondary Schooling</h5>
                <h3>SBBSJ CHITTOR</h3>
                <div className="qualification__calendar">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
