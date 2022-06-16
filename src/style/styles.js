import styledComponents, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GloalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}`;
// --------------------------------------
export const Box = styledComponents.div`
background-color: #505050;
width: 100%;
height: 100vh;
`;

export const Wrap = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 150px 200px;
`;

export const ConWrap = styledComponents.div`
width: 25%;
height: 450px;
background-color: #505050;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Con = styledComponents.div`
width: 100%;
height: 300px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;

export const Title = styledComponents.h2`
font-size: 26px;
color: white;
padding: 10px 10px;
`;

export const Desc = styledComponents.p`
font-size: 14px;
color: white;
padding: 0 10px;
line-height: 23px`;
