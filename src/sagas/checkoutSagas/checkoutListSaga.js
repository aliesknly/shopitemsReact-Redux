import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {
    checkoutListFail, checkoutListSuccess, messageClearSuccess,
} from '../../actions'
//Services
import {apiGET} from "../../services/apiMethod";

const apiCALL = () => (
    apiGET('/auth/order', true)
);

const sagaRequest = function* sagaRequest() {
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL);
        yield put(checkoutListSuccess(response.data.data));
    } catch (e) {
        yield put(checkoutListFail());
    }
};

const checkoutListRequest = function* checkoutListRequest() {
    yield takeLatest(types.CHECKOUT_LIST_REQUEST, sagaRequest)
};

const checkoutListSaga = function* checkoutListSaga() {
    yield spawn(checkoutListRequest)
};

export default checkoutListSaga
