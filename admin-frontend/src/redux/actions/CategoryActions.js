import axios from "axios";
import { ADD_CATEGORY_FAIL, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_SUB_TO_CATEGORY_FAIL, ADD_SUB_TO_CATEGORY_REQUEST, ADD_SUB_TO_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, GET_ALL_CATEGORY_FAIL, GET_ALL_CATEGORY_REQUEST, GET_ALL_CATEGORY_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_SUBS_OF_CATEGORY_FAIL, GET_SUBS_OF_CATEGORY_REQUEST, UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from "../constants/CategoryConstants";


export const AllCategory = (page,limit) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_CATEGORY_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetbackendapi.onrender.com/api/categories?page=${page}&limit=${limit}`,
      );
  
      dispatch({
        type: GET_ALL_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_CATEGORY_FAIL,
        error: error.response,
      });
    }
  };

  export const AddCategory = (category) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_CATEGORY_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetbackendapi.onrender.com/api/create-category`,category
      );
  
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_CATEGORY_FAIL,
        error: error.response,
      });
    }
  };


  export const DeleteCategory = (id) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_CATEGORY_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetbackendapi.onrender.com/api/category/${id}/delete`
      );
  
      dispatch({
        type: DELETE_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CATEGORY_FAIL,
        error: error.response,
      });
    }
  };

  export const UpdateCategory = (id,category) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_CATEGORY_REQUEST,
      });
  
      const { data } = await axios.put(
        `https://afetbackendapi.onrender.com/api/category/${id}/update`,category
      );
  
      dispatch({
        type: UPDATE_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CATEGORY_FAIL,
        error: error.response,
      });
    }
  };


  export const AddSubToCategory = (id,sub) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_SUB_TO_CATEGORY_REQUEST,
      });
  
      const { data } = await axios.put(
        `https://afetbackendapi.onrender.com/api/categories/${id}/add-sub`,sub
      );
  
      dispatch({
        type: ADD_SUB_TO_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_SUB_TO_CATEGORY_FAIL,
        error: error.response,
      });
    }
  };


  
export const GetCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CATEGORIES_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetbackendapi.onrender.com/api/get-all-category`,
    );

    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_FAIL,
      error: error.response,
    });
  }
};