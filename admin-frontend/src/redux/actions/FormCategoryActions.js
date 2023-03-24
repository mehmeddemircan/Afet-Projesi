import axios from 'axios'
import { GET_FORM_CATEGORIES_FAIL, GET_FORM_CATEGORIES_REQUEST, GET_FORM_CATEGORIES_SUCCESS, GET_SINGLE_FORM_CATEGORY_FAIL, GET_SINGLE_FORM_CATEGORY_REQUEST, GET_SINGLE_FORM_CATEGORY_SUCCESS } from '../constants/FormCategoryContants';


export const AllFormCategory = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_FORM_CATEGORIES_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/formCategories`
      
      );
  
      dispatch({
        type: GET_FORM_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_FORM_CATEGORIES_FAIL,
        error: error.response,
      });
    }
  };


  export const GetFormCategory = (categoryId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_SINGLE_FORM_CATEGORY_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/formCategories/${categoryId}`
      
      );
  
      dispatch({
        type: GET_SINGLE_FORM_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_FORM_CATEGORY_FAIL,
        error: error.response,
      });
    }
  };