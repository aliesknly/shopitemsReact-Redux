import * as types from '../actionsTypes';

export const providerAddRequest = (payload) => ({
    type:types.PROVIDER_ADD_REQUEST,
    payload
});

export const providerAddFail = () =>({
    type:types.PROVIDER_ADD_FAIL
});

export const providerAddSuccess = (payload) => ({
    type:types.PROVIDER_ADD_SUCCESS,
    payload
});