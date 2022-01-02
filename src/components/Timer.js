import styled from "styled-components";

const TimerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TimeText = styled.div`
  font-family: "Inconsolata", monospace;
  font-size: 15rem;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StoryText = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

function Timer({ time }) {
  return (
    <TimerWrapper>
      <TimeText>00:00:0{time}</TimeText>
      <StoryText>
        Earth, far in the future...
        <br /> Drained from supporting human life has fallen into a desperate
        need for energy.
        <br />
        Humanity attempted to unlock the solution by hastily experimenting with
        anti-matter.
        <br />
        The consequences were devastating.
        <br />
        <br /> Earth, scarred from generations of human life, has nearly
        depleted its ability to sustain civilization. Energy has become
        increasingly scarce.
        <br /> Scientists worldwide frantically try to find salvation.
        <br /> In their haste, they attempt a new form of fission augmented by
        anti-matter, in the hopes it will generate a new source of harvestable
        energy.
        <br />
        The attempt was a global disaster, initially referred to as The Event.
        <br />
        The fission sites became radiation centers that spread across the globe.
        <br />
        World leaders feared it was an extinction level event.
        <br />
        <br /> And so, the world’s focus shifted: mass exodus off of the planet.
        <br />
        What remaining time and resources humanity had was spent building
        massive space vessels to carry humans to new lands and establish new
        colonies.
        <br /> At that time, colonization was something they had only limited
        experience with, and with varying success.
        <br /> No destination was a guarantee for a secure future, so Earth’s
        people departed on three paths.
        <br /> One to Mars, one to Jupiter’s moon Europa, and one to the far
        reaches of the asteroid belt in the known solar system.
        <br /> Earth was abandoned, and those that were left behind would nearly
        all succumb to radiation and perish.
      </StoryText>
    </TimerWrapper>
  );
}

// Timer.defaultProps = {
//   initialTime: 5,
// };

export default Timer;
