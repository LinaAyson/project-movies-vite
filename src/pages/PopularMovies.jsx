import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./PopularMovies.css";
import { MovieContext } from "../context/MovieContext";
import MovieItem from "../components/MovieItem";

const apiKey = "85a6b417525168d12e79799b0228bf42";

export default function PopularMovies() {
  const { movies, setMovies, searchTerm, isLoading, setIsLoading } =
    useContext(MovieContext);

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;
    const fetchMovies = async () => {
      try {
        setIsLoading(true); // Set loading to true when fetching
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      } finally {
        setIsLoading(false); // Set loading to false whether the fetch is successful or not
      }
    };

    // Only fetch popular movies when there's no search term
    if (!searchTerm) {
      fetchMovies();
    }
  }, [searchTerm, setMovies, setIsLoading]);

  return (
    <div className="moviesPage">
      {isLoading && (
        <div className="text-white ">
          <p>Loading...</p>
          <div className="loader"> </div>
        </div>
      )}
      {movies.map((movie, i) => (
        <MovieItem movie={movie} key={i} />
      ))}
      {!isLoading && movies.length === 0 && (
        <div className="text-white">
          <p>No movies found</p>
        </div>
      )}
    </div>
  );
}
