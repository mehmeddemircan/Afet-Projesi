import {
  ADD_IMAGE_TO_PRODUCT_FAIL,
  ADD_IMAGE_TO_PRODUCT_REQUEST,
  ADD_IMAGE_TO_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_RESET,
  ADD_PRODUCT_SUCCESS,
  ADD_IMAGE_TO_PRODUCT_RESET,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_RESET,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_RESET,
  UPDATE_PRODUCT_SUCCESS,
} from "../constants/ProductConstants";
import { combineReducers } from "redux";

export const getAllProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        products: action.payload.products,
      };

    case GET_ALL_PRODUCT_FAIL:
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

const ADD_PRODUCT_INITIAL_STATE = {
  product: {},
  message: "",
};

export const addProductReducer = (
  state = ADD_PRODUCT_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload.product,
        message: action.payload.message,
      };

    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case ADD_PRODUCT_RESET:
      return {
        ...ADD_PRODUCT_INITIAL_STATE,
        success: false,
      };
    default:
      return state;
  }
};

const DELETE_UPDATE_PRODUCT_INITIAL_STATE = {
  updated: {
    name: "",
  },
  updateSuccess: false,
  deleted: false,
  message: "",
  addedImage: false,
};

export const deleteUpdateProductReducer = (
  state = DELETE_UPDATE_PRODUCT_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case ADD_IMAGE_TO_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
        message: action.payload.message,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        updated: action.payload,
        updateSuccess: true,
      };
    case ADD_IMAGE_TO_PRODUCT_SUCCESS:
      return {
        ...state,
        addedImage: true,
        message: action.payload.message,
      };
    case DELETE_PRODUCT_FAIL:
    case UPDATE_PRODUCT_FAIL:
    case ADD_IMAGE_TO_PRODUCT_FAIL:
      return { ...state, error: action.payload };

    case DELETE_PRODUCT_RESET:
      return {
        ...DELETE_UPDATE_PRODUCT_INITIAL_STATE,
      };
    case UPDATE_PRODUCT_RESET:
      return {
        ...DELETE_UPDATE_PRODUCT_INITIAL_STATE,
      };
    case ADD_IMAGE_TO_PRODUCT_RESET:
      return {
        ...DELETE_UPDATE_PRODUCT_INITIAL_STATE,
      };
    default:
      return state;
  }
};

export const getSingleProductReducer = (
  state = {
    product: {
      category: null,
    },
  },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload.product,
      };

    case GET_SINGLE_PRODUCT_FAIL:
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

const productReducer = combineReducers({
  addProduct: addProductReducer,
  getAllProduct: getAllProductReducer,
  deleteUpdateProduct: deleteUpdateProductReducer,
  getSingleProduct: getSingleProductReducer,
});

export default productReducer;
