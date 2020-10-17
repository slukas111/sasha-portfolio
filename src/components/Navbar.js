import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <HashLink
                  to="#work"
                  scroll={el =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  title="work"
                >
                  [ Work ]
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="#skills"
                  scroll={el =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  title="skills"
                >
                  [ Skills ]
                </HashLink>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: "#000" }}
                  className="contact-nav"
                  title="contact"
                >
                  [ Contact ]
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;