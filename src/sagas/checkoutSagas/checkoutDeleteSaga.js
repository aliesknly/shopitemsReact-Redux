import {put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {checkoutDeleteFail, checkoutDeleteSuccess} from '../../actions'
//Services

const sagaRequest = function* sagaRequest() {
    try {
        yield put(checkoutDeleteSuccess())
    } catch (e) {
        yield put(checkoutDeleteFail());
    }
};

const checkoutDeleteRequest = function* checkoutDeleteRequest() {
    yield takeLatest(types.CHECKOUT_DELETE_REQUEST, sagaRequest)
};

const checkoutDeleteSaga = function* checkoutDeleteSaga() {
    yield spawn(checkoutDeleteRequest)
};

export default checkoutDeleteSaga;
