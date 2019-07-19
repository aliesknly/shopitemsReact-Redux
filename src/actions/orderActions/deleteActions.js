import * as types from '../actionsTypes';

export const orderDeleteRequest = (payload) => ({
    type:types.ORDER_DELETE_REQUEST,
    payload:parseInt(payload)
});

export const orderDeleteFail = () =>({
    type:types.ORDER_DELETE_FAIL
});

export const orderDeleteSuccess = (payload) => ({
    type:types.ORDER_DELETE_SUCCESS,
    payload:parseInt(payload)
});