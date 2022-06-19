import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GloalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}`;
// --------------------------------------
export const Album = styled.div`
  width: 320px;
  height: 350px;
  background-color: salmon;
  margin: 25px 0;
  border-radius: 50px;
`;
