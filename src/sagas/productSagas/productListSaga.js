import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {productListFail, productListSuccess,} from '../../actions'
//Services
import {apiGET} from '../../services/apiMethod'

const apiCALL = () => {
    return apiGET('/auth/product', true);
};

const sagaRequest = function* sagaRequest() {
    try {
        const response = yield call(apiCALL);
        yield put(productListSuccess(response.data.data));
    } catch (e) {
        yield put(productListFail());
    }
};

const productListRequest = function* productListRequest() {
    yield takeLatest(types.PRODUCT_LIST_REQUEST, sagaRequest)
};

const productListSaga = function* productListSaga() {
    yield spawn(productListRequest)
};

export default productListSaga
