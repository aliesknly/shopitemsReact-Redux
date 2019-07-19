import * as types from '../actionsTypes';

export const productAddRequest = (payload) => ({
    type:types.PRODUCT_ADD_REQUEST,
    payload
});

export const productAddFail = () =>({
    type:types.PRODUCT_ADD_FAIL
});

export const productAddSuccess = (payload) => ({
    type:types.PRODUCT_ADD_SUCCESS,
    payload
});