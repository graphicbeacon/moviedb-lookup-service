import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, getByTestId, fireEvent } from 'react-testing-library';

import MoviesFilterForm from 'components/MoviesFilterForm/index';
import MoviesFilterResultsCard from 'components/MoviesFilterResultsCard/index';
import MoviesFilterContainer from './index';

describe('<MoviesFilterContainer />', () => {
  test('should match generated snapshot', () => {
    const tree = TestRenderer.create(<MoviesFilterContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should fetch data on search update', () => {
    // Arrange
    const mockMoviesService = {
      getMovies: jest.fn().mockImplementationOnce(() => Promise.resolve([]))
    };
    const { container } = render(
      <MoviesFilterContainer moviesService={mockMoviesService} />
    );
    const form = getByTestId(container, 'searchForm');
    const input = getByTestId(container, 'searchInput');

    // Act
    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.submit(form);

    // Assert
    expect(mockMoviesService.getMovies.mock.calls.length).toBe(1);
  });

  test('should show no results message', () => {
    // Arrange, Act
    const { container } = render(<MoviesFilterContainer />);

    // Assert
    expect(getByTestId(container, 'noResultsDisplay').textContent).toBe(
      'No movies to display'
    );
  });

  test('should show no results message if api results are empty', done => {
    // Arrange
    const mockMoviesService = {
      getMovies: () => Promise.resolve([])
    };
    const { container } = render(
      <MoviesFilterContainer moviesService={mockMoviesService} />
    );
    const form = getByTestId(container, 'searchForm');
    const input = getByTestId(container, 'searchInput');

    // Act
    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.submit(form);

    // API call made from onUpdate is asynchronous so
    // wrapping assertions in promise queue will
    // capture state changes after resolved api call
    Promise.resolve().then(() => {
      const alert = getByTestId(container, 'noResultsDisplay');
      // Assert
      expect(alert.textContent).toBe('No movies to display');
      done();
    });
  });

  test('should display results from api', done => {
    // Arrange
    const mockMoviesService = {
      getMovies: () =>
        Promise.resolve([
          {
            id: 1,
            original_title: 'movie title 1',
            overview: 'movie overview'
          },
          {
            id: 2,
            original_title: 'movie title 2',
            overview: 'movie overview'
          }
        ])
    };
    const { root } = TestRenderer.create(
      <MoviesFilterContainer moviesService={mockMoviesService} />
    );

    // Act
    root.findByType(MoviesFilterForm).props.onUpdate('search term');

    // API call made from onUpdate is asynchronous so
    // wrapping assertions in promise queue will
    // capture state changes after resolved api call
    Promise.resolve().then(() => {
      const results = root.findAllByType(MoviesFilterResultsCard);

      // Assert
      expect(results.length).toBe(2);
      expect(results[0].props.id).toBe(1);
      expect(results[0].props.original_title).toBe('movie title 1');
      expect(results[0].props.overview).toBe('movie overview');
      expect(results[1].props.id).toBe(2);
      expect(results[1].props.original_title).toBe('movie title 2');
      expect(results[1].props.overview).toBe('movie overview');
      done();
    });
  });
});
