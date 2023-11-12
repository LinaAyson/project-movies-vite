import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PopularMovies from "./pages/PopularMovies";
import MovieDetails from "./pages/MovieDetails";
import SearchBar from "./components/SearchBar";
import MovieItem from "./components/MovieItem";
import { MovieProvider } from "./context/MovieContext";
import TopRatedMovies from "./pages/TopRatedMovies";

export const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          {/* <Route path="/movie/:id" element={<MovieItem />} /> */}
          <Route path="/upcoming" element={<TopRatedMovies />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};
