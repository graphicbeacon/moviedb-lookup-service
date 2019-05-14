import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, getByTestId } from 'react-testing-library';

import MoviesFilterResultsCard from './index';

describe('<MoviesFilterResultsCard />', () => {
  test('should match generated snapshot', () => {
    const tree = TestRenderer.create(<MoviesFilterResultsCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render movie title and description', () => {
    const { container } = render(
      <MoviesFilterResultsCard
        original_title="movie original title"
        overview="movie overview details"
      />
    );
    const title = getByTestId(container, 'resultsCardTitle');
    const description = getByTestId(container, 'resultsCardDesc');

    expect(title.textContent).toBe('movie original title');
    expect(description.textContent).toBe('movie overview details');
  });
});
