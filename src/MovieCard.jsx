import React from "react";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      <img
        src={
          props.poster !== "N/A"
            ? props.poster
            : "https://via.placeholder.com/400"
        }
        alt="poster"
        className="movie-poster"
      />
      <div className="movie-details">
        <h4 className="movie-title">
          Title: <span className="sub">{props.title}</span>
        </h4>
        <h4 className="movie-year">
          Year: <span className="sub">{props.year}</span>
        </h4>
        <h4>
          imdbID: <span className="sub">{props.imdbID}</span>
        </h4>
      </div>
    </div>
  );
}
