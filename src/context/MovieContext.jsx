// MovieContext.js
import React, { createContext, useState } from "react";

// Skapa context
const MovieContext = createContext();

// Skapa en provider-komponent för att omsluta andra komponenter
const MovieProvider = ({ children }) => {
  // Tillståndsvariabler för filmer och funktion för att uppdatera dem
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Värdeobjektet som kommer att delas med komponenterna
  const contextValue = {
    movies,
    setMovies,
    searchTerm,
    setSearchTerm,
    isLoading,
    setIsLoading,
  };

  // Returnera provider med värdeobjektet
  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

// Exportera context och provider för användning i andra filer
export { MovieContext, MovieProvider };
