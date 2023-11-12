import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { TiChevronLeft, TiStar } from "react-icons/ti";
import "./MovieDetails.css";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();
  // const apiKey = "85a6b417525168d12e79799b0228bf42";
  const apiKey = import.meta.env.VITE_OPENDB_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieDetails(json);
      });
  }, [id]);

  return (
    <div className="detailsPage">
      <Link to="/" className="goBack">
        {" "}
        <TiChevronLeft className="arrowIcon" /> Movies
      </Link>
      {movieDetails && (
        <div
          className="background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
          }}
        >
          <div className="summary">
            <img
              src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div className="details">
              <h1>
                <span className="title">{movieDetails.title} </span>{" "}
                <span className="rating">
                  {" "}
                  <TiStar />
                </span>
                <span className="rating">
                  {Math.round(movieDetails.vote_average * 10) / 10}
                </span>
              </h1>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
