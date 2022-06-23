import { Link } from "react-router-dom";
import styled from "styled-components";

const Section1 = styled.div`
  height: 600px;
  padding: 0 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(https://cdn-cms.packative.com/wp-content/uploads/2021/05/27135136/%ED%99%94%EC%9E%A5%ED%92%88-%ED%8C%A9-%EB%B0%8F-%EB%A7%88%EC%8A%A4%ED%81%AC-%ED%8F%AC%EC%9E%A5-%EB%8B%A8%EC%83%81%EC%9E%90-1024x575.png)
    no-repeat right / cover;
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
  width: 400px;
  height: 600px;
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
