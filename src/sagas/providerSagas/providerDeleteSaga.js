import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {messageClearSuccess, messageLoadSuccess, providerDeleteFail, providerDeleteSuccess} from '../../actions'
//Services
import {apiDELETE} from '../../services/apiMethod';

const apiCALL = (params) => {
    return apiDELETE(`/auth/provider/${params}`, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload);
        yield put(providerDeleteSuccess(payload));
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(providerDeleteFail());
    }
};

const providerDeleteRequest = function* providerDeleteRequest() {
    yield takeLatest(types.PROVIDER_DELETE_REQUEST, sagaRequest)
};

const providerDeleteSaga = function* providerDeleteSaga() {
    yield spawn(providerDeleteRequest)
};

export default providerDeleteSaga
