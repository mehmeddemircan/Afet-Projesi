import axios from "axios";
import {
  ADD_TASK_TO_USER_FAIL,
  ADD_TASK_TO_USER_REQUEST,
  ADD_TASK_TO_USER_SUCCESS,
  FILTER_BY_ROLE_FAIL,
  FILTER_BY_ROLE_REQUEST,
  FILTER_BY_ROLE_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_NOT_ADDED_TASK_FAIL,
  GET_NOT_ADDED_TASK_REQUEST,
  GET_NOT_ADDED_TASK_SUCCESS,
  GET_USER_TASKS_FAIL,
  GET_USER_TASKS_REQUEST,
  GET_USER_TASKS_SUCCESS,
  REMOVE_TASK_TO_USER_FAIL,
  REMOVE_TASK_TO_USER_REQUEST,
  REMOVE_TASK_TO_USER_SUCCESS,
  SEARCH_USERS_BY_NAME_FAIL,
  SEARCH_USERS_BY_NAME_REQUEST,
  SEARCH_USERS_BY_NAME_SUCCESS,
  UPDATE_USER_ROLE_FAIL,
  UPDATE_USER_ROLE_REQUEST,
  UPDATE_USER_ROLE_SUCCESS,
} from "../constants/UserConstants";
import {
  GET_USERS_LOCATIONS_FAIL,
  GET_USERS_LOCATIONS_REQUEST,
  GET_USERS_LOCATIONS_SUCCESS,
  UPDATE_LIVE_LOCATION_FAIL,
  UPDATE_LIVE_LOCATION_SUCCESS,
} from "../constants/LocationConstants";

export const AllUser = (limit, page) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USER_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/users?limit=${limit}&page=${page}`
    );

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
      `https://afetapi.onrender.com/api/users/${id}/make-admin`
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

export const GiveRoleToUser = (id,role) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_ROLE_REQUEST,
    });

    const { data } = await axios.put(
      `https://afetapi.onrender.com/api/users/${id}/give-role`,role
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
      `https://afetapi.onrender.com/api/map/users`
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

export const AddTaskToUser = (userId, task) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TASK_TO_USER_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/users/${userId}/add-task`,
      task
    );

    dispatch({
      type: ADD_TASK_TO_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TASK_TO_USER_FAIL,
      error: error.response,
    });
  }
};

export const RemoveTaskFromUser = (userId, taskId) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_TASK_TO_USER_REQUEST,
    });

    const { data } = await axios.delete(
      `https://afetapi.onrender.com/api/users/${userId}/tasks/${taskId}/remove`
    );

    dispatch({
      type: REMOVE_TASK_TO_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_TASK_TO_USER_FAIL,
      error: error.response,
    });
  }
};

export const GetUserTasks = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_TASKS_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/users/${userId}/tasks`
    );

    dispatch({
      type: GET_USER_TASKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_TASKS_FAIL,
      error: error.response,
    });
  }
};

export const GetAllTaskNotAdded = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_NOT_ADDED_TASK_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/users/${userId}/not-added-tasks`
    );

    dispatch({
      type: GET_NOT_ADDED_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_NOT_ADDED_TASK_FAIL,
      error: error.response,
    });
  }
};

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

