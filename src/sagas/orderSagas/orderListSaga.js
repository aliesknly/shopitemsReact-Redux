import { put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {messageClearSuccess, orderListFail, orderListSuccess} from '../../actions'
//Services

const sagaRequest = function* sagaRequest(){
    try{
        yield put(messageClearSuccess());
        yield put(orderListSuccess())
    }catch(e){
        yield put(orderListFail());
    }
} ;

const orderListRequest = function* orderListRequest(){
    yield takeLatest(types.ORDER_LIST_REQUEST, sagaRequest)
};

const orderListSaga = function* orderListSaga() {
    yield spawn(orderListRequest)
};

export default orderListSaga
