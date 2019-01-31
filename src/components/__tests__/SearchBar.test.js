import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SearchBarComponent from '../SearchBar';

describe('<SearchBar/>', () => {
  it('Compare snapshots', () => {
    const tree = renderer.create(<SearchBarComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('Renders without crashing', () => {
    mount(<SearchBarComponent />);
  });
})