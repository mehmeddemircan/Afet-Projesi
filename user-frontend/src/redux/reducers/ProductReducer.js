import { GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCCESS } from "../constants/ProductConstants";
import { combineReducers } from "redux";


export const getAllProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case GET_ALL_PRODUCT_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          products: action.payload.products,
        };
  
      case GET_ALL_PRODUCT_FAIL:
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

  const productReducer = combineReducers({
    getAllProduct : getAllProductReducer
  })

  export default productReducer