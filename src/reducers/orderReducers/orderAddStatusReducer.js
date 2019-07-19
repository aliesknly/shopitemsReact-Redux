import * as types from '../../actions/actionsTypes';

const initialState = {
    error:false,
    loading:false
};

export default (state = initialState, action) => {
  switch (action.type) {

  case types.ORDER_ADD_REQUEST:
    return { 
        loading:true,
        error:false 
    };
  case types.ORDER_ADD_FAIL:
    return { 
        loading:false,
        error:true 
    };
  case types.ORDER_ADD_SUCCESS:
    return { 
        loading:false,
        error:false 
    };

  default:
    return state
  }
}
