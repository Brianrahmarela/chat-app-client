import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

    html, body {
      font-family: 'Noto Sans JP', sans-serif;
      background-color: #E5EBEE;
    }
    .App {
      text-align: center;
    }

    .customHeightandFlexDirection{
      height: 100vh;
      flex-direction: column;
    }
    
`;