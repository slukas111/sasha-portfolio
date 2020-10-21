import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import {be_src} from '../../data';
import Footer from '../Footer';
import { FaGithub } from "react-icons/fa";
// import { BsBoxArrowUpRight } from "react-icons/bs";

class Backend extends Component{
    componentDidMount(){
        ReactDOM.findDOMNode(this).scrollIntoView();
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render(){
    return(
        <div>
            <Navbar/>
            <div style={{textAlign:'center'}} className="container photo-co">
                <h1 className="photo-h1 h2">Backend</h1>
                <div className="row">
                    {be_src.map((be,index) => (
                        <div key={index} className="col-md-4 col-md-12 fe">
                            <medium>{be.caption}</medium>
                           <a href={be.url}><img className={`be-${index}`} src={be.src} alt={index}/></a> <br/> <br/>
                           <medium>{be.content}</medium>
                           <a
                target="_blank"
                rel="noopener noreferrer"
                title="code"
                href={be.code}
              ><br />
              <i><FaGithub /></i></a>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                title="code"
                href={be.url}
              >{" "}
              <i><BsBoxArrowUpRight /></i></a> */}
                        </div>
                    ))}
                </div>
                <br/> <br/>
                <button onClick={this.goBack} className="back" >Back</button>  
            </div>
            <br/><br/> <hr className="test-hr"/> <br/>
            <Footer color="black" />
        </div>
    )
}};

export default Backend;
