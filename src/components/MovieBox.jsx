import React from "react";

export default function MovieBox(props) {
  return (
    <div className="movie__box" onClick={() => props.openMovie(props.movie)}>
      <div className="movie__title">{props.movie.title}</div>
      <div className="movie__genre">{props.movie.genre}</div>
      <div className="movie__year">{props.movie.year}</div>
      <div className="movie__description">{props.movie.storyline}</div>
    </div>
  );
}
