import React from 'react';

import { GLOBAL_CONFIG } from 'config/constants';
import MoviesFilterContainer from 'components/MoviesFilterContainer/index';
import MoviesService from 'services/MoviesService';

const { endpoint, apiKey } = GLOBAL_CONFIG;

const moviesService = new MoviesService(apiKey, endpoint);

const AppScaffold = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        TheMovieDB Lookup Service
      </a>
    </nav>
    <MoviesFilterContainer moviesService={moviesService} />
  </>
);

export default AppScaffold;
