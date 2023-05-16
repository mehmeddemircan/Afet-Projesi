import axios from "axios";
import { DELETE_CLOTHING_FORM_FAIL, DELETE_CLOTHING_FORM_REQUEST, DELETE_CLOTHING_FORM_SUCCESS, DELETE_MEAL_FORM_FAIL, DELETE_MEAL_FORM_REQUEST, DELETE_MEAL_FORM_SUCCESS, DELETE_SHELTER_FORM_FAIL, DELETE_SHELTER_FORM_REQUEST, DELETE_SHELTER_FORM_SUCCESS, GET_ALL_CLOTHING_FORM_FAIL, GET_ALL_CLOTHING_FORM_REQUEST, GET_ALL_CLOTHING_FORM_SUCCESS, GET_ALL_MEAL_FORM_FAIL, GET_ALL_MEAL_FORM_REQUEST, GET_ALL_MEAL_FORM_SUCCESS, GET_ALL_SHELTER_FORM_FAIL, GET_ALL_SHELTER_FORM_REQUEST, GET_ALL_SHELTER_FORM_SUCCESS, GET_FORM_CATEGORIES_FAIL, GET_FORM_CATEGORIES_REQUEST, GET_FORM_CATEGORIES_SUCCESS, GET_SINGLE_FORM_CATEGORY_FAIL, GET_SINGLE_FORM_CATEGORY_REQUEST, GET_SINGLE_FORM_CATEGORY_SUCCESS, SEND_CLOTHING_FORM_FAIL, SEND_CLOTHING_FORM_REQUEST, SEND_CLOTHING_FORM_SUCCESS, SEND_MEAL_FORM_FAIL, SEND_MEAL_FORM_REQUEST, SEND_MEAL_FORM_SUCCESS, SEND_SHELTER_FORM_FAIL, SEND_SHELTER_FORM_REQUEST, SEND_SHELTER_FORM_SUCCESS } from "../constants/FormConstants";

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
  


  export const GetAllClothingForm = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_CLOTHING_FORM_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/users/${userId}/clothingForms`
      );
  
      dispatch({
        type: GET_ALL_CLOTHING_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_CLOTHING_FORM_FAIL,
        error: error.response,
      });
    }
  };


  export const DeleteClothingForm = (userId,clothingFormId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_CLOTHING_FORM_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/users/${userId}/clothingNeedForms/${clothingFormId}/delete`
      );
  
      dispatch({
        type: DELETE_CLOTHING_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CLOTHING_FORM_FAIL,
        error: error.response,
      });
    }
  };


  export const GetAllShelterForm = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_SHELTER_FORM_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/users/${userId}/shelterForms`
      );
  
      dispatch({
        type: GET_ALL_SHELTER_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SHELTER_FORM_FAIL,
        error: error.response,
      });
    }
  };


  export const DeleteShelterForm = (userId,shelterFormId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_SHELTER_FORM_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/users/${userId}/shelterNeedForms/${shelterFormId}/delete`
      );
  
      dispatch({
        type: DELETE_SHELTER_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SHELTER_FORM_FAIL,
        error: error.response,
      });
    }
  };

  export const GetAllMealForm = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_MEAL_FORM_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/users/${userId}/mealForms`
      );
  
      dispatch({
        type: GET_ALL_MEAL_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_MEAL_FORM_FAIL,
        error: error.response,
      });
    }
  };


  export const DeleteMealForm = (userId,mealFormId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_MEAL_FORM_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/users/${userId}/mealNeedForms/${mealFormId}/delete`
      );
  
      dispatch({
        type: DELETE_MEAL_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_MEAL_FORM_FAIL,
        error: error.response,
      });
    }
  };