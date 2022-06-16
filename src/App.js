import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Menus } from "./components/Menus";
import { Work } from "./components/Work";
import { workDb } from "./db";
import { GloalStyled } from "./style/styles";

function App() {
  return (
    <>
      <GloalStyled />
      {/* <Menus menu={menuName} /> */}
      <Work workName={workDb} />
    </>
  );
}

export default App;

// export 함수 앞에 붙이니까 index에서 오류남
