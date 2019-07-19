import * as types from '../actionsTypes';

export const providerGetRequest = (payload) => ({
    type:types.PROVIDER_GET_REQUEST,
    payload:parseInt(payload)
});

export const providerGetFail = () =>({
    type:types.PROVIDER_GET_FAIL
});

export const providerGetSuccess = (payload) => ({
    type:types.PROVIDER_GET_SUCCESS,
    payload
});