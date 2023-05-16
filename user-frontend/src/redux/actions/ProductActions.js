import axios from "axios";
import { GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCCESS } from "../constants/ProductConstants";

export const AllProduct = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PRODUCT_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/products`
      );
  
      dispatch({
        type: GET_ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCT_FAIL,
        error: error.response,
      });
    }
  };
