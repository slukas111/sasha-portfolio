import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import {fe_src} from '../../data';
import Footer from '../Footer';
import { FaGitlab } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";



class Frontend extends Component{
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
                <h1 className="photo-h1 h2">Frontend</h1>
                <div className="row">
                    {fe_src.map((fe,index) => (
                        <div key={index} className="col-md-4 col-md-12 fe">
                            <medium>{fe.caption}</medium>
                           <a href={fe.url}><img className={`fe-${index}`} src={fe.src} alt={index}/></a> <br/> <br/>
                           <medium>{fe.content}</medium>
                           <a
                target="_blank"
                rel="noopener noreferrer"
                title="code"
                href={fe.code}
              ><br />
              <i><FaGitlab /></i></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="code"
                href={fe.url}
              >{" "}
              <i><BsBoxArrowUpRight /></i></a>
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

export default Frontend;
