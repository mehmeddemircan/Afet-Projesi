import {
  GET_USERS_LOCATIONS_FAIL,
  GET_USERS_LOCATIONS_REQUEST,
  GET_USERS_LOCATIONS_SUCCESS,
  SAVE_LOCATION_FAIL,
  SAVE_LOCATION_REQUEST,
  SAVE_LOCATION_RESET,
  SAVE_LOCATION_SUCCESS,
  UPDATE_LIVE_LOCATION_FAIL,
  UPDATE_LIVE_LOCATION_RESET,
  UPDATE_LIVE_LOCATION_SUCCESS,
} from "../constants/LocationConstants";

export const saveUserLocationReducer = (
  state = {
    message: "",
  },
  action
) => {
  switch (action.type) {
    case SAVE_LOCATION_REQUEST:
      return { ...state, loading: true };

    case SAVE_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case SAVE_LOCATION_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case SAVE_LOCATION_RESET:
      return { ...state, success: false, message: "" };
    default:
      return state;
  }
};

// export const getAllUserLocationsReducer = (
//   state = {
//     userLocations: "",
//   },
//   action
// ) => {
//   switch (action.type) {
//     case GET_USERS_LOCATIONS_REQUEST:
//       return { ...state, loading: true };

//     case GET_USERS_LOCATIONS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         success: true,
//         userLocations: action.payload,
//       };

//     case GET_USERS_LOCATIONS_FAIL:
//       return {
//         ...state,
//         loading: false,
//         success: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };
const UPDATE_USER_LOCATION_INITIAL_STATE ={
    success : false
}
export const updateUserLocationReducer = (
  state =  UPDATE_USER_LOCATION_INITIAL_STATE,

  
  action
) => {
  switch (action.type) {
    case UPDATE_LIVE_LOCATION_SUCCESS:
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
