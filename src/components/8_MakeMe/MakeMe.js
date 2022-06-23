import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Sub1 } from "./components/Sub1";
import { Sub2 } from "./components/Sub2";
import { Header } from "./Header";

export const MakeMe = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/sub1" element={<Sub1 />}></Route>
        <Route path="/sub2" element={<Sub2 />}></Route>
      </Routes>
    </Router>
  );
};
