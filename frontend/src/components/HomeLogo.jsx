//Utility Imports
import { React, useState, useEffect, Component } from "react";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//Image Imports
import f1 from "../images/BeansPenultimate1.png";
import f2 from "../images/BeansPenultimate2.png";
import f3 from "../images/BeansPenultimate3.png";
import f4 from "../images/BeansPenultimate4.png";
import f5 from "../images/BeansPenultimate5.png";
import f6 from "../images/BeansPenultimate6.png";


class Logo extends Component {
    constructor(props){
        super(props)
        this.state = {frame: f1, number: 0}
        this.makeTimer()
    }
    
    makeTimer(){
        setInterval(() => {
            let oldFrame = this.state.number;
            let newFrame = this.state.number++;
            if(this.state.number < 8){
                this.setState({number: this.state.number++});
            }
            else{
                this.setState({number: this.state.number-=8});
            }
        }, 245)
    }

    render(){
        return (
            <div>
                <img src={Animate(this.state.number)} alt="logo" />
                <h1 style={{textShadow: "0px 0px 25px #EDC28F, 0 0 5px LightGoldenRodYellow", fontSize: "300%"}}>The Beans Arcade</h1>
            </div>
        )
    }
}

function Animate(frame) {
    if (frame === 0) {
        return f1;
    }
    if (frame === 1) {
        return f6;
    }
    if (frame === 2) {
        return f2;
    }
    if (frame === 3) {
        return f3;
    }
    if (frame === 4) {
        return f4;
    }
    if (frame === 5) {
        return f3;
    }
    if (frame === 6) {
        return f5;
    }
    if (frame === 7) {
        return f6;
    }
}

export default Logo;