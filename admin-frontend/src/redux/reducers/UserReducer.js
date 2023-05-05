import { GET_USERS_LOCATIONS_FAIL, GET_USERS_LOCATIONS_REQUEST, GET_USERS_LOCATIONS_SUCCESS, UPDATE_LIVE_LOCATION_FAIL, UPDATE_LIVE_LOCATION_RESET, UPDATE_LIVE_LOCATION_SUCCESS } from "../constants/LocationConstants";
import { ADD_TASK_TO_USER_FAIL, ADD_TASK_TO_USER_REQUEST, ADD_TASK_TO_USER_RESET, ADD_TASK_TO_USER_SUCCESS, FILTER_BY_ROLE_FAIL, FILTER_BY_ROLE_REQUEST, FILTER_BY_ROLE_RESET, FILTER_BY_ROLE_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_NOT_ADDED_TASK_FAIL, GET_NOT_ADDED_TASK_REQUEST, GET_NOT_ADDED_TASK_SUCCESS, GET_USER_TASKS_FAIL, GET_USER_TASKS_REQUEST, GET_USER_TASKS_SUCCESS, REMOVE_TASK_TO_USER_FAIL, REMOVE_TASK_TO_USER_REQUEST, REMOVE_TASK_TO_USER_RESET, REMOVE_TASK_TO_USER_SUCCESS, SEARCH_USERS_BY_NAME_FAIL, SEARCH_USERS_BY_NAME_REQUEST, SEARCH_USERS_BY_NAME_RESET, SEARCH_USERS_BY_NAME_SUCCESS, UPDATE_USER_ROLE_FAIL, UPDATE_USER_ROLE_REQUEST, UPDATE_USER_ROLE_RESET, UPDATE_USER_ROLE_SUCCESS } from "../constants/UserConstants";

import { combineReducers } from "redux";

const GET_ALL_USER_INITIAL_STATE = {
    users: [
      {
        _id : "",
        name: "",
        email : "",
        role : "",
      },
    ],
    totalLength : 0 
  };
  export const getAllUserReducer = (
    state = GET_ALL_USER_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_ALL_USER_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          totalLength  :action.payload.totalLength,
          users: action.payload.users,
        };
  
      case GET_ALL_USER_FAIL:
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
  


  export const searchUsersReducer = (
    state = {users : []},
    action
  ) => {
    switch (action.type) {
      case SEARCH_USERS_BY_NAME_REQUEST:
        return { ...state, loading: true };
  
      case SEARCH_USERS_BY_NAME_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          
          users: action.payload.users,
        };
  
      case SEARCH_USERS_BY_NAME_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
        case SEARCH_USERS_BY_NAME_RESET : 
        return {
            ...state ,
            success: false 
        }

      default:
        return state;
    }
  };
  

  export const updateUserRoleReducer = (
    state = { 
        updatedUser : {

        } , 
        message : '' },
    action
  ) => {
    switch (action.type) {
      case UPDATE_USER_ROLE_REQUEST:
        return { ...state, loading: true };
  
      case UPDATE_USER_ROLE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          updatedUser : action.payload.updatedUser,
          message: action.payload.message,
        };
  
      case UPDATE_USER_ROLE_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
        case UPDATE_USER_ROLE_RESET:
        return {
          ...state,
          success : false
        };
      default:
        return state;
    }
  };
  

  export const getAllUserLocationsReducer = (
      state = {
        userLocations: [],
      },
      action
    ) => {
      switch (action.type) {
        case GET_USERS_LOCATIONS_REQUEST:
        case FILTER_BY_ROLE_REQUEST : 
          return { ...state, loading: true };
    
        case GET_USERS_LOCATIONS_SUCCESS:
        case FILTER_BY_ROLE_SUCCESS : 
          return {
            ...state,
            loading: false,
            success: true,
            userLocations: action.payload,
          };
    
        case GET_USERS_LOCATIONS_FAIL:
        case FILTER_BY_ROLE_FAIL : 
          return {
            ...state,
            loading: false,
            success: false,
            error: action.payload,
          };
          case FILTER_BY_ROLE_RESET : 
          return {
            ...state,
            success : false ,
            
          }
        default:
          return state;
      }
    

    };
const UPDATE_USER_LOCATION_INITIAL_STATE ={
      success : false
  }


  export const updateUserLocationReducer = (
    state =  UPDATE_USER_LOCATION_INITIAL_STATE,
  
    
    action
  ) => {
    switch (action.type) {
      case UPDATE_LIVE_LOCATION_SUCCESS : 
        return {
          ...state,
          loading: false,
          success: true,
          userLocations: action.payload,
        };
  
      case UPDATE_LIVE_LOCATION_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
  
      case UPDATE_LIVE_LOCATION_RESET:
        return {
          ...UPDATE_USER_LOCATION_INITIAL_STATE,
          
        };
      default:
        return state;
    }
  };


  export const getUserTasksReducer = (
    state = {userTasks : []},
    action
  ) => {
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

  export const addRemoveTaskToUserReducer = (
    state = {
      
      message : "",
      isAdded : false ,
      isRemoved : false
    },
    action
  ) => {
    switch (action.type) {
      case ADD_TASK_TO_USER_REQUEST:
      case REMOVE_TASK_TO_USER_REQUEST : 
        return { ...state, loading: true };
  
      case ADD_TASK_TO_USER_SUCCESS:
      
        return {
          ...state,
          loading: false,
          isAdded: true,
          message : action.payload.message
          
        };
        case REMOVE_TASK_TO_USER_SUCCESS:
      
        return {
          ...state,
          loading: false,
          isRemoved: true,
          message : action.payload.message
          
        };
        
      case ADD_TASK_TO_USER_FAIL:
      case REMOVE_TASK_TO_USER_FAIL:
        return {
          ...state,
          loading: false,
          isAdded: false,
          error: action.payload,
        };
      case ADD_TASK_TO_USER_RESET :  
          return {
            ...state,
            isAdded : false ,
            message : ""
          }
        case REMOVE_TASK_TO_USER_RESET : 
            return {
              ...state ,
              isRemoved : false,
              message : ""
            }
      default:
        return state;
    }
  };
  

  export const getNotAddedTasksReducer = (
    state = {
        tasks : []
    },
    action
  ) => {
    switch (action.type) {
      case GET_NOT_ADDED_TASK_REQUEST:
        return { ...state, loading: true };
  
      case GET_NOT_ADDED_TASK_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          tasks: action.payload.tasks,
        };
  
      case GET_NOT_ADDED_TASK_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  const userReducer = combineReducers({
    getAllUser: getAllUserReducer,
    searchUsers: searchUsersReducer,
    updateUserRole: updateUserRoleReducer,
  
    addRemoveTaskToUser: addRemoveTaskToUserReducer,
    getNotAddedTasks: getNotAddedTasksReducer,
    getUserTasks: getUserTasksReducer,

   
    });
    
    export default userReducer