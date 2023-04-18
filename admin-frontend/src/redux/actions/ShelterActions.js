import axios from "axios";
import { ADD_SHELTER_FAIL, ADD_SHELTER_REQUEST, ADD_SHELTER_SUCCESS, DELETE_SHELTER_FAIL, DELETE_SHELTER_REQUEST, DELETE_SHELTER_SUCCESS, GET_ALL_SHELTER_BY_BRAND_FAIL, GET_ALL_SHELTER_BY_BRAND_REQUEST, GET_ALL_SHELTER_BY_BRAND_SUCCESS, UPDATE_SHELTER_FAIL, UPDATE_SHELTER_REQUEST, UPDATE_SHELTER_SUCCESS } from "../constants/ShelterConstants";


export const AllShelterByBrand = (brandId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_SHELTER_BY_BRAND_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/brands/${brandId}/shelters`
      );
  
      dispatch({
        type: GET_ALL_SHELTER_BY_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SHELTER_BY_BRAND_FAIL,
        error: error.response,
      });
    }
  };
  
  export const AddShelter = (shelter) => async (dispatch) => {
      try {
        dispatch({
          type: ADD_SHELTER_REQUEST,
        });
  
        const { data } = await axios.post(
          `http://localhost:5000/api/create-shelterProduct`,
          shelter
        );
  
        dispatch({
          type: ADD_SHELTER_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ADD_SHELTER_FAIL,
          error: error.response,
        });
      }
    };

export const DeleteShelter = (shelterId) => async (dispatch) => {
        try {
          dispatch({
            type: DELETE_SHELTER_REQUEST,
          });
    
          const { data } = await axios.delete(
            `http://localhost:5000/api/shelters/${shelterId}/delete`
          );
    
          dispatch({
            type: DELETE_SHELTER_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: DELETE_SHELTER_FAIL,
            error: error.response,
          });
        }
      };


export const UpdateShelter = (shelterId,shelter) => async (dispatch) => {
        try {
          dispatch({
            type: UPDATE_SHELTER_REQUEST,
          });
    
          const { data } = await axios.put(
            `http://localhost:5000/api/shelters/${shelterId}/update`,shelter
          );
    
          dispatch({
            type: UPDATE_SHELTER_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: UPDATE_SHELTER_FAIL,
            error: error.response,
          });
        }
      };