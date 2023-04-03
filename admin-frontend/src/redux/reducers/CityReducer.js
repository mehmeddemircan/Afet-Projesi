import { combineReducers } from "redux";
import { ADD_CITY_FAIL, ADD_CITY_REQUEST, ADD_CITY_RESET, ADD_CITY_SUCCESS, GET_ALL_CITY_FAIL, GET_ALL_CITY_REQUEST, GET_ALL_CITY_SUCCESS } from "../constants/CityConstants";

export const getAllCityReducer = (state = { cities: [] }, action) => {
    switch (action.type) {
      case GET_ALL_CITY_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_CITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          cities: action.payload,
        };
  
      case GET_ALL_CITY_FAIL:
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
  
  export const addNewCityReducer = (state = { city: {} }, action) => {
    switch (action.type) {
      case ADD_CITY_REQUEST:
        return { ...state, loading: true };
  
      case ADD_CITY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          city: action.payload,
        };
  
      case ADD_CITY_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      case ADD_CITY_RESET:
        return {
          ...state,
          success: false,
        };
      default:
        return state;
    }
  };

  const cityReducer = combineReducers({
    getAllCity : getAllCityReducer,
    addNewCity : addNewCityReducer
  })

  export default cityReducer