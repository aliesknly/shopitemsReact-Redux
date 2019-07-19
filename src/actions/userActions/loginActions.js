import * as types from '../actionsTypes';

export const userLoginRequest = (payload) => (
    {
        type:types.USER_LOGIN_REQUEST,
        payload
    }
);

export const userLoginFail = () =>(
    {
        type:types.USER_LOGIN_FAIL
    }
);

export const userLoginSuccess = () => (
    {
        type:types.USER_LOGIN_SUCCESS,

    }
);