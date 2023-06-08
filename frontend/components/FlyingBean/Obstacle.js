import styled from "styled-components";
const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  outline: 3px solid white;
  box-shadow: 0 0 3em 0 white;
  box-shadow: inset 0 0 1em 0 white;
`;
export default Obstacle;
