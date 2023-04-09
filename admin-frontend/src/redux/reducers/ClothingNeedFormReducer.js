import { combineReducers } from "redux";
import { ADD_CLOTHING_FORM_FAIL, ADD_CLOTHING_FORM_REQUEST, ADD_CLOTHING_FORM_RESET, ADD_CLOTHING_FORM_SUCCESS, GET_ALL_CLOTHING_FORM_FAIL, GET_ALL_CLOTHING_FORM_REQUEST, GET_ALL_CLOTHING_FORM_RESET, GET_ALL_CLOTHING_FORM_SUCCESS } from "../constants/ClothingNeedFormConstants";


export const getAllClothingFormsReducer = (state = { clothingForms: [] }, action) => {
    switch (action.type) {
      case GET_ALL_CLOTHING_FORM_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_CLOTHING_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          clothingForms: action.payload.clothingForms,
        };
  
      case GET_ALL_CLOTHING_FORM_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
    case GET_ALL_CLOTHING_FORM_RESET : 
        return {
            ...state,
            success : false ,
            clothingForms : []
        }
      default:
        return state;
    }
  };
  
  export const addClothingFormReducer  = (state = { message: "" }, action) => {
    switch (action.type) {
      case ADD_CLOTHING_FORM_REQUEST:
        return { ...state, loading: true };
  
      case ADD_CLOTHING_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          message: action.payload.message,
        };
  
      case ADD_CLOTHING_FORM_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      case ADD_CLOTHING_FORM_RESET:
        return {
          ...state,
          success: false,
        };
      default:
        return state;
    }
  };

  const clothingNeedFormReducer = combineReducers({
    getAllClothingForms : getAllClothingFormsReducer,
    addClothingForm : addClothingFormReducer
  })

  export default clothingNeedFormReducer