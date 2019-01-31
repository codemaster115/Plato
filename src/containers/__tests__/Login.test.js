import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Login, { LogInLayoutContainer } from '../Login';
import Form from '../../components/Form';

const initialState = {};
const mockStore = configureStore();
let wrapper;
let store;

describe('LoginContainer', () => {
  beforeEach(() => {
    store = mockStore();
    wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render login from', () => {
    const wrapper = shallow(<LogInLayoutContainer/>);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
