import axios from "axios";
import { ADD_PERSONTYPE_FAIL, ADD_PERSONTYPE_REQUEST, ADD_PERSONTYPE_SUCCESS, DELETE_PERSONTYPE_FAIL, DELETE_PERSONTYPE_REQUEST, DELETE_PERSONTYPE_SUCCESS, GET_ALL_PERSONTYPE_FAIL, GET_ALL_PERSONTYPE_REQUEST, GET_ALL_PERSONTYPE_SUCCESS, UPDATE_PERSONTYPE_FAIL, UPDATE_PERSONTYPE_REQUEST, UPDATE_PERSONTYPE_SUCCESS } from "../constants/PersonTypeConstants";



export const AllPersonType = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PERSONTYPE_REQUEST,
      });
  
      const { data } = await axios.get(
        `${process.env.SERVER_API_URL}/api/personTypes`
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


  export const AddPersonType = (personType) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_PERSONTYPE_REQUEST,
      });
  
      const { data } = await axios.post(
        `${process.env.SERVER_API_URL}/api/create-persontype`,personType
      );
  
      dispatch({
        type: ADD_PERSONTYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PERSONTYPE_FAIL,
        error: error.response,
      });
    }
  };


  export const DeletePersonType = (id) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_PERSONTYPE_REQUEST,
      });
  
      const { data } = await axios.delete(
        `${process.env.SERVER_API_URL}/api/personTypes/${id}/delete`
      );
  
      dispatch({
        type: DELETE_PERSONTYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PERSONTYPE_FAIL,
        error: error.response,
      });
    }
  };

  
  export const UpdatePersonType = (id,personType) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_PERSONTYPE_REQUEST,
      });
  
      const { data } = await axios.put(
        `${process.env.SERVER_API_URL}/api/personTypes/${id}/update`,personType
      );
  
      dispatch({
        type: UPDATE_PERSONTYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PERSONTYPE_FAIL,
        error: error.response,
      });
    }
  };



  
