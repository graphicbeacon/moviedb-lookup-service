import React, { useState } from 'react';

import MoviesFilterForm from '../MoviesFilterForm/index';

const MoviesFilterContainer = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <MoviesFilterForm />
        </div>
      </div>
      {/* TODO Implement search results component */}
    </div>
  );
};

export default MoviesFilterContainer;
