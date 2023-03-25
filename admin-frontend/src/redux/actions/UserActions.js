import axios from "axios";
import {
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  SEARCH_USERS_BY_NAME_FAIL,
  SEARCH_USERS_BY_NAME_REQUEST,
  SEARCH_USERS_BY_NAME_SUCCESS,
  UPDATE_USER_ROLE_FAIL,
  UPDATE_USER_ROLE_REQUEST,
  UPDATE_USER_ROLE_SUCCESS,
} from "../constants/UserConstants";
import { GET_USERS_LOCATIONS_FAIL, GET_USERS_LOCATIONS_REQUEST, GET_USERS_LOCATIONS_SUCCESS, UPDATE_LIVE_LOCATION_FAIL, UPDATE_LIVE_LOCATION_SUCCESS } from "../constants/LocationConstants";

export const AllUser = (limit, page) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USER_REQUEST,
    });

    const { data } = await axios.get(`https://afetapi.onrender.com/api/users?limit=${limit}&page=${page}`);

    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_FAIL,
      error: error.response,
    });
  }
};

export const SearchUser = (name) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_USERS_BY_NAME_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/users/search?name=${name}`
    );

    dispatch({
      type: SEARCH_USERS_BY_NAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_USERS_BY_NAME_FAIL,
      error: error.response,
    });
  }
};


export const UpdateUserRole = (id) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_USER_ROLE_REQUEST,
      });
  
      const { data } = await axios.put(
        `https://afetapi.onrender.com/api/users/${id}/update-role`
      );
  
      dispatch({
        type: UPDATE_USER_ROLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ROLE_FAIL,
        error: error.response,
      });
    }
  };
  

  export const GetAllUserLocations = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_USERS_LOCATIONS_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/map/users`

      );
  
      dispatch({
        type: GET_USERS_LOCATIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_LOCATIONS_FAIL,
        error: error.response,
      });
    }
  };
  
  export const UpdateLiveLocation = (userId, lat, lng) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.patch(
        `http://localhost:5000/api/users/${userId}/location`,
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
