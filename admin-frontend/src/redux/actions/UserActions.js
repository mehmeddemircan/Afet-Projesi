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

export const AllUser = (limit, page) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USER_REQUEST,
    });

    const { data } = await axios.get(`/api/users?limit=${limit}&page=${page}`);

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
      `/api/users/search?name=${name}`
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
        `/api/users/${id}/update-role`
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
  
