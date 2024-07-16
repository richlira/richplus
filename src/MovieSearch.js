import React from 'react';

function MovieSearch({
  searchValue,
  setSearchValue,
}) {
  return (
    <input
    type="text" className="form-control mb-3"
      placeholder="Search Movie"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { MovieSearch };
