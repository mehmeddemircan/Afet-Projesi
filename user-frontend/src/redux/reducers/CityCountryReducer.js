import { combineReducers } from "redux";
import { GET_ALL_CITY_FAIL, GET_ALL_CITY_REQUEST, GET_ALL_CITY_SUCCESS, GET_ALL_COUNTRY_FAIL, GET_ALL_COUNTRY_REQUEST, GET_ALL_COUNTRY_SUCCESS } from "../constants/CityCountryConstants";

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

  export const getAllCountryReducer = (state = { countries: [] }, action) => {
    switch (action.type) {
      case GET_ALL_COUNTRY_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_COUNTRY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          countries: action.payload,
        };
  
      case GET_ALL_COUNTRY_FAIL:
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
  

  const cityCountryReducer = combineReducers({
    getAllCity : getAllCityReducer,
    getAllCountry : getAllCountryReducer
  })

  export default cityCountryReducer