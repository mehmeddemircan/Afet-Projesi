import { combineReducers } from "redux";
import {
  ADD_COUNTRY_FAIL,
  ADD_COUNTRY_REQUEST,
  ADD_COUNTRY_RESET,
  ADD_COUNTRY_SUCCESS,
  DELETE_COUNTRY_FAIL,
  DELETE_COUNTRY_REQUEST,
  DELETE_COUNTRY_RESET,
  DELETE_COUNTRY_SUCCESS,
  GET_ALL_COUNTRY_FAIL,
  GET_ALL_COUNTRY_REQUEST,
  GET_ALL_COUNTRY_SUCCESS,
} from "../constants/CountryConstants";

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

export const addNewCountryReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case ADD_COUNTRY_REQUEST:
      return { ...state, loading: true };

    case ADD_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case ADD_COUNTRY_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case ADD_COUNTRY_RESET:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export const deleteUpdateCountryReducer = (
  state = {
    updatedCountry: {},
    isUpdated: false,
    isDeleted: false,
    message: "",
  },
  action
) => {
  switch (action.type) {
    case DELETE_COUNTRY_REQUEST:
      return { ...state, loading: true };

    case DELETE_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
        message : action.payload.message
      };

    case DELETE_COUNTRY_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted: false,
        error: action.payload,
      };
    case DELETE_COUNTRY_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    default:
      return state;
  }
};


const countryReducer = combineReducers({
    getAllCountry : getAllCountryReducer,
    addNewCountry : addNewCountryReducer,

    deleteUpdateCountry : deleteUpdateCountryReducer
})

export default countryReducer