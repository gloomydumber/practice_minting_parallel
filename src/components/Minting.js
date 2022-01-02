// import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState, useEffect } from "react";
import styled from "styled-components";
import corepackImg from "../img/corepack.gif";

// import Rcaptcha from "./Rcaptcha";
import Hcaptcha from "./Hcaptcha";

// ▲▼ item increase / decrease function, didn't imported
const MintingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: ${(props) => props.cursor || "default"};
`;

const Packs = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PackWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: white;
`;

const ItemTitle = styled.div`
  width: 100%;
  height: 30%;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || "#def141"};
`;

const ItemExplain = styled.div`
  width: 100%;
  height: 30%;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ItemReserved = styled.div`
  width: 165px;
  height: 30px;
  background-color: ${(props) => props.bgColor || "#def141"};
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: auto;
`;

const FeeText = styled.div`
  width: 100%;
  height: 3%;
  color: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const CaptchaWrapper = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
`;

const TailBar = styled.div`
  width: 100%;
  height: 5%;
  background-color: #44444e;
  display: flex;
`;

const TotalReserved = styled.div`
  width: 50%;
  height: 100%;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column-reverse;
`;

const ButtonWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 120px;
  height: 80%;
  margin: 5px;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 500;
  color: black;
  background-color: #def141;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
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
  &:disabled {
    background-color: grey;
  }
  &:active {
    border-style: outset;
  }
`;

const Warning = styled.div`
  width: 50%;
  height: 100%;
  color: "#def141";
  display: flex;
  align-items: flex-end;
  flex-direction: column-reverse;
`;

const Result = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

function msToTime(duration) {
  let milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60);

  seconds = seconds < 10 ? "0" + seconds : seconds;

  return seconds + "S:" + milliseconds + "MS";
}

function Minting() {
  // const random = Math.random() < 0.5;
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [minted, setMinted] = useState(false);
  const [reserved, setReserved] = useState(0);
  const [token, setToken] = useState(null);
  const [startTimer, setStartTimer] = useState(new Date());
  const [resultTime, setResultTime] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEnded(true);
    }, 45000);
  }, []);

  useEffect(() => {
    setResultTime(msToTime(new Date() - startTimer));
  }, [minted]);

  useEffect(() => {
    if (token) console.log(`captcha Token: ${token}`);
  }, [token]);

  return (
    <MintingWrapper cursor={loading ? "wait" : "default"}>
      {minted ? (
        <Result>
          YOU MINTED : {reserved * 3} <br />
          TIME : {resultTime}
        </Result>
      ) : (
        <>
          <Packs>
            <PackWrapper>
              <ImgWrapper>
                <img src={corepackImg} width="70%" height="auto" />
              </ImgWrapper>
              <InfoWrapper>
                <ItemTitle>CORE</ItemTitle>
                <ItemExplain>4 CARDS IN THE PACK ≈ 0.01</ItemExplain>
                <ItemReserved>{reserved} / 3 RESERVED</ItemReserved>
              </InfoWrapper>
            </PackWrapper>
            <PackWrapper>
              <ImgWrapper>
                <img src={corepackImg} width="70%" height="auto" />
              </ImgWrapper>
              <InfoWrapper>
                <ItemTitle color={"#00B7FF"}>ENHANCED</ItemTitle>
                <ItemExplain>3 CARDS IN THE PACK ≈ 0.1</ItemExplain>
                <ItemReserved bgColor={"#00B7FF"}>
                  {reserved} / 3 RESERVED
                </ItemReserved>
              </InfoWrapper>
            </PackWrapper>
            <PackWrapper>
              <ImgWrapper>
                <img src={corepackImg} width="70%" height="auto" />
              </ImgWrapper>
              <InfoWrapper>
                <ItemTitle color={"#FF963C"}>PREMIUM</ItemTitle>
                <ItemExplain>1 CARDS IN THE PACK ≈ 0.2</ItemExplain>
                <ItemReserved bgColor={"#FF963C"}>
                  {reserved} / 3 RESERVED
                </ItemReserved>
              </InfoWrapper>
            </PackWrapper>
          </Packs>
          <FeeText>Shipping cost per pack ≈ 0.007</FeeText>
          <CaptchaWrapper>
            <Hcaptcha setToken={setToken} />

            {/* 다른 state를 만들어서 컴포넌트 리로드 관리 */}
            {/* {random ? (
              <Hcaptcha setToken={setToken} />
            ) : (
              <Rcaptcha setToken={setToken} />
            )} */}
          </CaptchaWrapper>
          <TailBar>
            <TotalReserved>
              TOTAL NUMBER OF PACKS RESERVED : {reserved * 3}
            </TotalReserved>
            {ended ? (
              <Warning>
                No more packs are currently available. Check back later.
              </Warning>
            ) : (
              <ButtonWrapper>
                <Button
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setMinted(true);
                      setLoading(false);
                    }, 3000);
                  }}
                  disabled={token != null && reserved != 0 ? false : true}
                >
                  MINT
                </Button>
                <Button
                  onClick={() => {
                    if (reserved === 0) {
                      setReserved(3);
                    } else {
                      setReserved(0);
                    }
                  }}
                >
                  SET MAX
                </Button>
              </ButtonWrapper>
            )}
          </TailBar>
        </>
      )}
    </MintingWrapper>
  );
}

export default Minting;
