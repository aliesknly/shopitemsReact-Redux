import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {messageClearSuccess, providerListFail, providerListSuccess} from '../../actions'
//Services
import {apiGET} from '../../services/apiMethod'

const apiCALL = () => {
    return apiGET('/auth/provider',true);
};

const sagaRequest = function* sagaRequest(){
    try{
        yield put(messageClearSuccess());
        const response = yield call(apiCALL);
        yield put(providerListSuccess(response.data.data))
    }catch(e){
        yield put(providerListFail());
    }
} ;

const providerListRequest = function* providerListRequest(){
    yield takeLatest(types.PROVIDER_LIST_REQUEST, sagaRequest)
};

const providerListSaga = function* providerListSaga() {
    yield spawn(providerListRequest)
};

export default providerListSaga
