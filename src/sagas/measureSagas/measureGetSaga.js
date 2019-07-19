import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {measureGetFail, measureGetSuccess} from '../../actions'
//Services
import {apiGET} from '../../services/apiMethod';

const apiCALL = (id) => {
   return apiGET(`/auth/measure/${id}`, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        const response = yield call(apiCALL, payload);
        yield put(measureGetSuccess(response.data.data))
    } catch (e) {
        yield put(measureGetFail());
    }
};

const measureGetRequest = function* measureGetRequest() {
    yield takeLatest(types.MEASURE_GET_REQUEST, sagaRequest)
};

const measureGetSaga = function* measureGetSaga() {
    yield spawn(measureGetRequest)
};

export default measureGetSaga
