import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions'

export const types = {
  ALLREQUESTSSHOW: 'REQUESTS/REQUESTS_ALLREQUESTSSHOW',
  REQUESTMATCHSHOW: 'REQUESTS/REQUESTS_REQUESTMATCHSHOW',
  REQUESTMATCH: 'REQUESTS/REQUESTS_REQUESTMATCH',
  REQUESTMATCHSUCCESS: 'REQUESTS/REQUESTS_REQUESTMATCHSUCCESS',
  REQUESTMATCHFAIL: 'REQUESTS/REQUESTS_REQUESTMATCHFAIL',
 };

export const initialState = fromJS({
   requestToMatchShow: false,
   isShowAllRequest: true,
   isShowRequestMatch: false,
   requestInfo: {},
 });

export const ShowAllRequest = createAction(types.ALLREQUESTSSHOW);
export const ShowRequestToMatch = createAction(types.REQUESTMATCH);

export default handleActions({
  [types.ALLREQUESTSSHOW]: (state, action) => {
    return { ...state, isShowAllRequest: true, isShowRequestMatch: false, };
    },
  [types.REQUESTMATCH]: (state, action) => {
    return { ...state, isShowAllRequest: false, isShowRequestMatch: true, };
    },
  [types.REQUESTMATCHSUCCESS]: (state, action) => {      
    return { ...state, requestInfo: action.result, };
    },
  [types.REQUESTMATCHFAIL]: (state, action) => {    
    return { ...state, requestInfo: {}, };
    },
}, initialState);
