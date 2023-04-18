import axios from "axios";
import {
  ADD_MEAL_FAIL,
  ADD_MEAL_REQUEST,
  ADD_MEAL_SUCCESS,
  DELETE_MEAL_FAIL,
  DELETE_MEAL_REQUEST,
  DELETE_MEAL_SUCCESS,
  GET_ALL_MEAL_BY_BRAND_FAIL,
  GET_ALL_MEAL_BY_BRAND_REQUEST,
  GET_ALL_MEAL_BY_BRAND_SUCCESS,
  UPDATE_MEAL_FAIL,
  UPDATE_MEAL_REQUEST,
  UPDATE_MEAL_SUCCESS,
} from "../constants/MealConstants";

export const AllMealByBrand = (brandId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_MEAL_BY_BRAND_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/brands/${brandId}/meals`
    );

    dispatch({
      type: GET_ALL_MEAL_BY_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_MEAL_BY_BRAND_FAIL,
      error: error.response,
    });
  }
};

export const AddMeal = (meal) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_MEAL_REQUEST,
      });

      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-mealProduct`,
        meal
      );

      dispatch({
        type: ADD_MEAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_MEAL_FAIL,
        error: error.response,
      });
    }
  };

  export const DeleteMeal = (mealId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_MEAL_REQUEST,
      });

      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/meals/${mealId}/delete`
      );

      dispatch({
        type: DELETE_MEAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_MEAL_FAIL,
        error: error.response,
      });
    }
  };


  export const UpdateMealProduct = (mealId,meal) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_MEAL_REQUEST,
      });
  
      const { data } = await axios.put(
        `http://localhost:5000/api/meals/${mealId}/update`,meal
      );
  
      dispatch({
        type: UPDATE_MEAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_MEAL_FAIL,
        error: error.response,
      });
    }
  };
  
