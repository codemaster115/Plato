import { put, call, takeLatest } from 'redux-saga/effects';

import { types as RequestTypes } from '../ducks/request';
import Api from '../services/agent';


function* willRequestMatch(action) {  
    const isOb = action.payload;  
    const response = yield call(Api.Request.requestToMatch, isOb);
    const result = response.result;
    
    if(result){      
      yield put({
        type: RequestTypes.REQUESTMATCHSUCCESS,        
        result,
      });
    }
    else {
      yield put({
        type: RequestTypes.REQUESTMATCHFAIL,
        result,     
      });
    }    
}

const RequestSagas = [
  takeLatest(RequestTypes.REQUESTMATCH, willRequestMatch),
];

export default RequestSagas;
