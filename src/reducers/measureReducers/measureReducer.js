import * as types from '../../actions/actionsTypes';

const initialState = {
    list: [],
    measure: {}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case types.MEASURE_LIST_SUCCESS: {
            return {...state, list: payload}
        }
        case types.MEASURE_ADD_SUCCESS: {
            return {...state, list: state.list.concat(payload)}
        }
        case types.MEASURE_DELETE_SUCCESS: {
            return {list: state.list.filter(({id}) => id !== payload)}
        }
        case types.MEASURE_GET_SUCCESS: {
            return {...state, measure: payload}
        }
        case types.MEASURE_UPDATE_SUCCESS: {
            return {...state, list: state.list}
        }
        default:
            return state;
    }
}