import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {
    providerUpdateFail,
    providerUpdateSuccess,
    providerListRequest,
    messageClearSuccess,
    messageLoadSuccess
} from '../../actions'
//Services
import {apiUPDATE} from '../../services/apiMethod';

const apiCALL = (params, id) => {
    return apiUPDATE(`/auth/provider/${id}`, params, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload, id} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload, id);
        yield put(providerUpdateSuccess());
        yield put(providerListRequest());
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(providerUpdateFail());
    }
};

const providerUpdateRequest = function* providerUpdateRequest() {
    yield takeLatest(types.PROVIDER_UPDATE_REQUEST, sagaRequest)
};

const providerUpdateSaga = function* providerUpdateSaga() {
    yield spawn(providerUpdateRequest)
};

export default providerUpdateSaga
