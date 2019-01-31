import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Typography from '../Typography';

test('Compare snapshots', () => {
  const Component = renderer.create(<Typography />);

  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});

test('Renders without crashing', () => {
  mount(<Typography />);
});