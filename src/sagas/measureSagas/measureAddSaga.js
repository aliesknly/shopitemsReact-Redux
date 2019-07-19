import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {measureAddFail, measureAddSuccess, messageClearSuccess, messageLoadSuccess} from '../../actions'
//Services
import {apiPOST} from '../../services/apiMethod';

const apiCALL = (params) => {
   return apiPOST('/auth/measure', params, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload);
        yield put(measureAddSuccess(response.data.data));
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(measureAddFail());
    }
};

const measureAddRequest = function* measureAddRequest() {
    yield takeLatest(types.MEASURE_ADD_REQUEST, sagaRequest)
};

const measureAddSaga = function* measureAddSaga() {
    yield spawn(measureAddRequest)
};

export default measureAddSaga
