import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Login from './login';
import Request from './request';
import NavBar from './navBar';
import Profile from './profile';

const rootReducer = history => combineReducers({
  Login,
  Request,
  NavBar,
  Profile,
  router: connectRouter(history),
});

export default rootReducer;
