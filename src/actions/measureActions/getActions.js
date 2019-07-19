import * as types from '../actionsTypes';

export const measureGetRequest = (payload) => ({
    type:types.MEASURE_GET_REQUEST,
    payload:parseInt(payload)
});

export const measureGetFail = () =>({
    type:types.MEASURE_GET_FAIL
});

export const measureGetSuccess = (payload) => ({
    type:types.MEASURE_GET_SUCCESS,
    payload
});