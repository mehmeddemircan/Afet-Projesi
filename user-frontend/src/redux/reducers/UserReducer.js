import { combineReducers } from "redux";
import { FILTER_BY_ROLE_FAIL, FILTER_BY_ROLE_REQUEST, FILTER_BY_ROLE_RESET, FILTER_BY_ROLE_SUCCESS } from "../constants/UserConstants";

export const getAllUserLocationsReducer = (
    state = {
      userLocations: [],
    },
    action
  ) => {
    switch (action.type) {
  
      case FILTER_BY_ROLE_REQUEST : 
        return { ...state, loading: true };
 
      case FILTER_BY_ROLE_SUCCESS : 
        return {
          ...state,
          loading: false,
          success: true,
          userLocations: action.payload,
        };
  
   
      case FILTER_BY_ROLE_FAIL : 
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
        case FILTER_BY_ROLE_RESET : 
        return {
          ...state,
          success : false ,
          
        }
      default:
        return state;
    }
  

  };

  const userReducer = combineReducers({
    getAllUserLocations : getAllUserLocationsReducer
  })

  export default userReducer