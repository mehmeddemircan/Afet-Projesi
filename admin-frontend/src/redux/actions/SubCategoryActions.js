import axios from "axios";
import { ADD_SUBCATEGORY_FAIL, ADD_SUBCATEGORY_REQUEST, ADD_SUBCATEGORY_SUCCESS, DELETE_SUBCATEGORY_FAIL, DELETE_SUBCATEGORY_REQUEST, DELETE_SUBCATEGORY_SUCCESS, GET_ALL_SUBCATEGORY_FAIL, GET_ALL_SUBCATEGORY_REQUEST, GET_ALL_SUBCATEGORY_SUCCESS, UPDATE_SUBCATEGORY_FAIL, UPDATE_SUBCATEGORY_REQUEST, UPDATE_SUBCATEGORY_SUCCESS } from "../constants/SubCategoryConstants";


export const AllSubCategory = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_SUBCATEGORY_REQUEST,
      });
  
      const { data } = await axios.get(
        `/api/subcategories`
      );
  
      dispatch({
        type: GET_ALL_SUBCATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SUBCATEGORY_FAIL,
        error: error.response,
      });
    }
  };


  export const AddSubCategory = (subcategory) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_SUBCATEGORY_REQUEST,
      });
  
      const { data } = await axios.post(
        `/api/create-subcategory`,subcategory
      );
  
      dispatch({
        type: ADD_SUBCATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_SUBCATEGORY_FAIL,
        error: error.response,
      });
    }
  };


  export const DeleteSubCategory= (id) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_SUBCATEGORY_REQUEST,
      });
  
      const { data } = await axios.delete(
        `/api/subcategory/${id}/delete`
      );
  
      dispatch({
        type: DELETE_SUBCATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SUBCATEGORY_FAIL,
        error: error.response,
      });
    }
  };

  
  export const UpdateSubCategory = (id,subcategory) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_SUBCATEGORY_REQUEST,
      });
  
      const { data } = await axios.put(
        `/api/subcategory/${id}/update`,subcategory
      );
  
      dispatch({
        type: UPDATE_SUBCATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SUBCATEGORY_FAIL,
        error: error.response,
      });
    }
  };