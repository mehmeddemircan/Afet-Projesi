import axios from "axios";
import {
  ADD_COUNTRY_FAIL,
  ADD_COUNTRY_REQUEST,
  ADD_COUNTRY_SUCCESS,
  DELETE_COUNTRY_FAIL,
  DELETE_COUNTRY_REQUEST,
  DELETE_COUNTRY_SUCCESS,
  GET_ALL_COUNTRY_FAIL,
  GET_ALL_COUNTRY_REQUEST,
  GET_ALL_COUNTRY_SUCCESS,
} from "../constants/CountryConstants";

export const AllCountry = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_COUNTRY_REQUEST,
    });

    const { data } = await axios.get(`https://afetapi.onrender.com/api/countries`);

    dispatch({
      type: GET_ALL_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_COUNTRY_FAIL,
      error: error.response,
    });
  }
};

export const AddCountry = (country) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COUNTRY_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/create-country`,
      country
    );

    dispatch({
      type: ADD_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_COUNTRY_FAIL,
      error: error.response,
    });
  }
};

export const DeleteCountry = (countryId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_COUNTRY_REQUEST,
    });

    const { data } = await axios.delete(
      `https://afetapi.onrender.com/api/countries/${countryId}/delete`
    );

    dispatch({
      type: DELETE_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COUNTRY_FAIL,
      error: error.response,
    });
  }
};
