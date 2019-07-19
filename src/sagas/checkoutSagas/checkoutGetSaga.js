import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {checkoutGetFail, checkoutGetSuccess} from '../../actions'
//Services
import {apiGET} from "../../services/apiMethod";

const apiCALL = (params) => (
  apiGET(`/auth/order/${params}`,true)
);


const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        const response = yield call(apiCALL,payload);
        yield put(checkoutGetSuccess(response.data.data));
    } catch (e) {
        yield put(checkoutGetFail());
    }
};

const checkoutGetRequest = function* checkoutGetRequest() {
    yield takeLatest(types.CHECKOUT_GET_REQUEST, sagaRequest)
};

const checkoutGetSaga = function* checkoutGetSaga() {
    yield spawn(checkoutGetRequest)
};

export default checkoutGetSaga;
