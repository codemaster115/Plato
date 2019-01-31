import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SearchBarComponent from '../SearchBar';

test('Compare snapshots', () => {
  const Component = renderer.create(<SearchBarComponent />);

  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});
test('Renders without crashing', () => {
  mount(<SearchBarComponent />);
});