import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "@page/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  );
}

export default App;
