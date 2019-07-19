import * as types from '../actionsTypes';

export const userCheckAuthRequest = (payload) => ({
    type:types.USER_CHECK_AUTH_REQUEST,
    payload
});
export const userCheckAuthFail = () => ({
    type:types.USER_CHECK_AUTH_FAIL,
});
export const userCheckAuthSuccess = (payload) => ({
    type:types.USER_CHECK_AUTH_SUCCESS,
    payload
});