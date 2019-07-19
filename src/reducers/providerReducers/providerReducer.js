import * as types from '../../actions/actionsTypes';

const initialState = {
    list: [],
    provider: {
        firstname:'',
        lastname:'',
        email:'',
        shopname:''
    }
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case types.PROVIDER_LIST_SUCCESS: {
            return {...state, list: payload}
        }
        case types.PROVIDER_ADD_SUCCESS: {
            return {...state, list: state.list.concat(payload)}
        }
        case types.PROVIDER_DELETE_SUCCESS: {
            return {list: state.list.filter(({id}) => id !== payload)}
        }
        case types.PROVIDER_GET_SUCCESS: {
            return {...state, provider: payload}
        }
        case types.PROVIDER_UPDATE_SUCCESS: {
            return {...state,list:state.list}
        }
        default:
            return state;
    }
}