import * as types from '../actionsTypes';

export const productDeleteRequest = (payload) => ({
    type:types.PRODUCT_DELETE_REQUEST,
    payload:parseInt(payload)
});

export const productDeleteFail = () =>({
    type:types.PRODUCT_DELETE_FAIL
});

export const productDeleteSuccess = (payload) => ({
    type:types.PRODUCT_DELETE_SUCCESS,
    payload:parseInt(payload)
});