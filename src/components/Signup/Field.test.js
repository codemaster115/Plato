import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Input } from '@material-ui/core';

import Field from './Field';

describe('Signup Field', () => {
  it('Compare snapshots', () => {
    const Component = renderer.create(<Field />);

    const Tree = Component.toJSON();
    expect(Tree).toMatchSnapshot();
  });

  it('Renders without crashing', () => {
    mount(<Field />);
  });

  it('Renders 5 input field', () => {
    const wrapper = shallow(<Field />);
    expect(wrapper.find(Input)).toHaveLength(5);
  });
});
