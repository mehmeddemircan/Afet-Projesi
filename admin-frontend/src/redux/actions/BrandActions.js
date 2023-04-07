import axios from "axios";
import {
  ADD_BRAND_FAIL,
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  DELETE_BRAND_FAIL,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  GET_ALL_BRAND_FAIL,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
} from "../constants/BrandConstants";
// getirme işlemi 
export const AllBrand = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_BRAND_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/group`);

    dispatch({
      type: GET_ALL_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_BRAND_FAIL,
      error: error.response,
    });
  }
};
// ekleme 
export const AddBrand = (brand) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_BRAND_REQUEST,
    });

    const { data } = await axios.post(
      `http://localhost:5000/api/create-brand`,
      brand
    );

    dispatch({
      type: ADD_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_BRAND_FAIL,
      error: error.response,
    });
  }
};
// silme id ye göre 
export const DeleteBrand = (brandId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_BRAND_REQUEST,
    });

    const { data } = await axios.delete(
      `https://afetapi.onrender.com/api/brands/${brandId}/delete`
    );

    dispatch({
      type: DELETE_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BRAND_FAIL,
      error: error.response,
    });
  }
};
// güncelleme  id ye göre 
export const UpdateBrand = (brandId) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_BRAND_REQUEST,
    });

    const { data } = await axios.put(
      `http://localhost:5000/api/brands/${brandId}/update`
    );

    dispatch({
      type: UPDATE_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BRAND_FAIL,
      error: error.response,
    });
  }
};

