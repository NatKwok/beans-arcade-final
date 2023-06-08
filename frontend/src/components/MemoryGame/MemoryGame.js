
import "../../App.css";
import Cards from "./Cards";
import React from "react";
import Header from "../Header";


function MemoryGame() {
  return (
    <div>
      <h1 className="text">Memory Game</h1>
      <Cards />
    </div>
  );
}


export default MemoryGame;