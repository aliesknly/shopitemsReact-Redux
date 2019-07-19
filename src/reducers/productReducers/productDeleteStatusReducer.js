import * as types from '../../actions/actionsTypes';

const initialState = {
    error:false,
    loading:false
};

export default (state = initialState, action) => {
  switch (action.type) {

  case types.PRODUCT_DELETE_REQUEST:
    return { 
        loading:true,
        error:false 
    };
  case types.PRODUCT_DELETE_FAIL:
    return { 
        loading:false,
        error:true 
    };
  case types.PRODUCT_DELETE_SUCCESS:
    return { 
        loading:false,
        error:false 
    };

  default:
    return state
  }
}
