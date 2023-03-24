import axios from "axios";
import { GET_FORMS_BY_CATEGORYID_FAIL, GET_FORMS_BY_CATEGORYID_REQUEST, GET_FORMS_BY_CATEGORYID_SUCCESS, SEARCH_FORMS_FAIL, SEARCH_FORMS_REQUEST, SEARCH_FORMS_SUCCESS } from "../constants/FormConstants";

export const AllFormByCategoryId = (categoryId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_FORMS_BY_CATEGORYID_REQUEST,
      });
  
      const { data } = await axios.get(
            `https://afetapi.onrender.com/api/getForms/${categoryId}`
      );
  
      dispatch({
        type: GET_FORMS_BY_CATEGORYID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_FORMS_BY_CATEGORYID_FAIL,
        error: error.response,
      });
    }
  };

  export const SearchForms = (categoryId,name,urgency) => async (dispatch) => {
    try {
      dispatch({
        type: SEARCH_FORMS_REQUEST,
      });
  
      const { data } = await axios.get(
            `https://afetapi.onrender.com/api/getForms/${categoryId}/search?name=${name}&urgency=${urgency}`
      );
  
      dispatch({
        type: SEARCH_FORMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_FORMS_FAIL,
        error: error.response,
      });
    }
  };

