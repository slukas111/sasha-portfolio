import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import {sketch} from '../../data';
import Footer from '../Footer';

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
                <h1 className="photo-h1 h2">Sketch Portfolio</h1>
                <div className="row">
                    {sketch.map((sk,index) => (
                        <div key={index} className="col-md-4 col-md-12 fe">
                            <medium>{sk.caption}</medium>
                           <a href={sk.url}><img className={`fe-${index}`} src={sk.src} alt={index}/></a> <br/> <br/>
                           <medium>{sk.content}</medium>

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

