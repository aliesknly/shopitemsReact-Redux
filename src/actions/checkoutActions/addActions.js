import * as types from '../actionsTypes';

export const checkoutAddRequest = (payload) => ({
    type:types.CHECKOUT_ADD_REQUEST,
    payload
});

export const checkoutAddFail = () =>({
    type:types.CHECKOUT_ADD_FAIL
});

export const checkoutAddSuccess = (payload) => ({
    type:types.CHECKOUT_ADD_SUCCESS,
    payload
});