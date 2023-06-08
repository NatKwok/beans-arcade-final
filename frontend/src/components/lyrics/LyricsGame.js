import Question from "./Question";
import VideoPlayer from "./VideoPlayer";
import SongTitle from "./SongTitle";
import Scores from "./Scores";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';
import Header from "../Header.jsx";
import UsernameContext from "../../context/UsernameContext";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  grid:{height: "80vh"},
});

function LyricsGame(props) {
  const [username, setUsername] = React.useContext(UsernameContext);
  const [userState, setUserState] = useState();
  const [lyric, setLyric] = useState({choices: [], video: {}});

  useEffect(() => {
    fetch("http://localhost:3001/users/" + username + "/lyrics")
    .then((response) => response.json())
    .then((userState) => {
      setUserState(userState);
    });
  }, [])

  useEffect(() => {
    if (!userState || userState.finished) {
      return;
    }
    const lyricId = userState.lastLyricId + 1;
    console.log(lyricId);
    fetch("http://localhost:3001/lyrics/" + lyricId)
    .then((response) => response.json())
    .then((lyric) => {
      setLyric(lyric);
    }).catch(function(){
      setUserState({...userState, finished: true})
    })
  }, [userState])

  function onOptionClicked(optionIndex) {
    let {correct, wrong} = userState;
    if (optionIndex === lyric.correctChoice) {
      correct++;
    } else {
      wrong++;
    }
    const newState = {lastLyricId: lyric.lyricId, correct, wrong}
    const dataToPost = {
      method: 'PATCH',
      body: JSON.stringify(newState),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    }
    fetch('http://localhost:3001/users/' + username + "/lyrics", dataToPost)
      .then(() => {
        setUserState(newState);
      })
  }

  const classes = useStyles(props);
  return (
    <div>
      <Header />
      <Grid container className={classes.grid} style={{width: "96%", marginLeft: "2%", marginBottom: "2%"}}>
        <Grid style={{display: "flex", justifyContent: "right"}} item xs={12}>
          <Scores correct={userState?.correct} wrong={userState?.wrong} />
        </Grid>
        <Grid item xs={12}></Grid>
        {userState?.finished ? 
          <Typography sx={{ color: "white" }} variant="h4">
            You have answered all!
          </Typography>
          :
          <>
            <Grid item xs={6}>
            <VideoPlayer className={classes.component}
                videoId={lyric.video.videoId}
                start={lyric.video.start}
                end={lyric.video.end}
              />
            </Grid>
            <Grid item xs={6}>
              <Question
                lyric={lyric.lyric}
                choices={lyric.choices}
                correctAnswer={lyric.correctAnswer}
                onOptionClicked={onOptionClicked}
              ></Question>
            </Grid>
            <Grid item xs={6}>
              <SongTitle title={lyric.title} singer={lyric.singer} />
            </Grid>
            <Grid item xs={6}></Grid>
          </>}
      </Grid>
    </div>
  );
}
export default LyricsGame;
