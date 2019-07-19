import * as types from '../actionsTypes';

export const checkoutGetRequest = (payload) => ({
    type:types.CHECKOUT_GET_REQUEST,
    payload
});

export const checkoutGetFail = () =>({
    type:types.CHECKOUT_GET_FAIL
});

export const checkoutGetSuccess = (payload) => ({
    type:types.CHECKOUT_GET_SUCCESS,
    payload
});