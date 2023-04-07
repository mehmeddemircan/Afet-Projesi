import axios from "axios";
import { ADD_CLOTHES_FAIL, ADD_CLOTHES_REQUEST, ADD_CLOTHES_SUCCESS } from "../constants/ClothesConstants";

export const AddClothes = (clothes) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_CLOTHES_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-clothesProduct`,clothes
      );
  
      dispatch({
        type: ADD_CLOTHES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_CLOTHES_FAIL,
        error: error.response,
      });
    }
  };
