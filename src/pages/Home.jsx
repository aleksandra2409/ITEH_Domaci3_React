import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const callMovieData = async () => {
    axios
      .get(`https://top-250-movies-api.herokuapp.com/api/v1/movies`)
      .then(function (response) {
        let data = response.data;
        setMovies(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    callMovieData();
  }, []);

  return (
    <div className="root">
      <Header />
      <div className="movies">
        {movies?.map((movie, index) => {
          return <MovieBox movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
}
