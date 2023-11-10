import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PopularMovies from "./pages/PopularMovies";
import MovieDetails from "./pages/MovieDetails";
import UpcomingMovies from "./pages/UpcomingMovies";
import SearchBar from "./components/SearchBar";
import MovieItem from "./components/MovieItem";
import { MovieProvider } from "./context/MovieContext";

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
          <Route path="/upcoming" element={<UpcomingMovies />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};
