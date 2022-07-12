import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="serviceWrapper">
        <h2 className="serviceHead">Unlimited access to 100+ tutors.</h2>
        <div className="gridBox">
            <div className="grid">
                <h3 className="serviceTitle">Business & General English</h3>
                <h5 className="smallText">50 available tutors</h5>
            </div>
            <div className="grid">
                <h3 className="serviceTitle">IELTS & TOEFL Exam preparation</h3>
                <h5 className="smallText">43 available tutors</h5>
            </div>
            <div className="grid">
                <h3 className="serviceTitle">English Speaking Club</h3>
                <h5 className="smallText">20 different clubs</h5>
            </div>
            <div className="grid">
                <h3 className="serviceTitle">In-home tutoring</h3>
                <h5 className="smallText">Custom availability</h5>
            </div>
            <div className="grid">
                <h3 className="serviceTitle">In-office tutoring</h3>
                <h5 className="smallText">Custom availability</h5>
            </div>
            <div className="grid">
                <h3 className="serviceTitle">Online tutoring</h3>
                <h5 className="smallText">120+ available tutors</h5>
            </div>
        </div>
    </section>
  )
}

export default Services