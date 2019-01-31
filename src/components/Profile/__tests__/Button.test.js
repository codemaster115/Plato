import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../Button';

test('Compare snapshots', () => {
  const Component = renderer.create(<Button />);

  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});
test('Renders without crashing', () => {
  mount(<Button />);
});