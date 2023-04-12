import axios from "axios";
import { CREATE_SHELTER_NEED_FORM_FAIL, CREATE_SHELTER_NEED_FORM_REQUEST, CREATE_SHELTER_NEED_FORM_SUCCESS, DELETE_SHELTER_FORM_FAIL, DELETE_SHELTER_FORM_REQUEST, DELETE_SHELTER_FORM_SUCCESS, GET_ALL_SHELTER_FORM_FAIL, GET_ALL_SHELTER_FORM_REQUEST, GET_ALL_SHELTER_FORM_SUCCESS, UPDATE_SHELTER_FORM_FAIL, UPDATE_SHELTER_FORM_REQUEST, UPDATE_SHELTER_FORM_SUCCESS } from "../constants/ShelterNeedFormConstants";

export const AllShelterForm = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_SHELTER_FORM_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://afetapi.onrender.com/api/shelterNeedForms`
      );
  
      dispatch({
        type: GET_ALL_SHELTER_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SHELTER_FORM_FAIL,
        error: error.response,
      });
    }
  };
  
  export const SendShelterForm = (shelterForm) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_SHELTER_NEED_FORM_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://afetapi.onrender.com/api/create-shelterNeedForm`,
        shelterForm
      );
  
      dispatch({
        type: CREATE_SHELTER_NEED_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_SHELTER_NEED_FORM_FAIL,
        error: error.response,
      });
    }
  };
  
  export const DeleteShelterForm = (shelterFormId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_SHELTER_FORM_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/shelterNeedForms/${shelterFormId}/delete`
      );
  
      dispatch({
        type: DELETE_SHELTER_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SHELTER_FORM_FAIL,
        error: error.response,
      });
    }
  };

  export const ApproveShelterForm = (shelterFormId) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_SHELTER_FORM_REQUEST,
      });
  
      const { data } = await axios.put(
        `https://afetapi.onrender.com/api/shelterNeedForms/${shelterFormId}/approve`
      );
  
      dispatch({
        type: UPDATE_SHELTER_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SHELTER_FORM_FAIL,
        error: error.response,
      });
    }
  };
  