import Header from "./components/templates/Header";
import { Route, Routes } from "react-router-dom";
import { AppDiv } from "./styled/app";
import Home from "./views/home";
import Idro from "./views/idro";
import React from "react";

function App() {
  return (
    <AppDiv>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idro" element={<Idro />} />
      </Routes>
    </AppDiv>
  );
}

export default App;
