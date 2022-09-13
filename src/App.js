import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [movie, setMovie] = useState([]);

  let navigate = useNavigate();

  const openMovie = (movie) => {
    navigate("/movie");
    setMovie(movie);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home openMovie={openMovie} />} />
        <Route path="/movie" element={<Movie movie={movie} />} />
      </Routes>
    </>
  );
}

export default App;
