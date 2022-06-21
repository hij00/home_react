import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Menu2 } from "./routes/Menu2";
import { Menu1 } from "./routes/Menu1";
import { Intro } from "./routes/Intro";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/menu_2" element={<Menu2 />} />
      </Routes>
    </Router>
  );
};
