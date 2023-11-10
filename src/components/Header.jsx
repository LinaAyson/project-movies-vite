import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { MovieContext } from "../context/MovieContext";

export default function Header() {
  const { setSearchTerm } = useContext(MovieContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end onClick={() => setSearchTerm("")}>
            Popular Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact">Contact</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
