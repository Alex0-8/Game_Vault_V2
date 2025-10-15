import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        transition: all .5s ease;
    }

    body{
        background-color: ${({theme}) => theme.backgroundPrimary};
    }

    .server-error{
        text-align: center;
        font-size: 33px;
        margin: 10px;
        color: #fff;
    }
`

export default GlobalStyle;