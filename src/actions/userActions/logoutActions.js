import * as types from '../actionsTypes';

export const userLogoutRequest = () => ({
    type:types.USER_LOGOUT_REQUEST
});

export const userLogoutFail = () => ({
    type:types.USER_LOGOUT_FAIL
});

export const userLogoutSuccess = () => ({
    type:types.USER_LOGOUT_SUCCESS
});