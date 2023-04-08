import { combineReducers } from "redux";
import { ADD_MEAL_FAIL, ADD_MEAL_REQUEST, ADD_MEAL_RESET, ADD_MEAL_SUCCESS, DELETE_MEAL_FAIL, DELETE_MEAL_REQUEST, DELETE_MEAL_RESET, DELETE_MEAL_SUCCESS, GET_ALL_MEAL_BY_BRAND_FAIL, GET_ALL_MEAL_BY_BRAND_REQUEST, GET_ALL_MEAL_BY_BRAND_SUCCESS, UPDATE_MEAL_FAIL, UPDATE_MEAL_REQUEST, UPDATE_MEAL_RESET, UPDATE_MEAL_SUCCESS } from "../constants/MealConstants";


export const getAllMealByBrandReducer = (
    state = { meals : []},
    action
  ) => {
    switch (action.type) {
      case GET_ALL_MEAL_BY_BRAND_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_MEAL_BY_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          meals: action.payload,
        };
  
      case GET_ALL_MEAL_BY_BRAND_FAIL:
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


  export const addMealReducer  = (
    state = {   message : ""},
    action
  ) => {
    switch (action.type) {
      case ADD_MEAL_REQUEST:
        return { ...state, loading: true };
  
      case ADD_MEAL_SUCCESS:
        return {
          ...state,
          loading: false,
          isAdded: true,
          message : action.payload.message
          
        };
  
      case ADD_MEAL_FAIL:
        return {
          ...state,
          loading: false,
          isAdded: false,
          error: action.payload,
        };
  
      case ADD_MEAL_RESET:
        return {
          ...state,
          isAdded: false,
        };
      default:
        return state;
    }
  };

  export const deleteUpdateMealReducer = (
    state = {
  
      message : null
    },
    action
  ) => {
    switch (action.type) {
      case DELETE_MEAL_REQUEST:
      case UPDATE_MEAL_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_MEAL_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload.message
        };
  
      case UPDATE_MEAL_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_MEAL_FAIL:
      case UPDATE_MEAL_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_MEAL_RESET:
        return {
          ...state, isDeleted : false,
        };
      case UPDATE_MEAL_RESET:
        return {
          ...state, isUpdated : false,
        };
      default:
        return state;
    }
  };


const mealProductReducer = combineReducers({
    getAllMealByBrand : getAllMealByBrandReducer,
    addMeal : addMealReducer,
    deleteUpdateMeal :deleteUpdateMealReducer
})

export default mealProductReducer