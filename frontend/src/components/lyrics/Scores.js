import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  correct: {
    fontSize: "1.5rem",
    BackgroundColor: "white",
  },
  wrong: {
    fontSize: "1.5rem",
    BackgroundColor: "white",
  },
  label: {color: "white", textAlign: "center", padding: "10px", fontWeight: "bold", fontSize: "1.5rem"},
});

function Scores(props) {
  let { correct, wrong } = props;
  const classes = useStyles(props);
  return (
    <div>
      <label className={classes.label}>Score: </label>
      <span className={classes.label} style={{backgroundColor: 'green'}}>{correct}</span> {' '}
      <span className={classes.label} style={{backgroundColor: 'red'}}>{wrong}</span>
    </div>
  );
}

export default Scores;
