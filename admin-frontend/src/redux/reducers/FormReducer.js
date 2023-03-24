import {
  GET_FORMS_BY_CATEGORYID_FAIL,
  GET_FORMS_BY_CATEGORYID_REQUEST,
  GET_FORMS_BY_CATEGORYID_SUCCESS,
  SEARCH_FORMS_FAIL,
  SEARCH_FORMS_REQUEST,
  SEARCH_FORMS_RESET,
  SEARCH_FORMS_SUCCESS,
} from "../constants/FormConstants";

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
