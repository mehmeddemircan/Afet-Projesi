import axios from "axios";
import { ADD_CLOTHING_FORM_FAIL, ADD_CLOTHING_FORM_REQUEST, ADD_CLOTHING_FORM_SUCCESS, GET_ALL_CLOTHING_FORM_FAIL, GET_ALL_CLOTHING_FORM_REQUEST, GET_ALL_CLOTHING_FORM_SUCCESS } from "../constants/ClothingNeedFormConstants";


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