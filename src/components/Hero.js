import React, { Component } from 'react';
import profimage from "../assets/hero-img.png";
// import { HashLink } from "react-router-hash-link";
import resume from "../assets/resume1.pdf";


export class Hero extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                <div className="hero-card col-md-6 col-md-push-6">
                    <img src={profimage} alt="BG-Card" className="hero-img" />
                </div>

                <div className="col-md-6 col-md-pull-6">
            <h1 className="hero-tag">
              Hi, I am <br /> 
              <strong>Sasha Lukas.</strong>
            </h1>
            <p className="about-tag">
            Software Engineer with an interest in backend. Recent graduate from Kenzie Academy Fullstack program. 
            I am still pursuing a computer science degree through Olympic College, Bremerton WA. Some knack-experience with designs, photography, fine arts and film.
            Former nomadic bartender turned coder. 
            </p>


            <p className="buttons">
            {/* <HashLink to="#">View Work</HashLink> */}
                <button>View Work</button>{' '}

            {/* </HashLink> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resume}
                title="view resume"
              >
                view resume
              </a>

            </p>
                </div>
              </div>
              </div>


        )
    }
}

export default Hero

