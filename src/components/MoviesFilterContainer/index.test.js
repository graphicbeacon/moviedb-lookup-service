import React from 'react';
import TestRenderer from 'react-test-renderer';
import MoviesFilterContainer from './index';

describe('<MoviesFilterContainer />', () => {
  test('should match generated snapshot', () => {
    const tree = TestRenderer.create(<MoviesFilterContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
