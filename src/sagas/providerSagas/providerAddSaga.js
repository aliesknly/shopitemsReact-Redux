import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {providerAddFail, providerAddSuccess, messageLoadSuccess, messageClearSuccess} from '../../actions'
//Services
import {apiPOST} from '../../services/apiMethod';

const apiCALL = (params) => {

    return apiPOST('/auth/provider', params, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload);
        yield put(providerAddSuccess(response.data.data));
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(providerAddFail());
    }
};

const providerAddRequest = function* providerAddRequest() {
    yield takeLatest(types.PROVIDER_ADD_REQUEST, sagaRequest)
};

const providerAddSaga = function* providerAddSaga() {
    yield spawn(providerAddRequest)
};

export default providerAddSaga
