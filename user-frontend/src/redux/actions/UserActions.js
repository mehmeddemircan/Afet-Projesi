import axios from "axios";
import { FILTER_BY_ROLE_FAIL, FILTER_BY_ROLE_REQUEST, FILTER_BY_ROLE_SUCCESS } from "../constants/UserConstants";

export const GetUsersByRole = (userRoles) => async (dispatch) => {
    try {
      dispatch({
        type: FILTER_BY_ROLE_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/users/filter-by-role?userRoles=${userRoles}`
      );
  
      dispatch({
        type: FILTER_BY_ROLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FILTER_BY_ROLE_FAIL,
        error: error.response,
      });
    }
  };
  
  