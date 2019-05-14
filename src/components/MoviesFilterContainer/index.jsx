import React, { useState } from 'react';
import MoviesFilterForm from 'components/MoviesFilterForm/index';
import MoviesFilterResultsCard from 'components/MoviesFilterResultsCard/index';

const MoviesFilterContainer = ({ moviesService }) => {
  const [movies, setMovies] = useState([]);

  // TODO Cover with unit tests
  const fetchMovies = search => {
    const encodedSearch = encodeURIComponent(search);
    moviesService.getMovies(encodedSearch).then(movies => {
      // console.log(movies);
      setMovies(movies);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <MoviesFilterForm
            onUpdate={fetchMovies}
            placeholder="Enter term and search"
          />
        </div>
      </div>
      <div className="row">
        {/* TODO Cover with unit test */}
        {movies.length == 0 && (
          <div className="col-sm-12" data-testid="noResultsDisplay">
            <div className="alert alert-secondary">No movies to display</div>
          </div>
        )}
        {/* TODO Cover with unit test */}
        {movies.length > 0 &&
          movies.map(movieDetails => (
            <div
              className="col-sm-4 mb-3"
              data-testid="resultsDisplay"
              key={movieDetails.id}
            >
              <MoviesFilterResultsCard {...movieDetails} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesFilterContainer;
