import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onClick={() => onMovieClick(movie)} />
      ))}
    </div>
  );
}

export { MovieList };