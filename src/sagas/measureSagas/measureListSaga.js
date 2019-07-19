import {call, put, spawn, takeLatest} from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionsTypes'
import {measureListFail, measureListSuccess, messageClearSuccess} from '../../actions'
//Services
import {apiGET} from '../../services/apiMethod'

const apiCALL = () => {
    return apiGET('/auth/measure',true);
};

const sagaRequest = function* sagaRequest(){
    try{
        yield put(messageClearSuccess());
        const response = yield call(apiCALL);
        yield put(measureListSuccess(response.data.data))
    }catch(e){
        yield put(measureListFail());
    }
} ;

const measureListRequest = function* measureListRequest(){
    yield takeLatest(types.MEASURE_LIST_REQUEST, sagaRequest)
};

const measureListSaga = function* measureListSaga() {
    yield spawn(measureListRequest)
};

export default measureListSaga
