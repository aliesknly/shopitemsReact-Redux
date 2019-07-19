import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {messageClearSuccess, messageLoadSuccess, productAddFail, productAddSuccess} from '../../actions'
//Services
import {apiPOST} from '../../services/apiMethod';

const apiCALL = (params) => {

   return apiPOST('/auth/product', params, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload);
        yield put(productAddSuccess(response.data.data));
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(productAddFail());
    }
};

const productAddRequest = function* productAddRequest() {
    yield takeLatest(types.PRODUCT_ADD_REQUEST, sagaRequest)
};

const productAddSaga = function* productAddSaga() {
    yield spawn(productAddRequest)
};

export default productAddSaga
