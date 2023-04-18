import axios from "axios";
import { CREATE_MEAL_NEED_FORM_FAIL, CREATE_MEAL_NEED_FORM_REQUEST, CREATE_MEAL_NEED_FORM_SUCCESS, DELETE_MEAL_NEED_FORM_FAIL, DELETE_MEAL_NEED_FORM_REQUEST, DELETE_MEAL_NEED_FORM_SUCCESS, GET_ALL_MEAL_NEED_FORM_FAIL, GET_ALL_MEAL_NEED_FORM_REQUEST, GET_ALL_MEAL_NEED_FORM_SUCCESS, UPDATE_MEAL_NEED_FORM_FAIL, UPDATE_MEAL_NEED_FORM_REQUEST, UPDATE_MEAL_NEED_FORM_SUCCESS } from "../constants/MealNeedFormConstants";

export const AllMealForm = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_MEAL_NEED_FORM_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/mealNeedForms`
      );
  
      dispatch({
        type: GET_ALL_MEAL_NEED_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_MEAL_NEED_FORM_FAIL,
        error: error.response,
      });
    }
  };
  
  export const SendMealForm = (shelterForm) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_MEAL_NEED_FORM_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-mealNeedForm`,
        shelterForm
      );
  
      dispatch({
        type: CREATE_MEAL_NEED_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_MEAL_NEED_FORM_FAIL,
        error: error.response,
      });
    }
  };
  
  export const DeleteMealForm = (mealFormId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_MEAL_NEED_FORM_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/mealNeedForms/${mealFormId}/delete`
      );
  
      dispatch({
        type: DELETE_MEAL_NEED_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_MEAL_NEED_FORM_FAIL,
        error: error.response,
      });
    }
  };

  export const ApproveMealForm = (mealFormId) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_MEAL_NEED_FORM_REQUEST,
      });
  
      const { data } = await axios.put(
        `https://afetapi.onrender.com/api/mealNeedForms/${mealFormId}/approve`
      );
  
      dispatch({
        type: UPDATE_MEAL_NEED_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_MEAL_NEED_FORM_FAIL,
        error: error.response,
      });
    }
  };
  