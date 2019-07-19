import * as types from '../actionsTypes';

export const orderAddRequest = (payload) => ({
    type:types.ORDER_ADD_REQUEST,
    payload
});

export const orderAddFail = () =>({
    type:types.ORDER_ADD_FAIL
});

export const orderAddSuccess = (payload) => ({
    type:types.ORDER_ADD_SUCCESS,
    payload
});