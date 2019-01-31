import { all } from 'redux-saga/effects';

import LoginSagas from './LoginSagas';
import RequestSagas from './RequestSagas';
import ProfileSagas from './ProfileSagas';

export default function* mySaga() {
  yield all([
    ...LoginSagas,
    ...RequestSagas,
    ...ProfileSagas,
  ]);
}
