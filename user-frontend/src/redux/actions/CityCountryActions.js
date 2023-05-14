import axios from "axios";
import { GET_ALL_CITY_FAIL, GET_ALL_CITY_REQUEST, GET_ALL_CITY_SUCCESS } from "../constants/CityCountryConstants";

export const AllCity = (countryId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_CITY_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/countries/${countryId}/cities`
      );
  
      dispatch({
        type: GET_ALL_CITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_CITY_FAIL,
        error: error.response,
      });
    }
  };