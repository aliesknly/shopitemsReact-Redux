import * as types from '../../actions/actionsTypes';

const initialState = {
    authStatus: false,
    user: {}
};

export default (state = initialState, {type,payload}) => {
    switch (type) {
        case types.USER_CHECK_AUTH_REQUEST: {
            return {
                authStatus: false,
                user:{}
            }
        }
        case types.USER_CHECK_AUTH_FAIL: {
            return {
                authStatus: false,
                user:{}
            }
        }
        case types.USER_LOGOUT_SUCCESS:{
            return {
                authStatus: false,
                user:{}
            }
        }
        case types.USER_CHECK_AUTH_SUCCESS: {
            return {
                authStatus: true,
                user:payload
            }
        }
        case types.USER_LOGIN_SUCCESS: {
            return {
                authStatus: true,
                user:payload
            }
        }

        default:
            return state
    }
}