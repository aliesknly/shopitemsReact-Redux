import * as types from '../actionsTypes';

export const measureDeleteRequest = (payload) => ({
    type:types.MEASURE_DELETE_REQUEST,
    payload:parseInt(payload)
});

export const measureDeleteFail = () =>({
    type:types.MEASURE_DELETE_FAIL
});

export const measureDeleteSuccess = (payload) => ({
    type:types.MEASURE_DELETE_SUCCESS,
    payload:parseInt(payload)
});