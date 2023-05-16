import { combineReducers } from "redux";
import { GET_ALL_PERSONTYPE_FAIL, GET_ALL_PERSONTYPE_REQUEST, GET_ALL_PERSONTYPE_SUCCESS } from "../constants/PersonTypeConstants";


const GET_ALL_PERSONTYPE_INITIAL_STATE = {
    personTypes: [
      {
        name: "",
      },
    ],
  };
  export const getAllPersonTypeReducer = (
    state = GET_ALL_PERSONTYPE_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_ALL_PERSONTYPE_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_PERSONTYPE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          personTypes: action.payload,
        };
  
      case GET_ALL_PERSONTYPE_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const personTypeReducer = combineReducers({
    getAllPersonType : getAllPersonTypeReducer
  })

  export default personTypeReducer