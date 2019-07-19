import * as types from '../../actions/actionsTypes';

const initialState = {
    messages: '',
    visible: false,
    color: ''
};

export default (state = initialState, {type, payload, color}) => {
    switch (type) {
        case types.MESSAGE_LOAD_SUCCESS: {
            return {messages: payload, color: color, visible: true}
        }
        case types.MESSAGE_CLEAR_SUCCESS: {
            return {messages: '', visible: false}
        }
        default:
            return state;
    }
}