import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {messageClearSuccess, userCheckAuthFail, userCheckAuthSuccess} from '../../actions'
//Services
import {apiGET} from '../../services/apiMethod'

const checkAuthAPI = () => {
    return apiGET('/auth/getUser',true)
};

const sagaRequest = function* sagaRequest(){
    try{
        yield put(messageClearSuccess());
        const response = yield call(checkAuthAPI);
        yield put(userCheckAuthSuccess(response.data))
    }catch(e){
        yield put(userCheckAuthFail());
    }
} ;

const checkAuthRequest = function* checkAuthRequest(){
    yield takeLatest(types.USER_CHECK_AUTH_REQUEST, sagaRequest)
};

const checkAuthSaga = function* checkAuthSaga() {
    yield spawn(checkAuthRequest)
};

export default checkAuthSaga
