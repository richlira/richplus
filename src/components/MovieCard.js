import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img className="movie-card__image" src="assets/marvel.jpeg" alt={movie.title} />
      <div className="movie-card__body">
        <h5 className="movie-card__title">{movie.title}</h5>
        <h6 className="movie-card__subtitle">{movie.year}</h6>
        <p className="movie-card__text">{movie.sinopsis}</p>
        <p className="movie-card__duration">{movie.duration}</p>
        <p className="movie-card__category">{movie.category}</p>
      </div>
    </div>
  );
}

export default MovieCard;