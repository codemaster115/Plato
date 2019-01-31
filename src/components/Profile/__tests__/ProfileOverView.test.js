import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { ProfileOverViewComponent } from '../ProfileOverView';

describe('<ProfileOverViewComponent/>', () => {
  it('Compare snapshots', () => {
    const Component = renderer.create(<ProfileOverViewComponent />);

    const Tree = Component.toJSON();
    expect(Tree).toMatchSnapshot();
  });

  it('Renders without crashing', () => {
    mount(<ProfileOverViewComponent />);
  });
});
