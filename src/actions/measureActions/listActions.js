import * as types from '../actionsTypes';

export const measureListRequest = () => ({
    type:types.MEASURE_LIST_REQUEST,
});

export const measureListFail = () =>({
    type:types.MEASURE_LIST_FAIL
});

export const measureListSuccess = (payload) => ({
    type:types.MEASURE_LIST_SUCCESS,
    payload
});