import { GET_USER_TASKS_FAIL, GET_USER_TASKS_REQUEST, GET_USER_TASKS_SUCCESS } from "../constants/TaskConstants";
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