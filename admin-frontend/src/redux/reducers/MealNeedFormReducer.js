import { combineReducers } from "redux";
import { CREATE_MEAL_NEED_FORM_FAIL, CREATE_MEAL_NEED_FORM_REQUEST, CREATE_MEAL_NEED_FORM_RESET, CREATE_MEAL_NEED_FORM_SUCCESS, DELETE_MEAL_NEED_FORM_FAIL, DELETE_MEAL_NEED_FORM_REQUEST, DELETE_MEAL_NEED_FORM_RESET, DELETE_MEAL_NEED_FORM_SUCCESS, GET_ALL_MEAL_NEED_FORM_FAIL, GET_ALL_MEAL_NEED_FORM_REQUEST, GET_ALL_MEAL_NEED_FORM_RESET, GET_ALL_MEAL_NEED_FORM_SUCCESS, UPDATE_MEAL_NEED_FORM_FAIL, UPDATE_MEAL_NEED_FORM_REQUEST, UPDATE_MEAL_NEED_FORM_RESET, UPDATE_MEAL_NEED_FORM_SUCCESS } from "../constants/MealNeedFormConstants";

export const getAllMealFormReducer = (state = { mealForms: [] }, action) => {
    switch (action.type) {
      case GET_ALL_MEAL_NEED_FORM_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_MEAL_NEED_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          mealForms: action.payload.mealForms,
        };
  
      case GET_ALL_MEAL_NEED_FORM_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
    case GET_ALL_MEAL_NEED_FORM_RESET : 
        return {
            ...state,
            success : false ,
            mealForms : []
        }
      default:
        return state;
    }
  };
  
  export const addMealFormReducer  = (state = { message: "" }, action) => {
    switch (action.type) {
      case CREATE_MEAL_NEED_FORM_REQUEST:
        return { ...state, loading: true };
  
      case CREATE_MEAL_NEED_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          message: action.payload.message,
        };
  
      case CREATE_MEAL_NEED_FORM_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      case CREATE_MEAL_NEED_FORM_RESET:
        return {
          ...state,
          success: false,
        };
      default:
        return state;
    }
  };

  export const deleteUpdateMealFormReducer = (
    state = {
  
      message : null
    },
    action
  ) => {
    switch (action.type) {
      case DELETE_MEAL_NEED_FORM_REQUEST:
      case UPDATE_MEAL_NEED_FORM_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_MEAL_NEED_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload.message
        };
  
      case UPDATE_MEAL_NEED_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_MEAL_NEED_FORM_FAIL:
      case UPDATE_MEAL_NEED_FORM_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_MEAL_NEED_FORM_RESET:
        return {
          ...state, isDeleted : false,
        };
      case UPDATE_MEAL_NEED_FORM_RESET:
        return {
          ...state, isUpdated : false,
        };
      default:
        return state;
    }
  };

  const mealNeedFormReducer = combineReducers({
    getAllMealForm : getAllMealFormReducer,
    addMealForm : addMealFormReducer,
    deleteUpdateMealForm : deleteUpdateMealFormReducer
  })

  export default mealNeedFormReducer