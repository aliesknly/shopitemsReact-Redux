import * as types from '../actionsTypes';

export const messageClearRequest = () => ({
    type:types.MESSAGE_CLEAR_REQUEST,
});

export const messageClearFail = () =>({
    type:types.MESSAGE_CLEAR_FAIL
});

export const messageClearSuccess = () => ({
    type:types.MESSAGE_CLEAR_SUCCESS,
});