import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        letter-spacing: -0.04rem;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        font-size: 16px;
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        &::-webkit-scrollbar{
            background: none;
            width: 4px;
        }
        &::-webkit-scrollbar-thumb{
            position: relative;
            background-color: #93A2BF;
            border-radius: 1rem;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track{
            background-color: #272B33;
        }
    }
    

    ol, ul{
        list-style: none;
    }
    button {
        border: none;
        background: transparent;
        cursor: pointer;
        color: #fff;
        outline: none;
    }
`;

export default GlobalStyles;
