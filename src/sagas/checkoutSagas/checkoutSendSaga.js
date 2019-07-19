import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {
    checkoutSendFail,
    checkoutSendSuccess,
    checkoutDeleteRequest,
    messageClearSuccess,
    messageLoadSuccess
} from '../../actions'
//Services
import {apiGET} from "../../services/apiMethod";

const apiCALL = (params) => (
    apiGET(`/auth/order/${params}/email`, true)
);


const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload);
        yield put(checkoutSendSuccess());
        yield put(checkoutDeleteRequest());
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(checkoutSendFail());
    }
};

const checkoutSendRequest = function* checkoutSendRequest() {
    yield takeLatest(types.CHECKOUT_SEND_REQUEST, sagaRequest)
};

const checkoutSendSaga = function* checkoutSendSaga() {
    yield spawn(checkoutSendRequest)
};

export default checkoutSendSaga;
