import styled from "styled-components";
import backImg from "../../assets/images/background.png";

const GameBox = styled.div`
  position: absolute;
  background-image: url(${backImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  overflow: hidden;
`;
export default GameBox;
