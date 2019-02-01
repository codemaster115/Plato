import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import ProfileLayout from '../ProfileLayout';

const mockStore = configureStore();
let store;

describe('ProfileLayout', () => {
  beforeEach(() => {
    store = mockStore({
      router: {
        location: {},
      },
      Login: {
        username: 'test',
      },
    });
  });

  it('Compare snapshots', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProfileLayout>
          <div />
        </ProfileLayout>
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Renders without crashing', () => {
    mount(
      <Provider store={store}>
        <ProfileLayout>
          <div />
        </ProfileLayout>
      </Provider>,
    );
  });
});
