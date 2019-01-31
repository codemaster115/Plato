import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import AllMentees from '../AllMentees';

describe("<AllMenteesContainer/>", () => {
  it('Compare snapshots', () => {
    const Component = renderer.create(<AllMentees />);
  
    const Tree = Component.toJSON();
    expect(Tree).toMatchSnapshot();
  });
  it('Renders without crashing', () => {
    mount(<AllMentees />);
  });
})