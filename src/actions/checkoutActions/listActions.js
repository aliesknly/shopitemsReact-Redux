import * as types from '../actionsTypes';

export const checkoutListRequest = () => ({
    type:types.CHECKOUT_LIST_REQUEST,
});

export const checkoutListFail = () =>({
    type:types.CHECKOUT_LIST_FAIL
});

export const checkoutListSuccess = (payload) => ({
    type:types.CHECKOUT_LIST_SUCCESS,
    payload
});