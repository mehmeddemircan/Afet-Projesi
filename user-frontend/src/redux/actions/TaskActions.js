import { GET_TASKS_BY_CITY_FAIL, GET_TASKS_BY_CITY_REQUEST, GET_TASKS_BY_CITY_SUCCESS, GET_USER_TASKS_FAIL, GET_USER_TASKS_REQUEST, GET_USER_TASKS_SUCCESS } from "../constants/TaskConstants";
import axios from 'axios'
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

  export const GetTasksByCityId = (cityIds) => async (dispatch) => {
    try {
      dispatch({
        type: GET_TASKS_BY_CITY_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/get-tasks-by-city?cityIds=${cityIds}`
      );
  
      dispatch({
        type: GET_TASKS_BY_CITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_TASKS_BY_CITY_FAIL,
        error: error.response,
      });
    }
  };
  