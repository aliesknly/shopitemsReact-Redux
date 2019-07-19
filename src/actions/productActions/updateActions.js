import * as types from '../actionsTypes';

export const productUpdateRequest = (payload, id) => ({
    type: types.PRODUCT_UPDATE_REQUEST,
    payload,
    id: parseInt(id)
});

export const productUpdateFail = () => ({
    type: types.PRODUCT_UPDATE_FAIL
});

export const productUpdateSuccess = () => ({
    type: types.PRODUCT_UPDATE_SUCCESS,
});