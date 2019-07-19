import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {checkoutAddFail, checkoutAddSuccess,checkoutSendRequest} from '../../actions'
//Services
import {apiPOST} from "../../services/apiMethod";

const apiCALL = (params) => (
  apiPOST('/auth/order',params,true)
);


const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        const response = yield call(apiCALL,payload);
        yield put(checkoutAddSuccess(response.data));
        yield put(checkoutSendRequest(response.data.data.id_order));
    } catch (e) {
        yield put(checkoutAddFail());
    }
};

const checkoutAddRequest = function* checkoutAddRequest() {
    yield takeLatest(types.CHECKOUT_ADD_REQUEST, sagaRequest)
};

const checkoutAddSaga = function* checkoutAddSaga() {
    yield spawn(checkoutAddRequest)
};

export default checkoutAddSaga;
