import * as types from '../../actions/actionsTypes';

const initialState = {
    error:false,
    loading:false
};

export default (state = initialState, action) => {
  switch (action.type) {

  case types.USER_LOGIN_REQUEST:
    return { 
        loading:true,
        error:false 
    };
  case types.USER_LOGIN_FAIL:
    return { 
        loading:false,
        error:true 
    };
  case types.USER_LOGIN_SUCCESS:
    return { 
        loading:false,
        error:false 
    };

  default:
    return state
  }
}
