import React from 'react';
import { shallow } from 'enzyme';
import RquestMatchTable from '../RequestMatchTable';

describe('<BackNav/>', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<RquestMatchTable/>);
  });

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
