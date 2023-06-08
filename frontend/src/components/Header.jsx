//Utility Imports
import React from "react";
import { Link } from "react-router-dom";
import UsernameContext from "../context/UsernameContext";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Header(){
    return(
        <Container>
            <Row>
                <Col style={{textAlign: "left"}}>
                    <Link to="/">
                        <Button style={{color: "white", textAlign: "center", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", padding: "10px", fontWeight: "bold", fontSize: "130%"}}>
                             Home
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;