import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {
    measureUpdateFail,
    measureUpdateSuccess,
    measureListRequest,
    messageClearSuccess,
    messageLoadSuccess
} from '../../actions'
//Services
import {apiUPDATE} from '../../services/apiMethod';

const apiCALL = (params, id) => {
    return apiUPDATE(`/auth/measure/${id}`, params, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload, id} = action;
    try {
        yield put(messageClearSuccess());
       const response = yield call(apiCALL, payload, id);
        yield put(measureUpdateSuccess());
        yield put(measureListRequest());
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(measureUpdateFail());
    }
};

const measureUpdateRequest = function* measureUpdateRequest() {
    yield takeLatest(types.MEASURE_UPDATE_REQUEST, sagaRequest)
};

const measureUpdateSaga = function* measureUpdateSaga() {
    yield spawn(measureUpdateRequest)
};

export default measureUpdateSaga
