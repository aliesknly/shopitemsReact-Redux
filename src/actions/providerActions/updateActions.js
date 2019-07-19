import * as types from '../actionsTypes';

export const providerUpdateRequest = (payload, id) => ({
    type: types.PROVIDER_UPDATE_REQUEST,
    payload,
    id: parseInt(id)
});

export const providerUpdateFail = () => ({
    type: types.PROVIDER_UPDATE_FAIL
});

export const providerUpdateSuccess = () => ({
    type: types.PROVIDER_UPDATE_SUCCESS,
});