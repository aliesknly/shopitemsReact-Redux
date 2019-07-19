import * as types from '../../actions/actionsTypes'

const initialState = {
    modal: false,
    edit: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case types.PRODUCT_MODAL: {
            return {edit:false, modal: !state.modal}
        }
        case types.PRODUCT_EDIT: {
            return {modal: !state.modal, edit: payload}
        }
        default:
            return {state}

    }

}