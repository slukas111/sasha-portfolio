import React, { Component } from "react";
import { Link } from "react-router-dom";

let projectnames = [

  {
    name: "Frontend",
    company: "Kenzie/ Self",
    url: "/frontend"
  },
  {
    name: "Backend",
    company: "Kenzie/ Self",
    url: "/backend"
  },
  {
    name: "Sketch",
    company: "Self",
    url: "/backend"
  }
];

class Work extends Component {
  render() {
    return (
      <div className="work" id="work">
        <div className="container work-container">
          <h1 className="work-tag">My work</h1>
          <p className="work-p">

            An organized display of projects. Portion done in Kenzie with time 
            met standards, actual group efforts, and further self-studies. I make
            use of free University classes and local libraries.{" "}

          </p>
          <div className="row">
            {projectnames.map(project => (
                <div key={project.name} className="col-md-4 col-sm-12">
                  <Link to={project.url} className="thumbnail">
                    <h2 className="work-name">{project.name}</h2>
                    <h5 className="work-company">{project.company}</h5>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;