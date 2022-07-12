import React from 'react';
import './Courses.css';
import ImgO from '../../assets/Userpics/SVG/Circle/Guacamole.svg'
import ImgP from '../../assets/Userpics/SVG/Circle/Guacamole-1.svg'
import ImgQ from '../../assets/Userpics/SVG/Circle/Guacamole-2.svg'
import ImgR from '../../assets/Userpics/SVG/Circle/Guacamole-3.svg'

function Courses() {
  return (
    <section className="serviceWrapper">
        <h2 className="serviceHead">Different available course options.</h2>
        <div className="gridBox">
            <div className="grid green">
                <div className="gridText">
                    <h3 className="serviceTitle">Business English</h3>
                    <h5 className="smallText">50 available tutors</h5>
                </div>
                <div className="tutorIcons">
                    <div className="tutorIcon">
                    <img src={ImgO} alt="Tutor icon" />
                    </div>
                    <div className="circle">50+</div>
                </div>
            </div>
            <div className="grid yellow">
                <div className="gridText">
                    <h3 className="serviceTitle">IELTS Exam Prep</h3>
                    <h5 className="smallText">43 available tutors</h5>
                </div>
                <div className="tutorIcons">
                    <div className="tutorIcon">
                    <img src={ImgP} alt="Tutor icon" />
                    </div>
                    <div className="circle">40+</div>
                </div>
            </div>
            <div className="grid pink">
                <div className="gridText">
                    <h3 className="serviceTitle">TOEFL Exam Prep</h3>
                    <h5 className="smallText">20 different clubs</h5>
                </div>
                <div className="tutorIcons">
                    <div className="tutorIcon">
                    <img src={ImgQ} alt="Tutor icon" />
                    </div>
                    <div className="circle">20+</div>
                </div>
            </div>
            <div className="grid purple">
                <div className="gridText">
                    <h3 className="serviceTitle">General English</h3>
                    <h5 className="smallText">57+ tutors available.</h5>
                </div>
                <div className="tutorIcons">
                    <div className="tutorIcon">
                        <img src={ImgR} alt="Tutor icon" />
                    </div>
                    <div className="circle">50+</div>
                </div>
            </div>
            <div className="grid blue">
                <div className="gridText">
                    <h3 className="serviceTitle">English Speaking Club</h3>
                    <h5 className="smallText">Custom availability</h5>
                </div>
                <div className="tutorIcons">
                    <div className="tutorIcon">
                        <img src={ImgO} alt="Tutor icon" />
                    </div>
                    <div className="circle">20+</div>
                </div>
            </div>
            <div className="grid orange">
                <div className="gridText">
                    <h3 className="serviceTitle">Online tutoring</h3>
                    <h5 className="smallText">120+ available tutors</h5>
                </div>
                <div className="tutorIcons">
                    <div className="tutorIcon">
                        <img src={ImgP} alt="Tutor icon" />
                    </div>
                    <div className="circle">120+</div>
                </div>
            </div>
        </div>
    </section>
  )
}

    export default Courses 