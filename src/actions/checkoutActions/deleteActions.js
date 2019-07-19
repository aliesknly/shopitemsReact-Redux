import * as types from '../actionsTypes';

export const checkoutDeleteRequest = (payload) => ({
    type:types.CHECKOUT_DELETE_REQUEST,
    payload
});

export const checkoutDeleteFail = () =>({
    type:types.CHECKOUT_DELETE_FAIL
});

export const checkoutDeleteSuccess = (payload) => ({
    type:types.CHECKOUT_DELETE_SUCCESS,
    payload
});