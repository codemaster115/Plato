import React from 'react';
import Enzyme, { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import MenteeCard from './MenteeCard';

Enzyme.configure({ adapter: new Adapter() });

test('Compare snapshots', () => {
  const Component = renderer.create(<MenteeCard />);

  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});
test('Renders without crashing', () => {
  mount(<MenteeCard />);
});