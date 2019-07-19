import * as types from '../actionsTypes';

export const providerDeleteRequest = (payload) => ({
    type:types.PROVIDER_DELETE_REQUEST,
    payload:parseInt(payload)
});

export const providerDeleteFail = () =>({
    type:types.PROVIDER_DELETE_FAIL
});

export const providerDeleteSuccess = (payload) => ({
    type:types.PROVIDER_DELETE_SUCCESS,
    payload:parseInt(payload)
});