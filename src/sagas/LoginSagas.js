import { put, call, takeLatest } from 'redux-saga/effects';

import { types as LoginTypes } from '../ducks/login';
import Api from '../services/agent';


function* willValidate(action) {  
    const username = action.payload.username;
    const password = action.payload.password;    
    const response = yield call(Api.Auth.login, username, password);
    const result = response.result;

    if(result){
      Api.setToken(result.token);
      yield put({
        type: LoginTypes.LOGIN_SUCCESS,
        username,
        result
      });
    }
    else {
      yield put({
        type: LoginTypes.LOGIN_FAIL,
        username,
        result
      });
    }    
}

const LoginSagas = [
  takeLatest(LoginTypes.LOGIN_REQUEST, willValidate),
];

export default LoginSagas;
