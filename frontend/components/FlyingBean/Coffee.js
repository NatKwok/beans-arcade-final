import styled from "styled-components";
import coffBean from "../../assets/images/coffee-bean.png";

//Coffee representation
const Coffee = styled.div`
  position: absolute;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  background-image: url(${coffBean});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;
export default Coffee;
