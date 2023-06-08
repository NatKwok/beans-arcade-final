//Utility Imports
import React from "react";
import {Outlet} from "react-router-dom";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles} from '@mui/styles';
//Component Imports
import Header from './Header';
import HomeLogo from './HomeLogo';
import GamesList from './GamesList';
import UsernameContext from "../context/UsernameContext";

const useStyles = makeStyles({
    label: {color: "white", textAlign: "center", padding: "10px", fontWeight: "bold", fontSize: "130%"},
  });

function Home() {
    const [username, setUsername] = React.useContext(UsernameContext);

    const classes = useStyles();

    return(
        <Container>
            <Row>
                <Col>
                    <Header />
                    <HomeLogo />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className={classes.label}>{username ? "Welcome " + username + "!" : "Please login!"}</label>
                    <Outlet />
                </Col>
            </Row>
            <Row>
                <GamesList />
            </Row>
        </Container>
    )
}

export default Home;
