import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { Routes, Route, useNavigate } from "react-router-dom";

import { movieList } from "./helpers/helpers";

function App() {
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    setMovies(movieList);
  }, []);

  let navigate = useNavigate();

  const openMovie = (movie) => {
    navigate("/movie");
    setMovie(movie);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title?.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSort = () => {
    let sortedMovies;
    if (sortDirection === "desc") {
      sortedMovies = [...movies].sort((a, b) => a.year - b.year);
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      sortedMovies = [...movies].sort((a, b) => b.year - a.year);
      setSortDirection("desc");
    }

    setMovies(sortedMovies);
  };

  return (
    <>
      <Header handleChange={handleChange} handleSort={handleSort} />
      <Routes>
        <Route
          path="/"
          element={
            <Home movies={filteredMovies} openMovie={openMovie} a={movies} />
          }
        />
        <Route path="/movie" element={<Movie movie={movie} />} />
      </Routes>
    </>
  );
}

export default App;
