import * as types from '../actionsTypes';

export const productGetRequest = (payload) => ({
    type:types.PRODUCT_GET_REQUEST,
    payload:parseInt(payload)
});

export const productGetFail = () =>({
    type:types.PRODUCT_GET_FAIL
});

export const productGetSuccess = (payload) => ({
    type:types.PRODUCT_GET_SUCCESS,
    payload
});