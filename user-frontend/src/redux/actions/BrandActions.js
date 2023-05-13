import axios from "axios";
import { GET_ALL_CLOTHES_BRAND_FAIL, GET_ALL_CLOTHES_BRAND_REQUEST, GET_ALL_CLOTHES_BRAND_SUCCESS, GET_ALL_CLOTHES_PRODUCT_FAIL, GET_ALL_CLOTHES_PRODUCT_REQUEST, GET_ALL_CLOTHES_PRODUCT_SUCCESS, GET_ALL_MEAL_BRAND_FAIL, GET_ALL_MEAL_BRAND_REQUEST, GET_ALL_MEAL_BRAND_SUCCESS, GET_ALL_MEAL_PRODUCT_FAIL, GET_ALL_MEAL_PRODUCT_REQUEST, GET_ALL_MEAL_PRODUCT_SUCCESS, GET_ALL_SHELTER_BRAND_FAIL, GET_ALL_SHELTER_BRAND_REQUEST, GET_ALL_SHELTER_BRAND_SUCCESS, GET_ALL_SHELTER_PRODUCT_REQUEST, GET_ALL_SHELTER_PRODUCT_SUCCESS, GET_SINGLE_BRAND_FAIL, GET_SINGLE_BRAND_REQUEST, GET_SINGLE_BRAND_SUCCESS } from "../constants/BrandConstants";



export const GetSingleBrand = (brandId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_SINGLE_BRAND_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/brands/${brandId}`
      );
  
      dispatch({
        type: GET_SINGLE_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_BRAND_FAIL,
        error: error.response,
      });
    }
  };
  

export const GetAllClothesBrand = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_CLOTHES_BRAND_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/get-clothes-brands`
      );
  
      dispatch({
        type: GET_ALL_CLOTHES_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_CLOTHES_BRAND_FAIL,
        error: error.response,
      });
    }
  };
  
  
  export const GetAllShelterBrand = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_SHELTER_BRAND_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/get-shelter-brands`
      );
  
      dispatch({
        type: GET_ALL_SHELTER_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SHELTER_BRAND_FAIL,
        error: error.response,
      });
    }
  };
  
  export const GetAllMealBrand = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_MEAL_BRAND_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/get-meal-brands`
      );
  
      dispatch({
        type: GET_ALL_MEAL_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_MEAL_BRAND_FAIL,
        error: error.response,
      });
    }
  };
  

  
export const AllClothesByBrand = (brandId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_CLOTHES_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/brands/${brandId}/clothes`
      );
  
      dispatch({
        type: GET_ALL_CLOTHES_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_CLOTHES_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };

  export const AllMealByBrand = (brandId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_MEAL_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/brands/${brandId}/meals`
      );
  
      dispatch({
        type: GET_ALL_MEAL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_MEAL_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };
  


  export const AllShelterByBrand = (brandId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_SHELTER_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/brands/${brandId}/shelters`
      );
  
      dispatch({
        type: GET_ALL_SHELTER_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SHELTER_PRODUCT_REQUEST,
        error: error.response,
      });
    }
  };
  
  