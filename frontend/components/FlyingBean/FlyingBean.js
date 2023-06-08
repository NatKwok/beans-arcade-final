import GameEngine from "./GameEngine";
import styled from "styled-components";
import Arcade from "../../assets/images/Arcade.png";

function FlyingBean() {
  return (
    <GameConsole>
      <GameEngine />
    </GameConsole>
  );
}

const GameConsole = styled.div`
  position: relative;
  height: 79vh;
  background-image: url(${Arcade});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 96rem;
`;

export default FlyingBean;
