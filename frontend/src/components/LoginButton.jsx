import React from "react";
import { Link } from "react-router-dom";
import { makeStyles} from '@mui/styles';
import Button from 'react-bootstrap/Button';

const useStyles = makeStyles({
    button: {color: "white", margin:"40px", textAlign: "center", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", width: "150px", padding: "10px", fontWeight: "bold", fontSize: "130%"}
});

function Login(){
    const classes = useStyles();

    return(
        <div>
            <Link to="/login">
                <Button className={classes.button}>
                    Login
                </Button>
            </Link>
        </div>
    )
}

export default Login;