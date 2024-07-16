import React from "react";

function MovieDetails({ movie, onBack }) {
  const trailer = movie.trailer;
  return (
    <div className="container">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        Back
      </button>
      <div className="card">
        <div className="align-items-center">
          <div className="row">
            <iframe
              height="415"
              src={trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{movie.year}</h6>
          <p className="card-text">{movie.sinopsis}</p>
          <p className="card-text">
            <small className="text-muted">{movie.duration}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">{movie.category}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export { MovieDetails };
