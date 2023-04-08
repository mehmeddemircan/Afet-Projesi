import { combineReducers } from "redux";
import { ADD_CLOTHES_FAIL, ADD_CLOTHES_REQUEST, ADD_CLOTHES_RESET, ADD_CLOTHES_SUCCESS, DELETE_CLOTHES_FAIL, DELETE_CLOTHES_REQUEST, DELETE_CLOTHES_RESET, DELETE_CLOTHES_SUCCESS, UPDATE_CLOTHES_FAIL, UPDATE_CLOTHES_REQUEST, UPDATE_CLOTHES_RESET, UPDATE_CLOTHES_SUCCESS } from "../constants/ClothesConstants";


export const addClothesReducer  = (
    state = {  clothe : {}, message : ""},
    action
  ) => {
    switch (action.type) {
      case ADD_CLOTHES_REQUEST:
        return { ...state, loading: true };
  
      case ADD_CLOTHES_SUCCESS:
        return {
          ...state,
          loading: false,
          isAdded: true,
          clothe : action.payload , 
          message : "Basariyla eklendi"
        };
  
      case ADD_CLOTHES_FAIL:
        return {
          ...state,
          loading: false,
          isAdded: false,
          error: action.payload,
        };
  
      case ADD_CLOTHES_RESET:
        return {
          ...state,
          isAdded: false,
        };
      default:
        return state;
    }
  };

  export const deleteUpdateClothesReducer = (
    state = {
  
      message : null
    },
    action
  ) => {
    switch (action.type) {
      case DELETE_CLOTHES_REQUEST:
      case UPDATE_CLOTHES_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_CLOTHES_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload.message
        };
  
      case UPDATE_CLOTHES_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message : action.payload.message 
        
        };
  
      case DELETE_CLOTHES_FAIL:
      case UPDATE_CLOTHES_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_CLOTHES_RESET:
        return {
          ...state, isDeleted : false,
        };
      case UPDATE_CLOTHES_RESET:
        return {
          ...state, isUpdated : false,
        };
      default:
        return state;
    }
  };



  const clothesReducer = combineReducers({
    addClothes : addClothesReducer,
    deleteUpdateClothes : deleteUpdateClothesReducer
  })

  export default clothesReducer