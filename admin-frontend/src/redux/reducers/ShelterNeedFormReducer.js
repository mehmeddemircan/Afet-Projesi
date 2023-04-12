import { combineReducers } from "redux";
import { CREATE_SHELTER_NEED_FORM_FAIL, CREATE_SHELTER_NEED_FORM_REQUEST, CREATE_SHELTER_NEED_FORM_RESET, CREATE_SHELTER_NEED_FORM_SUCCESS, DELETE_SHELTER_FORM_FAIL, DELETE_SHELTER_FORM_REQUEST, DELETE_SHELTER_FORM_RESET, DELETE_SHELTER_FORM_SUCCESS, GET_ALL_SHELTER_FORM_REQUEST, GET_ALL_SHELTER_FORM_RESET, GET_ALL_SHELTER_FORM_SUCCESS, UPDATE_SHELTER_FORM_FAIL, UPDATE_SHELTER_FORM_REQUEST, UPDATE_SHELTER_FORM_RESET, UPDATE_SHELTER_FORM_SUCCESS } from "../constants/ShelterNeedFormConstants";

export const getAllShelterFormReducer = (state = { shelterForms: [] }, action) => {
    switch (action.type) {
      case GET_ALL_SHELTER_FORM_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_SHELTER_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          shelterForms: action.payload.shelterForms,
        };
  
      case GET_ALL_SHELTER_FORM_REQUEST:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
    case GET_ALL_SHELTER_FORM_RESET : 
        return {
            ...state,
            success : false ,
            shelterForms : []
        }
      default:
        return state;
    }
  };
  
  export const addShelterFormReducer  = (state = { message: "" }, action) => {
    switch (action.type) {
      case CREATE_SHELTER_NEED_FORM_REQUEST:
        return { ...state, loading: true };
  
      case CREATE_SHELTER_NEED_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          message: action.payload.message,
        };
  
      case CREATE_SHELTER_NEED_FORM_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      case CREATE_SHELTER_NEED_FORM_RESET:
        return {
          ...state,
          success: false,
        };
      default:
        return state;
    }
  };

  export const deleteUpdateShelterFormReducer = (
    state = {
  
      message : null
    },
    action
  ) => {
    switch (action.type) {
      case DELETE_SHELTER_FORM_REQUEST:
      case UPDATE_SHELTER_FORM_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_SHELTER_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload.message
        };
  
      case UPDATE_SHELTER_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_SHELTER_FORM_FAIL:
      case UPDATE_SHELTER_FORM_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_SHELTER_FORM_RESET:
        return {
          ...state, isDeleted : false,
        };
      case UPDATE_SHELTER_FORM_RESET:
        return {
          ...state, isUpdated : false,
        };
      default:
        return state;
    }
  };


  const shelterNeedFormReducer = combineReducers({
    getAllShelterForm :getAllShelterFormReducer,
    addShelterForm :addShelterFormReducer,
    deleteUpdateShelterForm: deleteUpdateShelterFormReducer
  })

  export default shelterNeedFormReducer