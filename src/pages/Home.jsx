import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";

import { movieList } from "../helpers/helpers";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieList);
  }, []);

  let navigate = useNavigate();

  const openMovie = (movie) => {
    navigate("/movie");
  };

  return (
    <>
      <div className="movies">
        {movies?.map((movie, index) => {
          return (
            <MovieBox
              movie={movie}
              key={index}
              openMovie={openMovie}
            />
          );
        })}
      </div>
    </>
  );
}
