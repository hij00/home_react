import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { EventMe } from "./components/6_H_Event/EventMe";
import { Menus } from "./components/Menus";
import { MusicApp } from "./components/MusicApp";
import { MusicHome } from "./components/MusicHome";
import { Routers } from "./components/7_Router/Routers";
import { Work } from "./components/Work";
import { workDb } from "./db";
import { MakeMe } from "./components/8_MakeMe/MakeMe";
import { GlobalStyle } from "./GlobalStyle";
import { db } from "./components/8_MakeMe/db";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Menus menu={menuName} /> */}
      {/* <Work workName={workDb} /> */}
      {/* <MusicApp /> */}
      {/* <MusicHome /> */}
      {/* <EventMe /> */}
      {/* <Routers /> */}
      <MakeMe data={db} />
    </>
  );
}

export default App;

// export 함수 앞에 붙이니까 index에서 오류남
