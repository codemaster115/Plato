import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const types = {
   PROFILEREQUEST: 'PROFILE/PROFILEREQUEST',
   PROFILEREQUEST_SUCCESS: 'PROFILE/PROFILEREQUEST_SUCCESS',
   PROFILEREQUEST_FAIL: 'PROFILE/PROFILEREQUEST_FAIL',   
 };

export const initialState = fromJS({
   profileInfo: {
     engineeringTeamSize: ''
    },
 });

export const getProfileInfo = createAction(types.PROFILEREQUEST);

export default handleActions({
  [types.PROFILEREQUEST_SUCCESS]: (state, action) => {     
    return { ...state, profileInfo: action.result};
    },
  [types.PROFILEREQUEST_FAIL]: (state, action) => {    
    return { ...state, profileInfo: []};
    },
}, initialState);
