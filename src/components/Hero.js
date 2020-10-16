import React, { Component } from 'react';
import profimage from "../assets/hero-img.png";


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
            I am still pursuing a computer science degree through Olympic College, Bremerton WA. Some knack-experience with designs, photography, and film. 
            </p>
                </div>
              </div>
              </div>


        )
    }
}

export default Hero

