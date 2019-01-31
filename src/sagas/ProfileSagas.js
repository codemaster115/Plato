import { put, call, takeLatest } from 'redux-saga/effects';

import { types as ProfileTypes } from '../ducks/profile';
import Api from '../services/agent';

function* willGetProfile(action) {  
    const id = action.payload;      
    const response = yield call(Api.Profile.getProfileInfo, id);
    const result = response.result;
    
    if(result){      
      yield put({
        type: ProfileTypes.PROFILEREQUEST_SUCCESS,        
        result,
      });
    }
    else {
      yield put({
        type: ProfileTypes.PROFILEREQUEST_FAIL,
        result,     
      });
    }    
}

const ProfileSagas = [
  takeLatest(ProfileTypes.PROFILEREQUEST, willGetProfile),
];

export default ProfileSagas;
