import * as types from '../../actions/actionsTypes';

const initialState = {
    list: [],
    details: [],
    checkout: {}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case types.CHECKOUT_LIST_SUCCESS: {
            return {...state, list: payload}
        }
        case types.CHECKOUT_ADD_SUCCESS: {
            return {...state, list: state.list.concat(payload)}
        }
        case types.CHECKOUT_DELETE_SUCCESS: {
            return {...state,list: []}
        }
        case types.CHECKOUT_GET_SUCCESS: {
            return {...state,details: payload}
        }
        default:
            return state;
    }
}