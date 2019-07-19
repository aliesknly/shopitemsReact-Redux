import * as types from '../../actions/actionsTypes';

const initialState = {
    list: [],
    order: {}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case types.ORDER_LIST_SUCCESS: {
            return {...state, list: payload}
        }
        case types.ORDER_ADD_SUCCESS: {
            let item = state.list.filter(({product_id}) => product_id === payload.product_id);
            let oldList = state.list.filter(({product_id}) => product_id !== payload.product_id);

            if (item.length) {
                item[0].quantity += payload.quantity;
                return {list: oldList.concat(item)}
            } else {
                return {...state, list: state.list.concat(payload)}
            }
        }
        case types.CHECKOUT_ADD_SUCCESS: {
            return {list: []}
        }
        case types.ORDER_DELETE_SUCCESS: {
            return {list: state.list.filter(({product_id}) => product_id !== payload)}
        }
        default:
            return state;
    }
}