import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600&family=Inconsolata:wght@200;900&display=swap');
    @import url("https://db.onlinewebfonts.com/c/2f8845bdde42e943355a39765c5be5c0?family=Druk+Wide+Web+Super");
    
  * {
    box-sizing: border-box;
  }

  body{
    margin : 0;
  }

  #root {
    margin : 0 ;
    height: 100vh;
    width: 100vw;
    background-color: black;
    color: lime;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
