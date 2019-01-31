import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('<BackNav/>', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<NavBar/>);
  });

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
