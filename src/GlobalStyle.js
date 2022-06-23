import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: #1d1d1d;
}
`;
