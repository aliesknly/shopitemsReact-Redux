import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {productDeleteFail, productDeleteSuccess, messageClearSuccess, messageLoadSuccess} from '../../actions'
//Services
import {apiDELETE} from '../../services/apiMethod';

const apiCALL = (params) => {
    return apiDELETE(`/auth/product/${params}`, true)
};

const sagaRequest = function* sagaRequest(action) {
    const {payload} = action;
    try {
        yield put(messageClearSuccess());
        const response = yield call(apiCALL, payload);
        yield put(productDeleteSuccess(payload));
        yield put(messageLoadSuccess(response.data.message,'success'));
    } catch (e) {
        yield put(productDeleteFail());
    }
};

const productDeleteRequest = function* productDeleteRequest() {
    yield takeLatest(types.PRODUCT_DELETE_REQUEST, sagaRequest)
};

const productDeleteSaga = function* productDeleteSaga() {
    yield spawn(productDeleteRequest)
};

export default productDeleteSaga
