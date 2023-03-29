import axios from "axios";
import { ADD_TASK_FAIL, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, GET_ALL_TASK_FAIL, GET_ALL_TASK_REQUEST, GET_ALL_TASK_SUCCESS } from "../constants/TaskConstants";





  export const GetAllTask =  () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_TASK_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/tasks`
      );
  
      dispatch({
        type: GET_ALL_TASK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_TASK_FAIL,
        error: error.response,
      });
    }
  };

  export const AddNewTask =  (task) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_TASK_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-task`,task
      );
  
      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_TASK_FAIL,
        error: error.response,
      });
    }
  };