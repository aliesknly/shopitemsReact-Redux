import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {messageClearSuccess, userLogoutFail, userLogoutSuccess} from '../../actions'
//Services
import {apiGET} from '../../services/apiMethod'
import {delTokenAuth} from '../../services/storeSession'

const apiCall = () => {
    return apiGET('/auth/getUser',true)
};

const deleteToken = () => {
    delTokenAuth()
};

const sagaRequest = function* sagaRequest(action){
    const {payload} = action;
    try{
        yield put(messageClearSuccess());
        yield call(apiCall,payload);
        yield call(deleteToken);
        yield put(userLogoutSuccess());
    }catch(e){
        yield put(userLogoutFail());
    }
} ;

const LogoutRequest = function* LogoutRequest(){
    yield takeLatest(types.USER_LOGOUT_REQUEST, sagaRequest)
};

const logoutSaga = function* logoutSaga() {
    yield spawn(LogoutRequest)
};

export default logoutSaga;
