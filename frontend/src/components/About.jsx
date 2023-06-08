import styled from "styled-components";
import remote from "../assets/images/remote.png";

function About() {
  return (
    <section>
      <about>
        <mainP>
          <img src="../assets/image.png" alt="controller" />
          <aboutText>
            <h1>About Us</h1>
            <p>Hi there from an indie video game studio</p>
          </aboutText>
        </mainP>
      </about>
    </section>
  );
}

const about = styled.div`
  width: 100%;
  padding: 78px 0px;
  & img {
    height: auto;
    width: 420px;
  }
`;

const aboutText = styled.div`
  width: 550px;
  &h1 {
    color: white;
    font-size: 80px;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  &p {
    color: white;
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
  }
`;

const mainP = styled.div`
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default About;
