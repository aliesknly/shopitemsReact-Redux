import * as types from '../actionsTypes';

export const productListRequest = () => ({
    type:types.PRODUCT_LIST_REQUEST,
});

export const productListFail = () =>({
    type:types.PRODUCT_LIST_FAIL
});

export const productListSuccess = (payload) => ({
    type:types.PRODUCT_LIST_SUCCESS,
    payload
});