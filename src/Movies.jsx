import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const API_URL = "https://www.omdbapi.com/?s='avengers'&apikey=910fecc5";
    const res = await fetch(API_URL);
    const data = await res.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies();
    setIsLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const title = `https://www.omdbapi.com/?s=${searchMovie}&apikey=910fecc5`;
      const res = await fetch(title);
      const data = await res.json();
      setMovies(data.Search);
    } catch (e) {
      console.log("Error", e);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <header className="header-container">
        <div className="header-title">
          <h1>Movie Planet</h1>
        </div>
        <div className="header-search">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="Search for Movies"
              name="movie"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button className="form-button">Search</button>
          </form>
        </div>
      </header>
      <main>
        {isLoading ? (
          <div>
            <h2 className="loading">Loading...</h2>
          </div>
        ) : (
          <div>
            {movies.length > 0 ? (
              <div className="movie-container">
                {movies.map((movie) => {
                  return (
                    <MovieCard
                      key={movie.imdbID}
                      poster={movie.Poster}
                      title={movie.Title}
                      year={movie.Year}
                      imdbID={movie.imdbID}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="empty">
                <h2>No Movies Found</h2>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
