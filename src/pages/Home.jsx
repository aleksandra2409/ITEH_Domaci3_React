import React, { useState, useEffect } from "react";
import MovieBox from "../components/MovieBox";

import { movieList } from "../helpers/helpers";

export default function Home(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieList);
  }, []);

  
  return (
    <>
      <div className="movies">
        {movies?.map((movie, index) => {
          return (
            <MovieBox
              movie={movie}
              key={index}
              openMovie={props.openMovie}
            />
          );
        })}
      </div>
    </>
  );
}
