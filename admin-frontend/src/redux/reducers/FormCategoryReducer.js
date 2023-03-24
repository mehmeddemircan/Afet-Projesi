import { GET_FORM_CATEGORIES_FAIL, GET_FORM_CATEGORIES_REQUEST, GET_FORM_CATEGORIES_SUCCESS, GET_SINGLE_FORM_CATEGORY_FAIL, GET_SINGLE_FORM_CATEGORY_REQUEST, GET_SINGLE_FORM_CATEGORY_SUCCESS } from "../constants/FormCategoryContants";


export const getAllFormCategoryReducer = (
    state = { results : []},
    action
  ) => {
    switch (action.type) {
      case GET_FORM_CATEGORIES_REQUEST:
        return { ...state, loading: true };
  
      case GET_FORM_CATEGORIES_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          results: action.payload,
        };
  
      case GET_FORM_CATEGORIES_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const getSingleFormCategoryReducer = (
    state = { formCategory : {}},
    action
  ) => {
    switch (action.type) {
      case GET_SINGLE_FORM_CATEGORY_REQUEST:
        return { ...state, loading: true };
  
      case GET_SINGLE_FORM_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          formCategory: action.payload,
        };
  
      case GET_SINGLE_FORM_CATEGORY_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };