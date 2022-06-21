import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { EventMe } from "./components/6_H_Event/EventMe";
import { Menus } from "./components/Menus";
import { MusicApp } from "./components/MusicApp";
import { MusicHome } from "./components/MusicHome";
import { Routers } from "./components/7_Router/Routers";
import { Work } from "./components/Work";
import { workDb } from "./db";
import { GloalStyled } from "./style/styles";

function App() {
  return (
    <>
      <GloalStyled />
      {/* <Menus menu={menuName} /> */}
      {/* <Work workName={workDb} /> */}
      {/* <MusicApp /> */}
      {/* <MusicHome /> */}
      {/* <EventMe /> */}
      <Routers />
    </>
  );
}

export default App;

// export 함수 앞에 붙이니까 index에서 오류남
