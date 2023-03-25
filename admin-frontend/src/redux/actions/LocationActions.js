import axios from "axios";
import { GET_USERS_LOCATIONS_FAIL, GET_USERS_LOCATIONS_REQUEST, GET_USERS_LOCATIONS_SUCCESS, SAVE_LOCATION_FAIL, SAVE_LOCATION_REQUEST, SAVE_LOCATION_SUCCESS, UPDATE_LIVE_LOCATION_FAIL, UPDATE_LIVE_LOCATION_SUCCESS } from "../constants/LocationConstants";

export const SaveLocation = (userId,latitude,longitude) => async (dispatch) => {
    try {
      dispatch({
        type: SAVE_LOCATION_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/share-location?userId=${userId}&latitude=${latitude}&longitude=${longitude}`

      );
  
      dispatch({
        type: SAVE_LOCATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SAVE_LOCATION_FAIL,
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
        `https://afetapi.onrender.com/api/users/locations`

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
  

  
export const UpdateLiveLocation = (userId, latitude, longitude) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `https://afetapi.onrender.com/api/users/${userId}/location`,
      { latitude, longitude },
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
