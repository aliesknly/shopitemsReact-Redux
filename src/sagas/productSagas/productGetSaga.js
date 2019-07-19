import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {productGetFail, productGetSuccess, productEdit} from '../../actions'
//Services
import {apiGET} from '../../services/apiMethod';

const apiCALL = (id) => {
   return apiGET(`/auth/product/${id}`, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        const response = yield call(apiCALL, payload);
        yield put(productGetSuccess(response.data.data));
        yield put(productEdit());
    } catch (e) {
        yield put(productGetFail());
    }
};

const productGetRequest = function* productGetRequest() {
    yield takeLatest(types.PRODUCT_GET_REQUEST, sagaRequest)
};

const productGetSaga = function* productGetSaga() {
    yield spawn(productGetRequest)
};

export default productGetSaga
