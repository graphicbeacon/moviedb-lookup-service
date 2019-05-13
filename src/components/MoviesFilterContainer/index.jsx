import React, { useState } from 'react';

const MoviesFilterContainer = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <section className="mt-5 mb-5">
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="search"
                  className="form-control form-control-lg"
                  onChange={e => setSearch(e.target.value)}
                  value={search}
                  placeholder="Type to search"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MoviesFilterContainer;
