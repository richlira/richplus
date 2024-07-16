import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.map((movie, index) => (
        <div className="col-md-4 mb-4 text-center" key={index}>
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://via.placeholder.com/150" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{movie.year}</h6>
              <p className="card-text">{movie.sinopsis}</p>
              <p className="card-text"><small className="text-muted">{movie.duration}</small></p>
              <p className="card-text"><small className="text-muted">{movie.category}</small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { MovieList };