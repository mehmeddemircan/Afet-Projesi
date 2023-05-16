import {
  GET_TASKS_BY_CITY_FAIL,
  GET_TASKS_BY_CITY_REQUEST,
  GET_TASKS_BY_CITY_SUCCESS,
  GET_USER_TASKS_FAIL,
  GET_USER_TASKS_REQUEST,
  GET_USER_TASKS_SUCCESS,
} from "../constants/TaskConstants";

import { combineReducers } from "redux";

export const getUserTasksReducer = (state = { userTasks: [] }, action) => {
  switch (action.type) {
    case GET_USER_TASKS_REQUEST:
      return { ...state, loading: true };

    case GET_USER_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,

        userTasks: action.payload,
      };

    case GET_USER_TASKS_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};



export const getTasksByCityReducer = (
  state = {
      tasks : []
  },
  action
) => {
  switch (action.type) {
    case GET_TASKS_BY_CITY_REQUEST:
      return { ...state, loading: true };

    case GET_TASKS_BY_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        tasks: action.payload,
      };

    case GET_TASKS_BY_CITY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


const taskReducer = combineReducers({
    getUserTasks : getUserTasksReducer,
    getTasksByCity : getTasksByCityReducer
})

export default taskReducer