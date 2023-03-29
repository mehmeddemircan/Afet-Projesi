import { ADD_TASK_FAIL, ADD_TASK_REQUEST, ADD_TASK_RESET, ADD_TASK_SUCCESS, GET_ALL_TASK_FAIL, GET_ALL_TASK_REQUEST, GET_ALL_TASK_SUCCESS } from "../constants/TaskConstants";

export const getAllTaskReducer = (
    state = {
        tasks : []
    },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_TASK_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_TASK_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          tasks: action.payload,
        };
  
      case GET_ALL_TASK_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const addNewTaskReducer = (
    state = {
        task : {}
    },
    action
  ) => {
    switch (action.type) {
      case ADD_TASK_REQUEST:
        return { ...state, loading: true };
  
      case ADD_TASK_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          task: action.payload.task,
        };
  
      case ADD_TASK_FAIL:
        return { ...state, loading: false, error: action.payload };

      case ADD_TASK_RESET : 
        return {
          ...state ,
          success : false, 
  
        }
      default:
        return state;
    }
  };
  