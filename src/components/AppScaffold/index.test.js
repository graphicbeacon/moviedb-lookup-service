import React from 'react';
import TestRenderer from 'react-test-renderer';
import AppScaffold from './index';

describe('<App />', () => {
  test('should render without throwing', () => {
    const app = TestRenderer.create(<AppScaffold />);
    const appInstance = app.root;
    expect(appInstance.type).toBe(AppScaffold);
  });
});
