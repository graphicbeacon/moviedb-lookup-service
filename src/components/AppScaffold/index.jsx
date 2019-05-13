import React from 'react';

import MoviesFilterContainer from '../MoviesFilterContainer/index';

const AppScaffold = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        TheMovieDB Lookup Service
      </a>
    </nav>
    <MoviesFilterContainer />
  </>
);

export default AppScaffold;
