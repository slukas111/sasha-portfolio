import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

class Navbar extends Component {
  render() {
    const { hmm } = this.props;
    return ( 
        <nav className="navbar navbar-default" style={{backgroundColor:'#fff'}}>
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span style={{backgroundColor: '#000'}} className="icon-bar"></span>
                        <span style={{backgroundColor: '#000'}} className="icon-bar"></span>
                        <span style={{backgroundColor: '#000'}} className="icon-bar"></span>
                    </button>
                    {/* <Link className="navbar-brand" to="/" title="logo">
                        <img src={darklogo} alt="logo"/>
                    </Link> */}
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <HashLink
                             to={hmm === true ? `../../#work` : `../#work`} 
                             className="dark-nav"
                             title="work">
                                Work
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                             to={hmm === true ? `../../#skills` : `../#skills`} 
                             className="dark-nav"
                             title="skills">
                                Skills
                            </HashLink>
                        </li>
                        <li><a style={{border: '2px solid #000'}} href="mailto:sashamati@gmail.com" className="dark-nav contact-nav" title="contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navbar;