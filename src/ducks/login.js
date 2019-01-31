import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const types = {
   LOGIN_REQUEST: 'LOGIN/LOGIN_REQUEST',
   LOGIN_SUCCESS: 'LOGIN/LOGIN_SUCCESS',
   LOGIN_FAIL: 'LOGIN/LOGIN_FAIL',
   LOGOUT: 'LOGIN/LOGOUT',
 };

export const initialState = fromJS({
   username: '',
   userId:'',
   isAuthorized: false
 });

export const login = createAction(types.LOGIN_REQUEST);
export const logout = createAction(types.LOGOUT);

export default handleActions({
  [types.LOGIN_SUCCESS]: (state, action) => {        
    return { ...state, username: fromJS(action.username), userId: fromJS(action.result.userId), isAuthorized: true};
    },
  [types.LOGIN_FAIL]: (state, action) => {    
    return { ...state, username: fromJS(action.username), userId: null, isAuthorized: false};
    },
  [types.LOGOUT]: (state, action) => {    
    return { ...state, isAuthorized: false};
    },
}, initialState);
