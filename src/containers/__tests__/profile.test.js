import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ProfileContainer, { ProfileLayoutContainer } from '../profile';
import ProfileOverview from '../../components/Profile/ProfileOverView';

const initialState = {};
const mockStore = configureStore();
let store;

describe('ProfileLayoutContainer', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProfileContainer />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ProfileOverView', () => {
    const wrapper = shallow(<ProfileLayoutContainer />);
    expect(wrapper.find(ProfileOverview)).toHaveLength(1);
  });
});
