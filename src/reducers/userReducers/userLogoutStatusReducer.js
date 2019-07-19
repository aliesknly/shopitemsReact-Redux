import * as types from '../../actions/actionsTypes';

const initialState = {
    error: false,
    loading: false
};

export default (state = initialState, {type}) => {
    switch (type) {
        case types.USER_LOGOUT_REQUEST: {
            return {
                error: false,
                loading: true
            }
        }
        case types.USER_LOGOUT_FAIL: {
            return {
                error: true,
                loading: false
            }
        }
        case types.USER_LOGOUT_SUCCESS: {
            return {
                error: false,
                loading: false
            }
        }
        default:
            return state
    }
}