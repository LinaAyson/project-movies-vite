import React, { useState, useEffect, useContext } from "react";
import "./PopularMovies.css";
import { MovieContext } from "../context/MovieContext";
import MovieItem from "../components/MovieItem";

export default function TopRatedMovies() {
  const {
    movies = [],
    setMovies,
    searchTerm,
    isLoading,
    setIsLoading,
  } = useContext(MovieContext);
  const apiKey = import.meta.env.VITE_OPENDB_KEY;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true); // Set loading to true when fetching
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      } finally {
        // Set loading to false whether the fetch is successful or not
        setIsLoading(false);
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
