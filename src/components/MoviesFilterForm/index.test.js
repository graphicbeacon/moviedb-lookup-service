import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent, getByTestId } from 'react-testing-library';

import MoviesFilterForm from './index';

describe('<MoviesFilterForm />', () => {
  test('should match generated snapshot', () => {
    // Arrange, Act
    const tree = TestRenderer.create(<MoviesFilterForm />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });

  test('should trigger form update event', () => {
    // Arrange
    const onUpdateFn = jest.fn();
    const { container } = render(<MoviesFilterForm onUpdate={onUpdateFn} />);
    const form = getByTestId(container, 'searchForm');
    const button = getByTestId(container, 'searchSubmit');

    // Act, Assert
    fireEvent.submit(form);
    expect(onUpdateFn.mock.calls.length).toBe(1);

    // Act, Assert
    fireEvent.click(button);
    expect(onUpdateFn.mock.calls.length).toBe(2);
  });

  test('should update input with search term', () => {
    // Arrange
    const onSubmitFn = jest.fn();
    const { container } = render(<MoviesFilterForm onUpdate={onSubmitFn} />);
    const input = getByTestId(container, 'searchInput');

    // Act
    fireEvent.change(input, { target: { value: 'search term' } });

    // Assert
    expect(input.value).toBe('search term');
  });

  // TODO: Should prevent default submit event

  test('Should have empty method if submit handler not specified', () => {
    // Arrange, Act
    const tree = TestRenderer.create(<MoviesFilterForm />).toJSON();

    // Assert
    expect(tree.props.onSubmit).toBeDefined();
  });

  test('should have placeholder with instructions', () => {
    // Arrange, Act
    const { container } = render(
      <MoviesFilterForm placeholder="Enter search and submit" />
    );
    const input = getByTestId(container, 'searchInput');

    // Assert
    expect(input.placeholder).toEqual('Enter search and submit');
  });
});
