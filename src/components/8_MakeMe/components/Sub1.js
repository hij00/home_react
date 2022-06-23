import { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 100vh;
`;
const ImgWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BigImg = styled.div`
  width: 800px;
  height: 800px;
  background-color: gray;
  background: url(https://d3i908zd4kzakt.cloudfront.net/data/item/1639698842/thumb-7ZW465Oc7YGs66a8_500x500.jpg)
    no-repeat center / cover;
`;
const MiniWrap = styled.div`
  width: 200px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
`;
const Img = styled.div`
  width: 100%;
  height: 20%;
  background-color: gray;
  background: url({a.imgUrl});
`;

export const Sub1 = () => {
  const [show, setShow] = useState();
  const handleClick = () => {};
  return (
    <Section>
      <ImgWrap>
        <BigImg></BigImg>
        <MiniWrap onClick={handleClick}>
          <Img></Img>
          <Img></Img>
          <Img></Img>
          <Img></Img>
        </MiniWrap>
      </ImgWrap>
    </Section>
  );
};
