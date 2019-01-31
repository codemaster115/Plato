import Provider from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from './configureStore';
import BackNav from './BackNav';

const store = configureStore()

const instance = renderer.create(
  <Provider store={store}>
    <MyConnectedComponent />
  </Provider>
)

const tree = instance.toJSON()
expect(tree).toMatchSnapshot()
