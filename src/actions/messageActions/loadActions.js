import * as types from '../actionsTypes';

export const messageLoadRequest = (payload,color) => ({
    type:types.MESSAGE_LOAD_REQUEST,
    payload,
    color
});

export const messageLoadFail = () =>({
    type:types.MESSAGE_LOAD_FAIL
});

export const messageLoadSuccess = (payload,color) => ({
    type:types.MESSAGE_LOAD_SUCCESS,
    payload,
    color
});