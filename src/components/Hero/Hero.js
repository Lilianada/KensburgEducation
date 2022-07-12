import React from 'react';
import './Hero.css';
import Logo from '../../assets/Kensburgeducation.png'

function Hero() {
  return (
    <main className='heroWrapper'>
      <img className='logo' src={Logo} alt='Logo' />
      <section className='flexBox'>
        <div className="flexOne">
          <h1 className="heroText">
            Learn to speak English fluently with fun, energetic and creative teachers.
          </h1>
          
        </div>
        <div className="flexTwo"></div>
      </section>
    </main>
  )
}

export default Hero

