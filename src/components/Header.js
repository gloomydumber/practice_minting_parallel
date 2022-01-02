import styled from "styled-components";
import logoImg from "../img/logo2.png";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid lime;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const ImgBox = styled.div`
  height: 70%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TitleText = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  font-family: "Druk Wide Web Super";
`;

function Header() {
  return (
    <HeaderWrapper>
      <ImgBox>
        <Img src={logoImg} />
      </ImgBox>
      <TitleText>PARALLEL</TitleText> {/* NFT MINING TRAINER */}
    </HeaderWrapper>
  );
}

export default Header;
