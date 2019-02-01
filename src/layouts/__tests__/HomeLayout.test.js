import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import HomeLayout from '../HomeLayout';

const mockStore = configureStore();
let store;

describe('HomeLayout', () => {
  beforeEach(() => {
    store = mockStore({
      router: {
        location: {},
      },
      Login: {
        isAuthorized: true,
      },
    });
  });

  it('Compare snapshots', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomeLayout>
          <div />
        </HomeLayout>
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Renders without crashing', () => {
    mount(
      <Provider store={store}>
        <HomeLayout>
          <div />
        </HomeLayout>
      </Provider>,
    );
  });
});
