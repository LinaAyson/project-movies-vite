import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => (
  <Link to={`/movie/${movie.id}`}>
    <img
      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
      alt={movie.title}
    />
    <div className="details">
      <h1>{movie.title}</h1>
      <p>Released {movie.release_date}</p>
    </div>
  </Link>
);

export default MovieItem;
