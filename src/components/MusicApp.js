import { faBars, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Album, album } from "../style/styles";

const Wrap = styled.div`
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Con = styled.div`
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  &:first-child {
    color: white;
    font-size: 30px;
  }
  &:last-child {
    color: gray;
  }
`;
const NameWrap = styled.div``;
const Song = styled.div``;
const Singer = styled.div``;
const BarWrap = styled.div``;
const Bar = styled.div``;
const NextPlay = styled.div``;
const TimeWrap = styled.div``;

export const MusicApp = () => {
  return (
    <>
      <Wrap>
        <Con>
          <Icon>
            <FontAwesomeIcon icon={faCircleChevronDown} />
            {/* 1. 폰트어썸 html코드복사(링크를 한번 거치기 때문에 느려짐) 
            2. 폰트어썸 확장프로그램 깔고 불러오기 */}
            <FontAwesomeIcon icon={faBars} />
          </Icon>
          <Album />
          {/* 따로 스타일빼서 불러오는 방법! 스타일 파일에서 export하고 여기서 연결하기
          일반 컴포넌트 연결할때랑 똑같음~ => 스타일 컴포넌트니까 당연한건가..? */}
          <NameWrap>
            <Song></Song>
            <Singer></Singer>
          </NameWrap>
          <BarWrap>
            <Bar></Bar>
            <TimeWrap>
              <h1>00:03</h1>
              <h1>03:40</h1>
            </TimeWrap>
          </BarWrap>
          <NextPlay></NextPlay>
        </Con>
      </Wrap>
    </>
  );
};
