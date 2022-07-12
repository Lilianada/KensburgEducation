import React from 'react';
import './Tutors.css';
import Video1 from '../../assets/3b72b82a85b2ba7ae3895a6c0989fc8b.mp4';
import Video2 from '../../assets/4989a59346dd32b852828924e45d13a7.mp4';
import Video3 from '../../assets/48901d459e844c845fcaf4155fb1f855.mp4';

function Tutors() {
  return (
    <section className="tutorWrapper">
        <h2 className="tutorTitle">Unlimited access to over 100+ tutors.</h2>
        <div className="videoFlex">
            <video className='video' src={Video1} width="300" height="200" controls='control' autoplay="false" />
            <video className='video' src={Video2} width="300" height="200" controls='control' autoplay="false" />
            <video className='video' src={Video3} width="300" height="200" controls='control' autoplay="false" />
            <video className='video' src={Video1} width="300" height="200" controls='control' autoplay="false" />
            <video className='video' src={Video2} width="300" height="200" controls='control' autoplay="false" />
            <video className='video' src={Video3} width="300" height="200" controls='control' autoplay="false" />
        </div>
    </section>
  )
}

export default Tutors