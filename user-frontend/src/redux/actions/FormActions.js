import axios from "axios";
import { GET_FORM_CATEGORIES_FAIL, GET_FORM_CATEGORIES_REQUEST, GET_FORM_CATEGORIES_SUCCESS, GET_SINGLE_FORM_CATEGORY_FAIL, GET_SINGLE_FORM_CATEGORY_REQUEST, GET_SINGLE_FORM_CATEGORY_SUCCESS, SEND_CLOTHING_FORM_FAIL, SEND_CLOTHING_FORM_REQUEST, SEND_CLOTHING_FORM_SUCCESS, SEND_MEAL_FORM_FAIL, SEND_MEAL_FORM_REQUEST, SEND_MEAL_FORM_SUCCESS, SEND_SHELTER_FORM_FAIL, SEND_SHELTER_FORM_REQUEST, SEND_SHELTER_FORM_SUCCESS } from "../constants/FormConstants";

export const AllFormCategory = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_FORM_CATEGORIES_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/formCategories`
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
        `https://afetapi.onrender.com/api/formCategories/${categoryId}`
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
  

  export const SendClothingForm = (clothingForm) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_CLOTHING_FORM_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-clothingNeedForm`,
        clothingForm
      );
  
      dispatch({
        type: SEND_CLOTHING_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_CLOTHING_FORM_FAIL,
        error: error.response,
      });
    }
  };

  export const SendMealForm = (mealForm) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_MEAL_FORM_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-mealNeedForm`,
        mealForm
      );
  
      dispatch({
        type: SEND_MEAL_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_MEAL_FORM_FAIL,
        error: error.response,
      });
    }
  };
  
  export const SendShelterForm = (shelterForm) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_SHELTER_FORM_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-shelterNeedForm`,
        shelterForm
      );
  
      dispatch({
        type: SEND_SHELTER_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_SHELTER_FORM_FAIL,
        error: error.response,
      });
    }
  };
  