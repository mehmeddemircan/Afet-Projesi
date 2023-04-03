import axios from "axios";
import {
  ADD_CITY_FAIL,
  ADD_CITY_REQUEST,
  ADD_CITY_SUCCESS,
  GET_ALL_CITY_FAIL,
  GET_ALL_CITY_REQUEST,
  GET_ALL_CITY_SUCCESS,
} from "../constants/CityConstants";

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

export const AddCity = (countryId, city) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_CITY_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/countries/${countryId}/create-city`,
      city
    );

    dispatch({
      type: ADD_CITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_CITY_FAIL,
      error: error.response,
    });
  }
};

// export const DeleteCountry = (countryId) => async (dispatch) => {
//   try {
//     dispatch({
//       type: DELETE_COUNTRY_REQUEST,
//     });

//     const { data } = await axios.delete(
//       `http://localhost:5000/api/countries/${countryId}/delete`
//     );

//     dispatch({
//       type: DELETE_COUNTRY_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_COUNTRY_FAIL,
//       error: error.response,
//     });
//   }
// };
