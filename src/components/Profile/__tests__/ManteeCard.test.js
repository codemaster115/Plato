import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import MenteeCard from '../MenteeCard';

test('Compare snapshots', () => {
  const Component = renderer.create(<MenteeCard />);

  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});
test('Renders without crashing', () => {
  mount(<MenteeCard />);
});