import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        background-color: #222;
    }

    .server-error{
        text-align: center;
        font-size: 33px;
        margin: 10px;
        color: #fff;
    }
`

export default GlobalStyle;