import styled from "styled-components";

export const Box = styled.div`
  background-color: #505050;
  width: 100%;
  height: 100vh;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px 200px;
`;

export const ConWrap = styled.div`
  width: 25%;
  height: 450px;
  background-color: #505050;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Con = styled.div`
  width: 100%;
  height: 300px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h2`
  font-size: 26px;
  color: white;
  padding: 10px 10px;
`;

export const Desc = styled.p`
  font-size: 14px;
  color: white;
  padding: 0 10px;
  line-height: 23px;
`;

// styledComponents 까지 쓰면 자동완성 안됨
// components 부분은 지우기
