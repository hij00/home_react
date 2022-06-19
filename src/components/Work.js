import styledComponents from "styled-components";
import { Box, Con, ConWrap, Desc, Title, Wrap } from "../style/workStyles";

// const Wrap = styledComponents.div`
// width: `

// const Wrap = styledComponents.div`
// `

export const Work = ({ workName }) => {
  return (
    <Box>
      {/* 스타일을 통채로 적용하는 방법! 컴포넌트처럼 쓰면됨(css파일 분리한 것처럼) */}

      <Wrap>
        {workName.map((works) => (
          <ConWrap>
            <Con
              style={{
                backgroundImage: `url(${works.bg})`,
              }}
            />
            {/* <img src={works.bg} /> */}
            <Title>{works.title}</Title>
            <Desc>{works.desc}</Desc>
          </ConWrap>
        ))}
      </Wrap>
    </Box>
  );
};
