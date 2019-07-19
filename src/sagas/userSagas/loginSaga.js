import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {
    userLoginFail,
    userLoginSuccess,
    userCheckAuthRequest,
    messageClearSuccess,
    messageLoadSuccess
} from '../../actions'
//Services
import {apiPOST} from '../../services/apiMethod'
import {setTokenAuth} from '../../services/storeSession'

const loginAPI = (params) => {
    return apiPOST('/login',params)
};

const saveToken = (params) => {
    setTokenAuth(params)
};

const sagaRequest = function* sagaRequest(action){
    const {payload} = action;
    try{
        yield put(messageClearSuccess());
        const response = yield call(loginAPI,payload);
        yield call(saveToken,response.data.token);
        yield put(userLoginSuccess());
        yield put(userCheckAuthRequest());
    }catch(e){
        yield put(userLoginFail());
        yield put(messageLoadSuccess('User or password incorrect','danger'))
    }
} ;

const loginRequest = function* loginRequest(){
    yield takeLatest(types.USER_LOGIN_REQUEST, sagaRequest)
};

const loginSaga = function* loginSaga() {
    yield spawn(loginRequest)
};

export default loginSaga
