import { ADD_SHELTER_FAIL, ADD_SHELTER_REQUEST, ADD_SHELTER_RESET, ADD_SHELTER_SUCCESS, DELETE_SHELTER_FAIL, DELETE_SHELTER_REQUEST, DELETE_SHELTER_RESET, DELETE_SHELTER_SUCCESS, GET_ALL_SHELTER_BY_BRAND_FAIL, GET_ALL_SHELTER_BY_BRAND_REQUEST, GET_ALL_SHELTER_BY_BRAND_SUCCESS, UPDATE_SHELTER_FAIL, UPDATE_SHELTER_REQUEST, UPDATE_SHELTER_RESET, UPDATE_SHELTER_SUCCESS } from "../constants/ShelterConstants";

const { combineReducers } = require("redux");


export const getAllShelterByBrandReducer = (
    state = { shelters : []},
    action
  ) => {
    switch (action.type) {
      case GET_ALL_SHELTER_BY_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_SHELTER_BY_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          shelters: action.payload,
        };
  
      case GET_ALL_SHELTER_BY_BRAND_FAIL:
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


  export const addShelterReducer   = (
    state = {   message : ""},
    action
  ) => {
    switch (action.type) {
      case ADD_SHELTER_REQUEST:
        return { ...state, loading: true };
  
      case ADD_SHELTER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAdded: true,
          message : action.payload.message
          
        };
  
      case ADD_SHELTER_FAIL:
        return {
          ...state,
          loading: false,
          isAdded: false,
          error: action.payload,
        };
  
      case ADD_SHELTER_RESET:
        return {
          ...state,
          isAdded: false,
        };
      default:
        return state;
    }
  };

  export const deleteUpdateShelterReducer = (
    state = {
  
      message : null
    },
    action
  ) => {
    switch (action.type) {
      case DELETE_SHELTER_REQUEST:
      case UPDATE_SHELTER_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_SHELTER_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload.message
        };
  
      case UPDATE_SHELTER_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_SHELTER_FAIL:
      case UPDATE_SHELTER_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_SHELTER_RESET:
        return {
          ...state, isDeleted : false,
        };
      case UPDATE_SHELTER_RESET:
        return {
          ...state, isUpdated : false,
        };
      default:
        return state;
    }
  };

const shelterReducer = combineReducers({
    getAllShelterByBrand  :  getAllShelterByBrandReducer,
    addShelter :addShelterReducer,
    deleteUpdateShelter : deleteUpdateShelterReducer 
})


export default shelterReducer