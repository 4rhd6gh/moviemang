import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "@page/main";
import MovieList from "@page/movieList/MovieList";
import Search from "@page/search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/movielist" element={<MovieList />} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
