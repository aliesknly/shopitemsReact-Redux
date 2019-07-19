import * as types from '../actionsTypes';

export const orderListRequest = () => ({
    type:types.ORDER_LIST_REQUEST,
});

export const orderListFail = () =>({
    type:types.ORDER_LIST_FAIL
});

export const orderListSuccess = () => ({
    type:types.ORDER_LIST_SUCCESS,
});