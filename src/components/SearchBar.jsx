// SearchBar.jsx

import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const apiKey = "85a6b417525168d12e79799b0228bf42";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&language=en-US&page=1&query=${searchTerm}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        })
        .finally(() => {
          setIsSearching(false);
        });
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchItemClick = (id) => {
    resetSearchResults();
    navigate(`/movie/${id}`);
  };

  const resetSearchResults = () => {
    setSearchResults([]);
    setSearchTerm("");
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
        <button className="btnSearch" onClick={() => setSearchTerm(searchTerm)}>
          Search
        </button>
      </div>

      {!isSearching && (
        <div className="moviesPage">
          {searchResults.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onClick={() => handleSearchItemClick(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
