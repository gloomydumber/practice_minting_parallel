import styled from "styled-components";
import Timer from "./Timer";
import Minting from "./Minting";
import { useState, useEffect } from "react";
import parllel2 from "../img/parllel2.png";
const Wrapper = styled.div`
  font-family: "Inconsolata", monospace;
  width: 100%;
  height: 88%;
  color: #def141;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  background-image: url(${parllel2});
  background-position: center center;
`;

const ButtonTest = styled.div`
  width: 105px;
  height: 46px;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 500;
  color: black;
  background-color: #def141;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: background-color 0.25s linear;
  &:hover {
    background-color: white;
  }
`;

function Contents() {
  const [time, setTime] = useState(Math.floor(Math.random() * 10));

  useEffect(() => {
    const countDown = setInterval(() => {
      if (time > 0) {
        setTime((current) => parseInt(current - 1));
      }
    }, 1000);

    return () => clearInterval(countDown);
  }, [time]);

  return (
    <Wrapper>
      <Background>{time > 0 ? <Timer time={time} /> : <Minting />}</Background>
    </Wrapper>
  );
}

export default Contents;
