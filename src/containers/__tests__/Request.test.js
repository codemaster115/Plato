import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { RequestContainer } from '../Request';
import SearchBar from '../../components/SearchBar';

describe('RequestContainer', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<RequestContainer/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render SearchBar', () => {
    const wrapper = shallow(<RequestContainer/>);
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  })
})