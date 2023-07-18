import {FC} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Browse} from "./Browse.tsx";
import {Create} from "./Create.tsx";
import {Home} from "./Home.tsx";
import {TopBar} from "./topBar.tsx";
import {Links} from "./Links.tsx";

const App:FC = () => {
  return (
    <BrowserRouter>
      <TopBar><Links/></TopBar>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/browse"} element={<Browse />} />
        <Route path={"/create"} element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };