import axios from "axios";
import { ADD_CLOTHING_TO_BASKET_FAIL, ADD_CLOTHING_TO_BASKET_REQUEST, ADD_CLOTHING_TO_BASKET_SUCCESS, ADD_MEAL_TO_BASKET_FAIL, ADD_MEAL_TO_BASKET_REQUEST, ADD_MEAL_TO_BASKET_SUCCESS, ADD_SHELTER_TO_BASKET_FAIL, ADD_SHELTER_TO_BASKET_REQUEST, ADD_SHELTER_TO_BASKET_SUCCESS, FILTER_BY_ROLE_FAIL, FILTER_BY_ROLE_REQUEST, FILTER_BY_ROLE_SUCCESS, GET_USER_CLOTHING_BASKET_FAIL, GET_USER_CLOTHING_BASKET_REQUEST, GET_USER_CLOTHING_BASKET_SUCCESS, GET_USER_MEAL_BASKET_FAIL, GET_USER_MEAL_BASKET_REQUEST, GET_USER_MEAL_BASKET_SUCCESS, GET_USER_SHELTER_BASKET_FAIL, GET_USER_SHELTER_BASKET_REQUEST, GET_USER_SHELTER_BASKET_SUCCESS, REMOVE_CLOTHING_FROM_BASKET_FAIL, REMOVE_CLOTHING_FROM_BASKET_REQUEST, REMOVE_CLOTHING_FROM_BASKET_SUCCESS, REMOVE_MEAL_FROM_BASKET_FAIL, REMOVE_MEAL_FROM_BASKET_REQUEST, REMOVE_MEAL_FROM_BASKET_SUCCESS, REMOVE_SHELTER_FROM_BASKET_FAIL, REMOVE_SHELTER_FROM_BASKET_REQUEST, REMOVE_SHELTER_FROM_BASKET_SUCCESS, UPDATE_LIVE_LOCATION_FAIL, UPDATE_LIVE_LOCATION_REQUEST, UPDATE_LIVE_LOCATION_SUCCESS } from "../constants/UserConstants";

export const GetUsersByRole = (userRoles) => async (dispatch) => {
    try {
      dispatch({
        type: FILTER_BY_ROLE_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/users/filter-by-role?userRoles=${userRoles}`
      );
  
      dispatch({
        type: FILTER_BY_ROLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FILTER_BY_ROLE_FAIL,
        error: error.response,
      });
    }
  };
  
  export const GetUserClothingBasket = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_CLOTHING_BASKET_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/users/${userId}/clothingBasket`
      );
  
      dispatch({
        type: GET_USER_CLOTHING_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_CLOTHING_BASKET_FAIL,
        error: error.response,
      });
    }
  };

  export const AddClothingToBasket = (clothingItem) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_CLOTHING_TO_BASKET_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/clothingBasket/add`,clothingItem
      );
  
      dispatch({
        type: ADD_CLOTHING_TO_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_CLOTHING_TO_BASKET_FAIL,
        error: error.response,
      });
    }
  };


  export const RemoveClothingFromBasket = (userId,itemId) => async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_CLOTHING_FROM_BASKET_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/clothingBasket/remove/${userId}/${itemId}`)
  
      dispatch({
        type: REMOVE_CLOTHING_FROM_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_CLOTHING_FROM_BASKET_FAIL,
        error: error.response,
      });
    }
  };


  export const GetUserShelterBasket = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_SHELTER_BASKET_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/users/${userId}/shelterBasket`
      );
  
      dispatch({
        type: GET_USER_SHELTER_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_SHELTER_BASKET_FAIL,
        error: error.response,
      });
    }
  };

  export const AddShelterToBasket = (shelterItem) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_SHELTER_TO_BASKET_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/shelterBasket/add`,shelterItem
      );
  
      dispatch({
        type: ADD_SHELTER_TO_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_SHELTER_TO_BASKET_FAIL,
        error: error.response,
      });
    }
  };


  export const RemoveShelterFromBasket = (userId,itemId) => async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_SHELTER_FROM_BASKET_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/shelterBasket/remove/${userId}/${itemId}`)
  
      dispatch({
        type: REMOVE_SHELTER_FROM_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_SHELTER_FROM_BASKET_FAIL,
        error: error.response,
      });
    }
  };


  
  export const GetUserMealBasket = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_MEAL_BASKET_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/users/${userId}/mealBasket`
      );
  
      dispatch({
        type: GET_USER_MEAL_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_MEAL_BASKET_FAIL,
        error: error.response,
      });
    }
  };

  export const AddMealToBasket = (mealItem) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_MEAL_TO_BASKET_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/mealBasket/add`,mealItem
      );
  
      dispatch({
        type: ADD_MEAL_TO_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_MEAL_TO_BASKET_FAIL,
        error: error.response,
      });
    }
  };

  export const RemoveMealFromBasket = (userId,itemId) => async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_MEAL_FROM_BASKET_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/mealBasket/remove/${userId}/${itemId}`)
  
      dispatch({
        type: REMOVE_MEAL_FROM_BASKET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_MEAL_FROM_BASKET_FAIL,
        error: error.response,
      });
    }
  };
  

  export const UpdateLiveLocation = (userId, lat, lng) => async (dispatch) => {
    try {

      dispatch({
        type : UPDATE_LIVE_LOCATION_REQUEST
      })

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.patch(
        `https://afetapi.onrender.com/api/users/${userId}/location`,
        { lat, lng },
        config
      );
  
      dispatch({
        type: UPDATE_LIVE_LOCATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_LIVE_LOCATION_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  