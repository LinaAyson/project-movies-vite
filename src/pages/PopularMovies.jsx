import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PopularMovies.css";
// declaring my apikey to a variable
const apiKey = "85a6b417525168d12e79799b0228bf42";

export default function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="moviesPage">
      {/* Mapping through movies */}
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="details">
            <h1>{movie.title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
