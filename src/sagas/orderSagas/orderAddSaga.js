import {put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {messageClearSuccess, messageLoadSuccess, orderAddFail, orderAddSuccess} from '../../actions'
//Services

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        yield put(orderAddSuccess(payload));
        yield put(messageLoadSuccess('Order add','success'));
    } catch (e) {
        yield put(orderAddFail());
    }
};

const orderAddRequest = function* orderAddRequest() {
    yield takeLatest(types.ORDER_ADD_REQUEST, sagaRequest)
};

const orderAddSaga = function* orderAddSaga() {
    yield spawn(orderAddRequest)
};

export default orderAddSaga;
