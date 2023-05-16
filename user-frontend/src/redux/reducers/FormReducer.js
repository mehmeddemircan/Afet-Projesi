import { combineReducers } from "redux";
import {
  DELETE_CLOTHING_FORM_FAIL,
  DELETE_CLOTHING_FORM_REQUEST,
  DELETE_CLOTHING_FORM_RESET,
  DELETE_CLOTHING_FORM_SUCCESS,
  DELETE_MEAL_FORM_FAIL,
  DELETE_MEAL_FORM_REQUEST,
  DELETE_MEAL_FORM_RESET,
  DELETE_MEAL_FORM_SUCCESS,
  DELETE_SHELTER_FORM_FAIL,
  DELETE_SHELTER_FORM_REQUEST,
  DELETE_SHELTER_FORM_RESET,
  DELETE_SHELTER_FORM_SUCCESS,
  GET_ALL_CLOTHING_FORM_FAIL,
  GET_ALL_CLOTHING_FORM_REQUEST,
  GET_ALL_CLOTHING_FORM_SUCCESS,
  GET_ALL_MEAL_FORM_FAIL,
  GET_ALL_MEAL_FORM_REQUEST,
  GET_ALL_MEAL_FORM_SUCCESS,
  GET_ALL_SHELTER_FORM_FAIL,
  GET_ALL_SHELTER_FORM_REQUEST,
  GET_ALL_SHELTER_FORM_SUCCESS,
  GET_FORM_CATEGORIES_FAIL,
  GET_FORM_CATEGORIES_REQUEST,
  GET_FORM_CATEGORIES_SUCCESS,
  GET_SINGLE_FORM_CATEGORY_FAIL,
  GET_SINGLE_FORM_CATEGORY_REQUEST,
  GET_SINGLE_FORM_CATEGORY_SUCCESS,
  SEND_CLOTHING_FORM_FAIL,
  SEND_CLOTHING_FORM_REQUEST,
  SEND_CLOTHING_FORM_RESET,
  SEND_CLOTHING_FORM_SUCCESS,
  SEND_MEAL_FORM_FAIL,
  SEND_MEAL_FORM_REQUEST,
  SEND_MEAL_FORM_RESET,
  SEND_MEAL_FORM_SUCCESS,
  SEND_SHELTER_FORM_FAIL,
  SEND_SHELTER_FORM_REQUEST,
  SEND_SHELTER_FORM_RESET,
  SEND_SHELTER_FORM_SUCCESS,
} from "../constants/FormConstants";

export const getAllFormCategoryReducer = (state = { results: [] }, action) => {
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
  state = { formCategory: {} },
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

export const sendClothingFormReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case SEND_CLOTHING_FORM_REQUEST:
      return { ...state, loading: true };

    case SEND_CLOTHING_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case SEND_CLOTHING_FORM_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case SEND_CLOTHING_FORM_RESET:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export const sendMealFormReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case SEND_MEAL_FORM_REQUEST:
      return { ...state, loading: true };

    case SEND_MEAL_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case SEND_MEAL_FORM_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case SEND_MEAL_FORM_RESET:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export const sendShelterFormReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case SEND_SHELTER_FORM_REQUEST:
      return { ...state, loading: true };

    case SEND_SHELTER_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case SEND_SHELTER_FORM_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case SEND_SHELTER_FORM_RESET:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export const getAllClothingFormReducer = (
  state = { clothingForms: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_CLOTHING_FORM_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_CLOTHING_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        clothingForms: action.payload,
      };

    case GET_ALL_CLOTHING_FORM_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllShelterFormReducer = (
  state = { shelterForms: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_SHELTER_FORM_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_SHELTER_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        shelterForms: action.payload,
      };

    case GET_ALL_SHELTER_FORM_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllMealFormReducer = (
  state = { mealForms: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_MEAL_FORM_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_MEAL_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        mealForms: action.payload,
      };

    case GET_ALL_MEAL_FORM_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteUpdateFormReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case DELETE_CLOTHING_FORM_REQUEST:
    case DELETE_SHELTER_FORM_REQUEST:
    case DELETE_MEAL_FORM_REQUEST:
      return { ...state, loading: true };

    case DELETE_CLOTHING_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        isClothingFormDeleted: true,
        message: action.payload.message,
      };

    case DELETE_SHELTER_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        isShelterFormDeleted: true,
        message: action.payload.message,
      };

    case DELETE_MEAL_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        isMealFormDeleted: true,
        message: action.payload.message,
      };

    case DELETE_CLOTHING_FORM_FAIL:
    case DELETE_SHELTER_FORM_FAIL:
    case DELETE_MEAL_FORM_FAIL:
      return { ...state, loading: false, error: action.payload };

    case DELETE_CLOTHING_FORM_RESET:
      return {
        ...state,
        isClothingFormDeleted: false,
      };

    case DELETE_SHELTER_FORM_RESET:
      return {
        ...state,
        isShelterFormDeleted: false,
      };

    case DELETE_MEAL_FORM_RESET:
      return {
        ...state,
        isMealFormDeleted: false,
      };
    default:
      return state;
  }
};

const formReducer = combineReducers({
  getAllFormCategory: getAllFormCategoryReducer,
  getSingleFormCategory: getSingleFormCategoryReducer,
  sendClothingForm: sendClothingFormReducer,
  sendMealForm: sendMealFormReducer,
  sendShelterForm: sendShelterFormReducer,
  getAllClothingForm: getAllClothingFormReducer,
  deleteUpdateForm: deleteUpdateFormReducer,
  getAllShelterForm: getAllShelterFormReducer,
  getAllMealForm : getAllMealFormReducer
});

export default formReducer;
