import { Link } from "react-router-dom";
import styled from "styled-components";

const Section1 = styled.div`
  height: 600px;
  padding: 0 0 0 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextWrap = styled.div`
  margin-top: 20px;
  width: 400px;
`;
const Title = styled.div`
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 10px;
`;
const Text = styled.div`
  margin-bottom: 30px;
`;
const BtnMore = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50px;
  text-align: center;
  line-height: 30px;
  font-weight: 900;
`;
const ImgBg = styled.div``;
const Bg = styled.div`
  width: 1000px;
  height: 600px;
  background: url(http://www.cmn.co.kr/webupload/ckeditor/images/20210809_135301_0515545.jpg)
    no-repeat right / cover;
`;

export const Main = () => {
  return (
    <>
      <Section1>
        <TextWrap>
          <Title>Information</Title>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
          <BtnMore>
            <Link to="/sub1">MORE +</Link>
          </BtnMore>
        </TextWrap>

        <ImgBg>
          <Bg></Bg>
        </ImgBg>
      </Section1>
    </>
  );
};
