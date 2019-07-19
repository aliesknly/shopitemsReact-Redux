import * as types from '../actionsTypes';

export const checkoutSendRequest = (payload) => ({
    type:types.CHECKOUT_SEND_REQUEST,
    payload
});

export const checkoutSendFail = () =>({
    type:types.CHECKOUT_SEND_FAIL
});

export const checkoutSendSuccess = () => ({
    type:types.CHECKOUT_SEND_SUCCESS,
});