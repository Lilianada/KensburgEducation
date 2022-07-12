import React from 'react';
import './Hero.css';
import Logo from '../../assets/Kensburgeducation.png'
import Image from '../../assets/wfh_9.svg'

function Hero() {
  return (
    <div className='heroWrapper'>
      <img className='logo' src={Logo} alt='Logo' />
      <section className='flexBox'>
        <div className="flexOne">
          <h4 className="colorText">Lorem Ipsum del luna</h4>
          <h1 className="heroText">
            Learn to speak English fluently with our online tutors.
          </h1>
          <button className='cto'>Start learning now</button>
        </div>
        <div className="flexTwo">
          <img src={Image} alt="Hero" />
        </div>
      </section>
      <section className="services">
        <div className="serviceBar"></div>
        <div className="serviceItem">
          <h3>Online Tutoring</h3>
        </div>
        <div className="serviceItem">
          <h3>In-home Tutoring</h3>
        </div>
        <div className="serviceItem">
          <h3>In-office Tutoring</h3>
        </div>
        <div className="serviceBar"></div>
      </section>
    </div>
  )
}

export default Hero

