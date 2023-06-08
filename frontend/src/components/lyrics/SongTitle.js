import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  label: {
    color: "white",
    textAlign: "center",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "130%",
  },
});

function SongTitle(props) {
  let { title, singer } = props;

  const classes = useStyles(props);

  return (
    <label className={classes.label}>
      {title} - {singer}
    </label>
  );
}

export default SongTitle;
