import * as types from '../actionsTypes';

export const measureAddRequest = (payload) => ({
    type:types.MEASURE_ADD_REQUEST,
    payload
});

export const measureAddFail = () =>({
    type:types.MEASURE_ADD_FAIL
});

export const measureAddSuccess = (payload) => ({
    type:types.MEASURE_ADD_SUCCESS,
    payload
});