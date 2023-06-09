import {
  APPROVE_FORM_FAIL,
  APPROVE_FORM_REQUEST,
  APPROVE_FORM_RESET,
  APPROVE_FORM_SUCCESS,
  DELETE_FORM_FAIL,
  DELETE_FORM_REQUEST,
  DELETE_FORM_RESET,
  DELETE_FORM_SUCCESS,
  GET_APPROVED_FORMS_FAIL,
  GET_APPROVED_FORMS_REQUEST,
  GET_APPROVED_FORMS_SUCCESS,
  GET_FORMS_BY_CATEGORYID_FAIL,
  GET_FORMS_BY_CATEGORYID_REQUEST,
  GET_FORMS_BY_CATEGORYID_SUCCESS,
  SEARCH_FORMS_FAIL,
  SEARCH_FORMS_REQUEST,
  SEARCH_FORMS_RESET,
  SEARCH_FORMS_SUCCESS,
  UPDATE_FORM_FAIL,
  UPDATE_FORM_REQUEST,
  UPDATE_FORM_RESET,
  UPDATE_FORM_SUCCESS,
} from "../constants/FormConstants";
import { combineReducers } from "redux";


export const getFormsByCategoryIdReducer = (state = { forms: [] }, action) => {
  switch (action.type) {
    case GET_FORMS_BY_CATEGORYID_REQUEST:
    case SEARCH_FORMS_REQUEST:
      return { ...state, loading: true };

    case GET_FORMS_BY_CATEGORYID_SUCCESS:
    case SEARCH_FORMS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        forms: action.payload,
       
      };

    case GET_FORMS_BY_CATEGORYID_FAIL:
    case SEARCH_FORMS_FAIL:
      return { ...state, loading: false, error: action.payload };

    case SEARCH_FORMS_RESET:
      return { ...state, success: false, forms: [] };
    default:
      return state;
  }
};


export const deleteUpdateGetHelpFormReducer = (
  state = {
    message: "",
    isDeleted: false,
    isUpdated: false,
    isApproved : false
  },
  action
) => {
  switch (action.type) {
    case DELETE_FORM_REQUEST:
    case UPDATE_FORM_REQUEST:
    case APPROVE_FORM_REQUEST : 
      return { ...state, loading: true };

    case DELETE_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
        message: action.payload.message,
      };

    case UPDATE_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        // updated: action.payload,
        isUpdated: true,
      };
      case APPROVE_FORM_SUCCESS : 
        return {
          ...state,
          loading : false, 
          isApproved : true 
        }
    case DELETE_FORM_FAIL:
    case UPDATE_FORM_FAIL:
      case APPROVE_FORM_FAIL :
      return { ...state, isDeleted: false, isUpdated : false , isApproved : false ,  error: action.payload };

    case DELETE_FORM_RESET:
      return {
        ...state , isDeleted : false 
      };
    case UPDATE_FORM_RESET:
      return {
        ...state , isUpdated : false 
      };

      case APPROVE_FORM_RESET : 
        return {
          ...state , isApproved : false 
        }
    default:
      return state;
  }
};

export const getApprovedFormsByCategoryIdReducer = (state = { approvedForms: [] }, action) => {
  switch (action.type) {
    case GET_APPROVED_FORMS_REQUEST:

      return { ...state, loading: true };

    case GET_APPROVED_FORMS_SUCCESS:

      return {
        ...state,
        loading: false,
        success: true,
        approvedForms: action.payload,
      };

    case GET_APPROVED_FORMS_FAIL:

      return { ...state, loading: false, error: action.payload };


    default:
      return state;
  }
};


const formReducer = combineReducers({
  getFormsByCategoryId: getFormsByCategoryIdReducer,
  deleteUpdateGetHelpForm: deleteUpdateGetHelpFormReducer,
  getApprovedFormsByCategoryId: getApprovedFormsByCategoryIdReducer,
})

export default formReducer