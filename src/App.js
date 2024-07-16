import React from "react";
import { MovieSearch } from "./components/MovieSearch";
import { MovieList } from "./components/MovieList";
import { MovieDetails } from "./components/MovieDetails";
import useSearch from "./hooks/useSearch";
import marvelMovies from "./data/marvelMovies";

function App() {

  const [selectedMovie, setSelectedMovie] = React.useState(null); 
  const {searchValue, setSearchValue, filteredMovies} = useSearch(marvelMovies);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div
        className="align-items-center"
      >
        <div className="text-center">
          <h1 className="mb-4">Rich+</h1>
          <h2 className="mb-3">Suscribase ya</h2>
          <div className="container">
          <MovieSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          ></MovieSearch>
          </div>
          <div className="container">
          {selectedMovie ? (
            <MovieDetails movie={selectedMovie} onBack={handleBackClick} />
          ) : (
            <MovieList movies={filteredMovies} onMovieClick={handleMovieClick} />
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
