import { ADD_SUBCATEGORY_FAIL, ADD_SUBCATEGORY_REQUEST, ADD_SUBCATEGORY_RESET, ADD_SUBCATEGORY_SUCCESS, DELETE_SUBCATEGORY_FAIL, DELETE_SUBCATEGORY_REQUEST, DELETE_SUBCATEGORY_RESET, DELETE_SUBCATEGORY_SUCCESS, GET_ALL_SUBCATEGORY_FAIL, GET_ALL_SUBCATEGORY_REQUEST, GET_ALL_SUBCATEGORY_SUCCESS, UPDATE_SUBCATEGORY_FAIL, UPDATE_SUBCATEGORY_REQUEST, UPDATE_SUBCATEGORY_RESET, UPDATE_SUBCATEGORY_SUCCESS } from "../constants/SubCategoryConstants";


const GET_ALL_SUBCATEGORY_INITIAL_STATE = {
    subs: [
      {
        name: "",
      },
    ],
  };
  export const getAllSubCategoryReducer = (
    state = GET_ALL_SUBCATEGORY_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_ALL_SUBCATEGORY_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_SUBCATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          subs: action.payload.subs,
        };
  
      case GET_ALL_SUBCATEGORY_FAIL:
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
  
  const ADD_SUBCATEGORY_INITIAL_STATE = { sub: { name: "" } };
  
  export const addSubCategoryReducer = (
    state = ADD_SUBCATEGORY_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case ADD_SUBCATEGORY_REQUEST:
        return { ...state, loading: true };
  
      case ADD_SUBCATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          sub: action.payload.sub,
        };
  
      case ADD_SUBCATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
  
      case ADD_SUBCATEGORY_RESET:
        return {
          ...ADD_SUBCATEGORY_INITIAL_STATE,
          success: false,
        };
      default:
        return state;
    }
  };
  

  const DELETE_UPDATE_SUBCATEGORY_INITIAL_STATE = {
    updated: {
      name: "",
    },
    updateSuccess: false,
    deleted: false,
    message : ""
  };
  
  export const deleteUpdateSubCategoryReducer = (
    state = DELETE_UPDATE_SUBCATEGORY_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case DELETE_SUBCATEGORY_REQUEST:
      case UPDATE_SUBCATEGORY_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_SUBCATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          deleted: true,
          message : action.payload.message
        };
  
      case UPDATE_SUBCATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload,
          updateSuccess: true,
        };
  
      case DELETE_SUBCATEGORY_FAIL:
      case UPDATE_SUBCATEGORY_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_SUBCATEGORY_RESET:
        return {
          ...DELETE_UPDATE_SUBCATEGORY_INITIAL_STATE,
        };
      case UPDATE_SUBCATEGORY_RESET:
        return {
          ...DELETE_UPDATE_SUBCATEGORY_INITIAL_STATE,
        };
      default:
        return state;
    }
  };