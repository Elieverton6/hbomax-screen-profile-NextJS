import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body,html {
        background-position: center;
    background-size: 100% 100%;
    background-image: url('/bg.png');
    background-attachment: fixed;
        height: 100%;
    }
`