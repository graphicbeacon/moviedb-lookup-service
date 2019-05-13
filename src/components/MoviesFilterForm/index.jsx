import React, { useState } from 'react';

// Receives search term and returns it
const MoviesFilterForm = ({ onUpdate = () => {}, ...inputProps }) => {
  // Default state for form input
  const [search, setSearch] = useState('');
  const onSubmitHandler = e => {
    e.preventDefault();
    onUpdate(search);
  };

  return (
    <form
      data-testid="searchForm"
      onSubmit={onSubmitHandler}
      className="mt-5 mb-5"
    >
      <div className="input-group">
        <input
          type="search"
          data-testid="searchInput"
          className="form-control form-control-lg"
          value={search}
          onChange={e => setSearch(e.target.value)}
          {...inputProps}
        />
        <div className="input-group-append">
          <button
            data-testid="searchSubmit"
            className="btn btn-primary"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default MoviesFilterForm;
