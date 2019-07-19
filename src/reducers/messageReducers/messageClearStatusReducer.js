import * as types from '../../actions/actionsTypes';

const initialState = {
    error:false,
    loading:false
};

export default (state = initialState, action) => {
  switch (action.type) {

  case types.MESSAGE_CLEAR_REQUEST:
    return { 
        loading:true,
        error:false 
    };
  case types.MESSAGE_CLEAR_FAIL:
    return { 
        loading:false,
        error:true 
    };
  case types.MESSAGE_CLEAR_SUCCESS:
    return { 
        loading:false,
        error:false 
    };

  default:
    return state
  }
}
