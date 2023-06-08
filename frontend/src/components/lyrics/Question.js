// a Question component to render each question
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  button: {color: "black", margin:"10px", textAlign: "center", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", width: "400px", padding: "10px", fontWeight: "bold", fontSize: "1.3rem"}
});

function Question(props) {
  const { lyric, choices, onOptionClicked } = props;
  const classes = useStyles(props);

  return (
    <div>
      <label style={{ color: "white", fontSize:"1.8rem"}}> {lyric}</label>
      <br/>
      <br/>
      <br/>
      <Button className={classes.button} onClick={() => onOptionClicked(0)}>{choices[0]}</Button>
      <Button className={classes.button} onClick={() => onOptionClicked(1)}>{choices[1]}</Button>
      <Button className={classes.button} onClick={() => onOptionClicked(2)}>{choices[2]}</Button>
      <Button className={classes.button} onClick={() => onOptionClicked(3)}>{choices[3]}</Button>
    </div>
  );
}
export default Question;
