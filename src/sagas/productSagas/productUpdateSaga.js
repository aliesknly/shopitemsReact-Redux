import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {
    productUpdateFail,
    productUpdateSuccess,
    productListRequest,
    messageClearSuccess,
    messageLoadSuccess
} from '../../actions'
//Services
import {apiUPDATE} from '../../services/apiMethod';

const apiCALL = (params, id) => {
    return apiUPDATE(`/auth/product/${id}`, params, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload, id} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload, id);
        yield put(productUpdateSuccess());
        yield put(productListRequest());
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(productUpdateFail());
    }
};

const productUpdateRequest = function* productUpdateRequest() {
    yield takeLatest(types.PRODUCT_UPDATE_REQUEST, sagaRequest)
};

const productUpdateSaga = function* productUpdateSaga() {
    yield spawn(productUpdateRequest)
};

export default productUpdateSaga
