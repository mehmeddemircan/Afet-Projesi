import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, NEW_PASSWORD_FAIL, NEW_PASSWORD_REQUEST, NEW_PASSWORD_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST } from "../constants/AuthConstants";

const initialState = {
  token: null,
  user: {
    name: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",

};

export const authReducer = (state = initialState, action) => {
  

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        message : action.payload.message,
        authenticate: true,
        authenticating: false,
       
      };

    case LOGIN_FAIL:
      return {
        ...state,
        authenticating: false,
        error: action.payload.error,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS: {
      return {
        ...initialState,
      };
    }
    case LOGOUT_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case REGISTER_REQUEST:
      return {
        ...state,
        authenticating: true,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        authenticating : false , 
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export const forgotResetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case FORGOT_PASSWORD_REQUEST:
      case NEW_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          success : false ,
          resetSuccess : false ,
          error: null,
        };
  
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          success : true ,
          message: action.payload.message,
        };
  
      case NEW_PASSWORD_SUCCESS:
        return {
          ...state,
          
          resetSuccess : true, 
          message: action.payload.message,
        };
  
      case FORGOT_PASSWORD_FAIL:
      case NEW_PASSWORD_FAIL:
        return {
          ...state,
          loading: false,
          success: false ,
          resetSuccess : false, 
          error: action.payload.error,
        };
  
      // case CLEAR_ERRORS:
      //     return {
      //         ...state,
      //         error: null
      //     }
  
      default:
        return state;
    }
  };
  
