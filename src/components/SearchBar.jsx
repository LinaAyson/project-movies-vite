import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import "./SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const { setMovies, searchTerm, setSearchTerm, setIsLoading } =
    useContext(MovieContext);

  const apiKey = import.meta.env.VITE_OPENDB_KEY;
  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      const delayTimer = setTimeout(() => {
        fetchMovies();
      }, 1000); // Adjust the delay time (in milliseconds) as needed

      return () => clearTimeout(delayTimer); // Clear the timeout if the component unmounts or if a new search term is entered
    }
  }, [searchTerm, setMovies, setIsLoading]);

  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&language=en-US&page=1&query=${searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false whether the fetch is successful or not
      });
  };

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search movies..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
