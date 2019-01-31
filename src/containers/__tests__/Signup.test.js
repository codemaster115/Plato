import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Signup, { SignupLayoutContainer } from '../Signup';
import Form from '../../components/Form';

const initialState = {};
const mockStore = configureStore();
let store;

describe('SignupLayoutContainer', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignupLayoutContainer />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render form', () => {
    const wrapper = shallow(<SignupLayoutContainer />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
