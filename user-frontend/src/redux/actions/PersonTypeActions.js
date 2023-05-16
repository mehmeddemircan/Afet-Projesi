import axios from "axios";
import { GET_ALL_PERSONTYPE_FAIL, GET_ALL_PERSONTYPE_REQUEST, GET_ALL_PERSONTYPE_SUCCESS } from "../constants/PersonTypeConstants";



export const AllPersonType = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PERSONTYPE_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/personTypes`
      );
  
      dispatch({
        type: GET_ALL_PERSONTYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PERSONTYPE_FAIL,
        error: error.response,
      });
    }
  };
