import { combineReducers } from "redux";
import { ADD_CLOTHES_FAIL, ADD_CLOTHES_REQUEST, ADD_CLOTHES_RESET, ADD_CLOTHES_SUCCESS } from "../constants/ClothesConstants";


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

  const clothesReducer = combineReducers({
    addClothes : addClothesReducer
  })

  export default clothesReducer