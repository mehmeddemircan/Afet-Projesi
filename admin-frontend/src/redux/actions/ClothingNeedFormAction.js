import axios from "axios";
import {
  ADD_CLOTHING_FORM_FAIL,
  ADD_CLOTHING_FORM_REQUEST,
  ADD_CLOTHING_FORM_SUCCESS,
  DELETE_CLOTHING_FORM_FAIL,
  DELETE_CLOTHING_FORM_REQUEST,
  DELETE_CLOTHING_FORM_SUCCESS,
  GET_ALL_CLOTHING_FORM_FAIL,
  GET_ALL_CLOTHING_FORM_REQUEST,
  GET_ALL_CLOTHING_FORM_SUCCESS,
  UPDATE_CLOTHING_FORM_FAIL,
  UPDATE_CLOTHING_FORM_REQUEST,
  UPDATE_CLOTHING_FORM_SUCCESS,
} from "../constants/ClothingNeedFormConstants";

export const AllClothingForm = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_CLOTHING_FORM_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/clothingNeedForms`
    );

    dispatch({
      type: GET_ALL_CLOTHING_FORM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CLOTHING_FORM_FAIL,
      error: error.response,
    });
  }
};

export const SendClothingForm = (clothingForm) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_CLOTHING_FORM_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/create-clothingNeedForm`,
      clothingForm
    );

    dispatch({
      type: ADD_CLOTHING_FORM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_CLOTHING_FORM_FAIL,
      error: error.response,
    });
  }
};

export const DeleteClothingForm = (clothingFormId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CLOTHING_FORM_REQUEST,
    });

    const { data } = await axios.delete(
      `https://afetapi.onrender.com/api/clothingNeedForms/${clothingFormId}/delete`
    );

    dispatch({
      type: DELETE_CLOTHING_FORM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CLOTHING_FORM_FAIL,
      error: error.response,
    });
  }
};

export const ApproveClothingForm = (clothingFormId) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CLOTHING_FORM_REQUEST,
    });

    const { data } = await axios.put(
      `https://afetapi.onrender.com/api/clothingNeedForms/${clothingFormId}/approve`
    );

    dispatch({
      type: UPDATE_CLOTHING_FORM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CLOTHING_FORM_FAIL,
      error: error.response,
    });
  }
};
