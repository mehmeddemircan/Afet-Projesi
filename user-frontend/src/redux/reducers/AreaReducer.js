import { combineReducers } from "redux";
import { GET_ALL_AREA_FAIL, GET_ALL_AREA_REQUEST, GET_ALL_AREA_SUCCESS } from "../constants/AreaConstants";

const GET_ALL_AREA_INITIAL_STATE = {
    areas: [
      {
        _id: "",
        name: "",
        coordinates: null,
        requrired_products: [],
        requrired_people: [],
      },
    ],
  };
  
  export const getAllAreaReducer = (state = GET_ALL_AREA_INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_ALL_AREA_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_AREA_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          areas: action.payload,
        };
  
      case GET_ALL_AREA_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };


  const areaReducer = combineReducers({
    getAllArea : getAllAreaReducer
  })

  export default areaReducer