import * as types from '../actionsTypes'

export const productModal = () => ({
    type: types.PRODUCT_MODAL,
    payload: true
});

export const productEdit = () => ({
    type: types.PRODUCT_EDIT,
    payload: true
});