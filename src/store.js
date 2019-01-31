import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './ducks/reducers';
import mySaga from './sagas/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();
// mount it on the Store
export default createStore(
  // reducer,
  createRootReducer(history),
  applyMiddleware(sagaMiddleware, routerMiddleware(history)),
);

// then run the saga
sagaMiddleware.run(mySaga);

// render the application
