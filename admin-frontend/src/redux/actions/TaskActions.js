import axios from "axios";
import {
  ADD_TASK_FAIL,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  GET_ALL_TASK_FAIL,
  GET_ALL_TASK_REQUEST,
  GET_ALL_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "../constants/TaskConstants";

export const GetAllTask = (text, dueDate) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_TASK_REQUEST,
    });

    const { data } = await axios.get(
      text === "" && dueDate === ""
        ? `https://afetapi.onrender.com/api/tasks`
        : `https://afetapi.onrender.com/api/tasks?text=${text}&dueDate=${dueDate}`
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

export const AddNewTask = (task) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TASK_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/create-task`,
      task
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

export const EditTask = (taskId, task) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_TASK_REQUEST,
    });

    const { data } = await axios.put(
      `https://afetapi.onrender.com/api/tasks/${taskId}/update`,
      task
    );

    dispatch({
      type: UPDATE_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TASK_FAIL,
      error: error.response,
    });
  }
};
