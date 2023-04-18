import axios from "axios";
import {
  ADD_CLOTHES_FAIL,
  ADD_CLOTHES_REQUEST,
  ADD_CLOTHES_SUCCESS,
  DELETE_CLOTHES_FAIL,
  DELETE_CLOTHES_REQUEST,
  DELETE_CLOTHES_SUCCESS,
  GET_ALL_CLOTHES_BY_BRAND_FAIL,
  GET_ALL_CLOTHES_BY_BRAND_REQUEST,
  GET_ALL_CLOTHES_BY_BRAND_SUCCESS,
  UPDATE_CLOTHES_FAIL,
  UPDATE_CLOTHES_REQUEST,
  UPDATE_CLOTHES_SUCCESS,
} from "../constants/ClothesConstants";

export const AllClothesByBrand = (brandId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_CLOTHES_BY_BRAND_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/brands/${brandId}/clothes`
    );

    dispatch({
      type: GET_ALL_CLOTHES_BY_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CLOTHES_BY_BRAND_FAIL,
      error: error.response,
    });
  }
};

export const AddClothes = (clothes) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_CLOTHES_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/create-clothesProduct`,
      clothes
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

export const DeleteClothes = (clotheId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CLOTHES_REQUEST,
    });

    const { data } = await axios.delete(
      `https://afetapi.onrender.com/api/clothesProduct/${clotheId}/delete`
    );

    dispatch({
      type: DELETE_CLOTHES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CLOTHES_FAIL,
      error: error.response,
    });
  }
};

export const UpdateClotheProduct = (clotheId,clothe) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CLOTHES_REQUEST,
    });

    const { data } = await axios.put(
      `http://localhost:5000/api/clothesProduct/${clotheId}/update`,clothe
    );

    dispatch({
      type: UPDATE_CLOTHES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CLOTHES_FAIL,
      error: error.response,
    });
  }
};
