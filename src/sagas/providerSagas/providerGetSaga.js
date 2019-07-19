import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {providerGetFail, providerGetSuccess} from '../../actions'
//Services
import {apiGET} from '../../services/apiMethod';

const apiCALL = (id) => {
   return apiGET(`/auth/provider/${id}`, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        const response = yield call(apiCALL, payload);
        yield put(providerGetSuccess(response.data.data))
    } catch (e) {
        yield put(providerGetFail());
    }
};

const providerGetRequest = function* providerGetRequest() {
    yield takeLatest(types.PROVIDER_GET_REQUEST, sagaRequest)
};

const providerGetSaga = function* providerGetSaga() {
    yield spawn(providerGetRequest)
};

export default providerGetSaga
