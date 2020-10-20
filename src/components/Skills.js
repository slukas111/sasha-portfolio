import React, { Component } from 'react'
import Footer from "./Footer";


export class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            skills: ["React", "Javascript", "Git", "Python3", "Python2","CSS", "Html", "Django", "Version Control", "Mac", "Linux"],
            learn: ["AWS", "MongoDB", "Netlify", "Ruby"]
        }
    }

    render() {
        const {skills, learn} = this.state
        return (
            <div className="skills" id="skills">
             <div className="container skills-container">
              <h1 className="skills-tag">My Skills</h1>
              <p className="skills-p">
                These are my most used and favorite tools to get the job done. 
                Also includes others that I am pursuing to learn{" "}
                </p> 
                    <ul>
                        { skills.map((skill, i) => { 
                        return(
                        <li key={i}><button>
                                {skill}
                            </button></li>
                        )
                        })}
                    </ul>
                    <p> Currently Studying</p>
                    <ul>
                        { learn.map((learning, i) => { 
                        return(
                        <li key={i}><button>
                                {learning}
                            </button></li>
                        )
                        })}
                    </ul>
              </div> 
              <br/><br/><hr className="test-hr"/> <br/>
            <Footer />
              </div>
        )
    }
}


export default Skills
