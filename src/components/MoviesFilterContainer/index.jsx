import React, { useState } from 'react';
import { GLOBAL_CONFIG } from 'config/constants';
import MoviesFilterForm from 'components/MoviesFilterForm/index';
import MoviesFilterResultsCard from 'components/MoviesFilterResultsCard/index';
import MoviesService from 'services/MoviesService';

const { endpoint, apiKey } = GLOBAL_CONFIG;
const moviesService = new MoviesService(apiKey, endpoint);

const MoviesFilterContainer = () => {
  const [movies, setMovies] = useState([]);

  // TODO Cover with unit tests
  const fetchMovies = search => {
    const encodedSearch = encodeURIComponent(search);
    moviesService.getMovies(encodedSearch).then(movies => {
      console.log(movies);
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
          <div className="col-sm-12">
            <div className="alert alert-secondary">No movies to display</div>
          </div>
        )}
        {/* TODO Cover with unit test */}
        {movies.length > 0 &&
          movies.map(movieDetails => (
            <div className="col-sm-4 mb-3">
              <MoviesFilterResultsCard {...movieDetails} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesFilterContainer;
