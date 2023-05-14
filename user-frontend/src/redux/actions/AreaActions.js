import axios from "axios";
import { GET_ALL_AREA_FAIL, GET_ALL_AREA_REQUEST, GET_ALL_AREA_SUCCESS } from "../constants/AreaConstants";

export const AllArea = (selectedProducts,priorityOrders,selectedPeople) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_AREA_REQUEST,
      });
  
      const {data}  = await axios.get(`https://afetapi.onrender.com/api/filter-areas?filters=${selectedProducts}&priorityOrders=${priorityOrders}&people=${selectedPeople}`)
      
  
      dispatch({
        type: GET_ALL_AREA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_AREA_FAIL,
        error: error.response,
      });
    }
  };