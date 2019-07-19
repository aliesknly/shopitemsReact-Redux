import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {measureDeleteFail, measureDeleteSuccess, messageClearSuccess, messageLoadSuccess} from '../../actions'
//Services
import {apiDELETE} from '../../services/apiMethod';

const apiCALL = (params) => {
    return apiDELETE(`/auth/measure/${params}`, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload);
        yield put(measureDeleteSuccess(payload));
        yield put(messageLoadSuccess(response.data.message, 'success'));
    } catch (e) {
        yield put(measureDeleteFail());
    }
};

const measureDeleteRequest = function* measureDeleteRequest() {
    yield takeLatest(types.MEASURE_DELETE_REQUEST, sagaRequest)
};

const measureDeleteSaga = function* measureDeleteSaga() {
    yield spawn(measureDeleteRequest)
};

export default measureDeleteSaga
