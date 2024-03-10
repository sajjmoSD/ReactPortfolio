import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
