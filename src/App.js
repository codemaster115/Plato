import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import AuthLayout from './layouts/AuthLayout';
import HomeLayout from './layouts/HomeLayout';
import ProfileLayout from './layouts/ProfileLayout';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Request from './containers/Request';
import AllMentees from './containers/AllMentees';
import Profile from './containers/profile';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <AppRoute exact path="/" layout={HomeLayout} component={AllMentees} />
        <AppRoute exact path="/request" layout={HomeLayout} component={Request} />
        <AppRoute exact path="/profile" layout={ProfileLayout} component={Profile} />
        <AppRoute exact path="/login" layout={AuthLayout} component={Login} />
        <AppRoute exact path="/signup" layout={AuthLayout} component={Signup} />        
      </Switch>
    </ConnectedRouter>
  </Provider>
);

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};
