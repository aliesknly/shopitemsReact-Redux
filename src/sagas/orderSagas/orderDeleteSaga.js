import {put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {messageClearSuccess, messageLoadSuccess, orderDeleteFail, orderDeleteSuccess} from '../../actions'
//Services

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        yield put(orderDeleteSuccess(payload));
        yield put(messageLoadSuccess('Order deleted','success'));
    } catch (e) {
        yield put(orderDeleteFail());
    }
};

const orderDeleteRequest = function* orderDeleteRequest() {
    yield takeLatest(types.ORDER_DELETE_REQUEST, sagaRequest)
};

const orderDeleteSaga = function* orderDeleteSaga() {
    yield spawn(orderDeleteRequest)
};

export default orderDeleteSaga
