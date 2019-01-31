import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

describe('<Form/>', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Form/>);
  });

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
