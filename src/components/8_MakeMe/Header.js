import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px;
`;
const Logo = styled.div``;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;
const Menu = styled.div``;

export const Header = () => {
  return (
    <Wrap>
      <Logo>
        <Link to="/">로고</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to="/sub1">메뉴1</Link>
        </Menu>
        <Menu>
          <Link to="/sub2">메뉴2</Link>
        </Menu>
      </MenuWrap>
    </Wrap>
  );
};
