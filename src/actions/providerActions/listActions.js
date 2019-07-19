import * as types from '../actionsTypes';

export const providerListRequest = () => ({
    type:types.PROVIDER_LIST_REQUEST,
});

export const providerListFail = () =>({
    type:types.PROVIDER_LIST_FAIL
});

export const providerListSuccess = (payload) => ({
    type:types.PROVIDER_LIST_SUCCESS,
    payload
});