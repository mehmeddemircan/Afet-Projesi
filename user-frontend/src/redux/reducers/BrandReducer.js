import { combineReducers } from "redux";

import {
  GET_ALL_CLOTHES_BRAND_FAIL,
  GET_ALL_CLOTHES_BRAND_REQUEST,
  GET_ALL_CLOTHES_BRAND_SUCCESS,
  GET_ALL_CLOTHES_PRODUCT_FAIL,
  GET_ALL_CLOTHES_PRODUCT_REQUEST,
  GET_ALL_CLOTHES_PRODUCT_SUCCESS,
  GET_ALL_MEAL_BRAND_FAIL,
  GET_ALL_MEAL_BRAND_REQUEST,
  GET_ALL_MEAL_BRAND_SUCCESS,
  GET_ALL_MEAL_PRODUCT_FAIL,
  GET_ALL_MEAL_PRODUCT_REQUEST,
  GET_ALL_MEAL_PRODUCT_SUCCESS,
  GET_ALL_SHELTER_BRAND_FAIL,
  GET_ALL_SHELTER_BRAND_REQUEST,
  GET_ALL_SHELTER_BRAND_SUCCESS,
  GET_ALL_SHELTER_PRODUCT_FAIL,
  GET_ALL_SHELTER_PRODUCT_REQUEST,
  GET_ALL_SHELTER_PRODUCT_SUCCESS,
  GET_SINGLE_BRAND_FAIL,
  GET_SINGLE_BRAND_REQUEST,
  GET_SINGLE_BRAND_SUCCESS,
} from "../constants/BrandConstants";

export const getBrandsByNameReducer = (state = { brands: [] }, action) => {
  switch (action.type) {
    case GET_ALL_CLOTHES_BRAND_REQUEST:
    case GET_ALL_MEAL_BRAND_REQUEST:
    case GET_ALL_SHELTER_BRAND_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_CLOTHES_BRAND_SUCCESS:
    case GET_ALL_MEAL_BRAND_SUCCESS:
    case GET_ALL_SHELTER_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        brands: action.payload,
      };

    case GET_ALL_CLOTHES_BRAND_FAIL:
    case GET_ALL_MEAL_BRAND_FAIL:
    case GET_ALL_SHELTER_BRAND_FAIL:
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

export const getAllProductsByBrandReducer = (
  state = { brandProducts: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_MEAL_PRODUCT_REQUEST:
    case GET_ALL_CLOTHES_PRODUCT_REQUEST:
    case GET_ALL_SHELTER_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_MEAL_PRODUCT_SUCCESS:
    case GET_ALL_CLOTHES_PRODUCT_SUCCESS:
    case GET_ALL_SHELTER_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        brandProducts: action.payload,
      };

    case GET_ALL_MEAL_PRODUCT_FAIL:
    case GET_ALL_CLOTHES_PRODUCT_FAIL:
    case GET_ALL_SHELTER_PRODUCT_FAIL:
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

export const getSingleBrandReducer = (state = { brand: {} }, action) => {
  switch (action.type) {
    case GET_SINGLE_BRAND_REQUEST:
      return { ...state, loading: true };

    case GET_SINGLE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        brand: action.payload,
      };

    case GET_SINGLE_BRAND_FAIL:
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

const brandReducer = combineReducers({
  getBrandsByName: getBrandsByNameReducer,
  getSingleBrand: getSingleBrandReducer,
  getAllProductsByBrand : getAllProductsByBrandReducer
});

export default brandReducer;
