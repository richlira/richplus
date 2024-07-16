import { useState } from "react";

function useSearch(movies) {
  const [searchValue, setSearchValue] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return movieTitle.includes(searchText);
  });

  return { searchValue, setSearchValue, filteredMovies };
}

export default useSearch;