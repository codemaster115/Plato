import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import AuthLayout from '../AuthLayout';

describe('AuthLayout', () => {
  it('Compare snapshots', () => {
    const Component = renderer.create(<AuthLayout />);

    const Tree = Component.toJSON();
    expect(Tree).toMatchSnapshot();
  });

  it('Renders without crashing', () => {
    mount(<AuthLayout />);
  });
});
