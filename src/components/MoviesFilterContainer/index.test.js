import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, getByTestId, fireEvent } from 'react-testing-library';
import { reactHook, renderHook } from 'react-hooks-testing-library';

import MoviesFilterContainer from './index';

describe('<MoviesFilterContainer />', () => {
  test('should match generated snapshot', () => {
    const tree = TestRenderer.create(<MoviesFilterContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // TODO should fetch data on form submit
});
