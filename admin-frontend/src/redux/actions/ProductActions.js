import axios from "axios";
import { ADD_IMAGE_TO_PRODUCT_FAIL, ADD_IMAGE_TO_PRODUCT_REQUEST, ADD_IMAGE_TO_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/ProductConstants";

export const AllProduct = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/products`
      );
  
      dispatch({
        type: GET_ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };


  export const AddProduct = (product) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-product`,product
      );
  
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };


  export const DeleteProduct = (id) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/products/${id}/delete`
      );
  
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };


  export const UpdateProduct = (id,product) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.put(
        `https://afetapi.onrender.com/api/products/${id}/update`,product
      );
  
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };


  export const GetSingleProdcut = (id) => async (dispatch) => {
    try {
      dispatch({
        type: GET_SINGLE_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/product/${id}`
      );
  
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };


  export const AddImageToProduct = (id,image) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_IMAGE_TO_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.put(
        `https://afetapi.onrender.com/api/products/${id}/images`,image
      );
  
      dispatch({
        type: ADD_IMAGE_TO_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_IMAGE_TO_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };
