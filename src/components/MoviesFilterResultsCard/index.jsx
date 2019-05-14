import React from 'react';

const MoviesFilterResultsCard = ({
  original_title: originalTitle,
  overview
}) => (
  <div data-testid="resultsCard" className="card">
    <div className="card-body">
      <h3 data-testid="resultsCardTitle" className="card-title">
        {originalTitle}
      </h3>
      <p data-testid="resultsCardDesc" className="card-text">
        {overview}
      </p>
    </div>
  </div>
);

export default MoviesFilterResultsCard;
