import React from "react";
import { Link } from "react-router-dom";
import { makeStyles} from '@mui/styles';
import Button from 'react-bootstrap/Button';
import UsernameContext from "../context/UsernameContext";

const useStyles = makeStyles({
    button: {color: "white", margin:"40px", textAlign: "center", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", width: "150px", padding: "10px", fontWeight: "bold", fontSize: "130%"}
});

function Logout(){
    const [username, setUsername] = React.useContext(UsernameContext);
    
    function exitSession(){
        setUsername(null);
        localStorage.setItem('username', null);
    }

    const classes = useStyles();

    return(
        <div>
            <Link to="/">
                <Button onClick={exitSession} className={classes.button}>
                    Logout
                </Button>
            </Link>
        </div>
    )
}

export default Logout;