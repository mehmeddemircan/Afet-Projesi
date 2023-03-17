import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_RESET,
  ADD_CATEGORY_SUCCESS,
  ADD_SUB_TO_CATEGORY_FAIL,
  ADD_SUB_TO_CATEGORY_REQUEST,
  ADD_SUB_TO_CATEGORY_RESET,
  ADD_SUB_TO_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_RESET,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_SUBS_OF_CATEGORY_FAIL,
  GET_SUBS_OF_CATEGORY_REQUEST,
  GET_SUBS_OF_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_RESET,
  UPDATE_CATEGORY_SUCCESS,
} from "../constants/CategoryConstants";

const GET_ALL_CATEGORY_INITIAL_STATE = {
  categories: [
    {
      _id: "",
      name: "",
      slug: "",
      subs : [],
    },
  ],
  success: false,
};
export const getAllCategoryReducer = (
  state = GET_ALL_CATEGORY_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        categories: action.payload.categories,
        subs : action.payload.subs,
        totalLength : action.payload.totalLength
      };

    case GET_ALL_CATEGORY_FAIL:
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

const ADD_CATEGORY_INITIAL_STATE = {
  category: {
    _id: "",
    name: "",
    slug: "",
  },
  success: false,
  message: "",
};

export const addCategoryReducer = (
  state = ADD_CATEGORY_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ADD_CATEGORY_REQUEST:
      return { ...state, loading: true };

    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        category: action.payload.category,
        message: action.payload.message,
      };

    case ADD_CATEGORY_INITIAL_STATE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case ADD_CATEGORY_RESET:
      return {
        ...ADD_CATEGORY_INITIAL_STATE,
      };
    default:
      return state;
  }
};

const DELETE_UPDATE_CATEGORY_INITIAL_STATE = {
  updated: {
    name: "",
  },
  message: "",
  updateSuccess: false,
  deleted: false,
  addedSubToCategory : false 
};

export const deleteUpdateCategoryReducer = (
  state = DELETE_UPDATE_CATEGORY_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
    case UPDATE_CATEGORY_REQUEST:
    case ADD_SUB_TO_CATEGORY_REQUEST :   
      return { ...state, loading: true };

    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
      };

    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        updated: action.payload.updated,
        updateSuccess: true,
      };
    case ADD_SUB_TO_CATEGORY_SUCCESS : 
      return {
        ...state,
        loading : false ,
        addedSubToCategory : true  
      }

    case DELETE_CATEGORY_FAIL:
    case UPDATE_CATEGORY_FAIL:
    case ADD_SUB_TO_CATEGORY_FAIL:
      return {
        ...state,
        addedSubToCategory : false, 
        error: action.payload,
      };

    case DELETE_CATEGORY_RESET:
      return {
        ...DELETE_UPDATE_CATEGORY_INITIAL_STATE,
      };
    case UPDATE_CATEGORY_RESET:
      return {
        ...DELETE_UPDATE_CATEGORY_INITIAL_STATE,
      };
      case ADD_SUB_TO_CATEGORY_RESET:
        return {
          ...DELETE_UPDATE_CATEGORY_INITIAL_STATE,
        };
    default:
      return state;
  }
};

export const getCategoriesReducer = (
  state = {categories : [] },
  action
) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, loading: true };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        categories: action.payload,
      };

    case GET_CATEGORIES_FAIL:
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