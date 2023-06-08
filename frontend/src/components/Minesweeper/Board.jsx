//Utility Imports
import { React, useState } from "react";
import { buildSnakeSpaces, buildNeighbours } from "../../utils";
import produce from 'immer';
import UsernameContext from "../../context/UsernameContext";
//Image Imports
import snek from "../../images/SnekB.png";
import gotNug from "../../images/GotNug.png";
import flag from "../../images/Flag.png";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//Component Imports
import Cell from './Cell';
import Header from '../Header';
import Leaderboard from '../LeaderboardMine';

const Board = () => {
//Specify the parameters of the gameboard
    const setup = {width: 10, height: 10, snakes: 20};

//Create a virtual gameboard as a 2D array using these parameters
    const gameboard = () => {
        const {width, height, snakes} = setup;
        //Create a 1D array of length width
        //and fill it with
        //a map of elements which are unspecified because
        const grid = Array(width).fill().map((_,indexH) => 
            //they are new arrays of the length height
            //filled with
            //a map of elements which are specified as objects
            Array(height).fill().map((_,indexW) => ({
                //with the parameters of x location, y location, snake status, and neighbouring snake #
                x: indexH,
                y: indexW,
                isSnake: false,
                neighbours: 0,
                isRevealed: false,
                isPoint: true,
                isFlagged: false
            }))
        );
        //Then, build the grid out of the two arrays with utility functions
        let snakeArray = buildSnakeSpaces(grid, height, width, snakes);
        let neighbourArray = buildNeighbours(snakeArray, height, width);
        return neighbourArray;
    };


//Execute the gameboard function to realize the gameboard in UI
    const [grid, setGrid] = useState(() => gameboard(setup));
    
//Score value
/* localStorage?
    const [score, setScore] = useState(
        JSON.parse(localStorage.getItem("score")) || 0
    );
      
    useEffect(() => {
        localStorage.setItem("score", JSON.stringify(score));
    }, [score]);    
*/
//Regular
const [score, setScore] = useState(0);
const scoreStyle = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    
    backgroundImage: 'url(' + require('../../images/Gold Nug.png') + ')', 
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center", 
    height: "100%",
    
    fontWeight: "bold",
    fontSize: "125%",
}

const [gameStatus, setGameStatus] = useState("Dig to unearth gold nuggets! Careful for snakes!");
const [player, setPlayer] = useState([]);

//Player Inputs
    //Left Click
    const leftClick = (event, x, y) => {
        event.preventDefault();
        //If space is already revealed, just exit
        if(grid[x][y].isRevealed || grid[x][y].isFlagged || gameStatus == "Death by Snake! Try a new digsite.") return;
        //Update the grid...
        const updatedGrid = produce(grid, (draft) => {
            //Reveal clicked space
            Object.assign(draft[x][y], {isRevealed: true});
            
            /*
            if(draft[x][y].isEmpty){
                showEmptyCells(setup.height, setup.width, x, y, draft); 
            }
            */
            //If the space has not been clicked before, add point
            if(!draft[x][y].isSnake && draft[x][y].isPoint){
                setScore(score + 1);
                GetScore();
                console.log(player);
                if(score > player.minesweeperScore){
                    SaveScore();
                }
                
            }
            //Remove the point from clicked space
            Object.assign(draft[x][y], {isPoint: false});
        });
        setGrid(updatedGrid);
        

        if(updatedGrid[x][y].isSnake){
            GetScore();
            if(score > player.minesweeperScore){
                SaveScore();
            }
            return setGameStatus("Death by Snake! Try a new digsite.");
        }
    };

    //Right Click
    const rightClick = (event, x, y) => {
    event.preventDefault();
    if(grid[x][y].isRevealed) return;
    const updatedGrid = produce(grid, (draft) => {
        draft[x][y].isFlagged = !draft[x][y].isFlagged;
    });
    setGrid(updatedGrid);
    }

    //Reset Board
    const newDig = (e, setup) => {
        e.preventDefault();
        setGameStatus("Dig to unearth gold nuggets! Careful for snakes!");
        setScore(0);
        setGrid(gameboard(setup));
    }

    //Save score
    function SaveScore(){
        const username = JSON.parse(localStorage.getItem('username'));
        console.log({username}.username);
        let savedScore = {score}.score + 1;
        console.log({savedScore}.savedScore);
        fetch("http://localhost:3001/leaderboard/"+{username}.username+"/minesweeperScore", 
            {method: "PATCH",
            body: JSON.stringify({
                minesweeperScore: {savedScore}.savedScore
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            })
        .then((data) => data.json())
        .then((json) =>
        JSON.stringify(json));
    }

    //Get score
    function GetScore() {
        const username = JSON.parse(localStorage.getItem('username'));
        fetch("http://localhost:3001/leaderboard/"+{username}.username,
        { method: "GET" })
        .then((data) => data.json())
        .then((json) =>
        setPlayer(json));
    }

    
//UI
    return (
    <div style={{backgroundImage: 'url(' + require('../../images/PixelSand.png') + ')', backgroundPosition: "top center", height: "90%"}}>
        <Header />
        <Container fluid>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <h1 style={{color: "black", textShadow: "0px 0px 15px #EDC28F, 0 0 3px lightgoldenrodyellow", fontSize: "200%",
                    background: "linear-gradient(to right, transparent, Khaki, transparent)"}}> 
                        Sand Sweeper
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col style={{height:"75px"}}>
                    <table style={{width: "50%", height:"100%", marginLeft: "25%", marginRight: "25%"}}>
                        <tr>
                            <td style={{width: "27%"}}>
                                <div style={scoreStyle}>
                                    &nbsp;{score}
                                </div>
                            </td>
                            <td style={{width: "46%", textAlign: "center", height: "100%", overflow: "scroll"}}>
                                <div style={{backgroundColor: "white", borderRadius:"10px", padding: "1px 0px 1px 0px"}}>
                                    {gameStatus}
                                </div>
                            </td>
                            <td style={{width: "27%", textAlign: "center"}}>
                                <Button variant="primary" onClick={(e)=> newDig(e, setup)}>New Digsite</Button>
                            </td>
                        </tr>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col style={{paddingTop: "55px"}}>
                <div style={{display: 'grid', 
                    gridTemplateColumns: `repeat(${setup.width}, 50px)`, 
                    gridTemplateRows: `repeat(${setup.height}, 50px)`,
                    textAlign: "center", 
                    justifyContent: "center"
                    }}>
                {
                    grid.map((row, i)=> row.map((col, j)=> (
                        <Cell onLClick={(e, i, j) => leftClick(e, i, j)} 
                        onRClick={(e, i, j) => rightClick(e, i, j)} 
                        key={`${i}-${j}`} 
                        col={col} i={i} j={j} snek={snek} gotNug={gotNug} flag={flag}/>
                    )))
                }
                </div>
                </Col>
            </Row>
            <Row>
                <Col style={{marginTop: "10px"}}>
                    <h1 style={{color: "black", textShadow: "0px 0px 15px #EDC28F, 0 0 3px lightgoldenrodyellow", fontSize: "200%",
                    background: "linear-gradient(to right, transparent, Khaki, transparent)"}}> 
                        Leaderboard
                    </h1>
                    <Leaderboard />
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Board;