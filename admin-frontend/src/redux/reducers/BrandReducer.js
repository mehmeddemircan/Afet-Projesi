import { combineReducers } from "redux";
import { ADD_BRAND_FAIL, ADD_BRAND_REQUEST, ADD_BRAND_RESET, ADD_BRAND_SUCCESS, DELETE_BRAND_FAIL, DELETE_BRAND_REQUEST, DELETE_BRAND_RESET, DELETE_BRAND_SUCCESS, GET_ALL_BRAND_FAIL, GET_ALL_BRAND_REQUEST, GET_ALL_BRAND_SUCCESS, GET_ALL_CLOTHES_BRAND_FAIL, GET_ALL_CLOTHES_BRAND_REQUEST, GET_ALL_CLOTHES_BRAND_SUCCESS, GET_ALL_MEAL_BRAND_FAIL, GET_ALL_MEAL_BRAND_REQUEST, GET_ALL_MEAL_BRAND_SUCCESS, GET_ALL_SHELTER_BRAND_FAIL, GET_ALL_SHELTER_BRAND_REQUEST, GET_ALL_SHELTER_BRAND_SUCCESS, GET_SINGLE_BRAND_FAIL, GET_SINGLE_BRAND_REQUEST, GET_SINGLE_BRAND_SUCCESS, UPDATE_BRAND_FAIL, UPDATE_BRAND_REQUEST, UPDATE_BRAND_RESET, UPDATE_BRAND_SUCCESS } from "../constants/BrandConstants";


export const getAllBrandReducer = (
    state = {brands : []},
    action
  ) => {
    switch (action.type) {
      case GET_ALL_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          brands: action.payload,
        };
  
      case GET_ALL_BRAND_FAIL:
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
  export const getSingleBrandReducer  = (
    state = {brand : {}},
    action
  ) => {
    switch (action.type) {
      case GET_SINGLE_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case GET_SINGLE_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          brand: action.payload,
        };
  
      case GET_SINGLE_BRAND_FAIL:
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
  

  
  export const addBrandReducer = (
    state = { message : ""},
    action
  ) => {
    switch (action.type) {
      case ADD_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case ADD_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          isAdded: true,
          message : action.payload.message
        };
  
      case ADD_BRAND_FAIL:
        return {
          ...state,
          loading: false,
          isAdded: false,
          error: action.payload,
        };
  
      case ADD_BRAND_RESET:
        return {
          ...state,
          isAdded: false,
        };
      default:
        return state;
    }
  };


  export const deleteUpdateBrandReducer = (
    state = {
  
      message : null
    },
    action
  ) => {
    switch (action.type) {
      case DELETE_BRAND_REQUEST:
      case UPDATE_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload.message
        };
  
      case UPDATE_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_BRAND_FAIL:
      case UPDATE_BRAND_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_BRAND_RESET:
        return {
          ...state, isDeleted : false,
        };
      case UPDATE_BRAND_RESET:
        return {
          ...state, isUpdated : false,
        };
      default:
        return state;
    }
  };


  export const getAllClothesBrandReducer = (
    state = {clothesBrands : []},
    action
  ) => {
    switch (action.type) {
      case GET_ALL_CLOTHES_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_CLOTHES_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          clothesBrands: action.payload,
        };
  
      case GET_ALL_CLOTHES_BRAND_FAIL:
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

  export const getAllShelterBrandReducer = (
    state = {shelterBrands : []},
    action
  ) => {
    switch (action.type) {
      case GET_ALL_SHELTER_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_SHELTER_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          shelterBrands: action.payload,
        };
  
      case GET_ALL_SHELTER_BRAND_FAIL:
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

  export const getAllMealBrandReducer = (
    state = {mealBrands : []},
    action
  ) => {
    switch (action.type) {
      case GET_ALL_MEAL_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_MEAL_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          mealBrands: action.payload,
        };
  
      case GET_ALL_MEAL_BRAND_FAIL:
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


  const brandReducer = combineReducers({
    getAllBrand : getAllBrandReducer,
    getSingleBrand :getSingleBrandReducer,
    addBrand : addBrandReducer,
    deleteUpdateBrand : deleteUpdateBrandReducer,
    getAllMealBrand: getAllMealBrandReducer,
    getAllShelterBrand:getAllShelterBrandReducer,
    getAllClothesBrand : getAllClothesBrandReducer
  })

  export default brandReducer