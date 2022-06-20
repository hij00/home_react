import styled from "styled-components";

export const WrapM = styled.div`
  width: 896px;
  height: 414px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TitleWrap = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 5px;
  color: white;
`;
export const NicName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: white;
  opacity: 0.5;
`;
export const IconWrap = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const Icons = styled.div`
  font-size: 30px;
  color: white;
`;
export const Play = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
  display: ${(props) => props.show};
  cursor: pointer;
`;
export const Pause = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
  display: ${(props) => props.showw};
  cursor: pointer;
`;
export const GageWrap = styled.div`
  width: 100%;
  height: 5px;
  background-color: lightgray;
`;
export const Gage = styled.div`
  background-color: red;
`;
