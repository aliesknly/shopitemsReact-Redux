import * as types from '../../actions/actionsTypes';

const initialState = {
    list: [],
    product: {

    }
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case types.PRODUCT_LIST_SUCCESS: {
            return {...state, list: payload}
        }
        case types.PRODUCT_ADD_SUCCESS: {
            return {...state, list: payload}
        }
        case types.PRODUCT_DELETE_SUCCESS: {
            return {list: state.list.filter(({id}) => id !== payload)}
        }
        case types.PRODUCT_GET_SUCCESS: {
            return {...state, product: payload}
        }
        case types.PRODUCT_UPDATE_SUCCESS: {
            return {...state, list: state.list}
        }
        case types.PRODUCT_MODAL:{
            return {...state,product:{}}
        }
        default:
            return state;
    }
}