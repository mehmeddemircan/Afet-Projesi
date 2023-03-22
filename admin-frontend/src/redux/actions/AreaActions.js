import axios from "axios";
import {
  ADD_AREA_FAIL,
  ADD_AREA_REQUEST,
  ADD_AREA_SUCCESS,
  ADD_REQUIRED_PRODUCT_TO_AREA_FAIL,
  ADD_REQUIRED_PRODUCT_TO_AREA_REQUEST,
  ADD_REQUIRED_PRODUCT_TO_AREA_SUCCESS,
  ADD_REQURIRED_PERSON_TO_AREA_FAIL,
  ADD_REQURIRED_PERSON_TO_AREA_REQUEST,
  ADD_REQURIRED_PERSON_TO_AREA_SUCCESS,
  DELETE_AREA_FAIL,
  DELETE_AREA_REQUEST,
  DELETE_AREA_SUCCESS,
  GET_ALL_AREA_FAIL,
  GET_ALL_AREA_REQUEST,
  GET_ALL_AREA_SUCCESS,
  GET_AREAS_BY_PRODUCT_TITLE_FAIL,
  GET_AREAS_BY_PRODUCT_TITLE_REQUEST,
  GET_AREAS_BY_PRODUCT_TITLE_SUCCESS,
  GET_REQURIRED_PEOPLE_FAIL,
  GET_REQURIRED_PEOPLE_REQUEST,
  GET_REQURIRED_PEOPLE_SUCCESS,
  GET_REQURIRED_PRODUCTS_FAIL,
  GET_REQURIRED_PRODUCTS_REQUEST,
  GET_REQURIRED_PRODUCTS_SUCCESS,
  REMOVE_REQURIRED_PERSON_TO_AREA_FAIL,
  REMOVE_REQURIRED_PERSON_TO_AREA_REQUEST,
  REMOVE_REQURIRED_PERSON_TO_AREA_SUCCESS,
  REMOVE_REQURIRED_PRODUCT_FROM_FAIL,
  REMOVE_REQURIRED_PRODUCT_FROM_REQUEST,
  REMOVE_REQURIRED_PRODUCT_FROM_SUCCESS,
} from "../constants/AreaConstants";

export const AllArea = (priorities) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_AREA_REQUEST,
    });

    const { data } = await axios.get(
      priorities !== []
        ? `https://afetapi.onrender.com/api/get-filter-areas?priorityOrders=${priorities}`
        : `https://afetapi.onrender.com/api/get-filter-areas?priorityOrders=`
    );

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

export const AllAreaByProductTitle = (filters) => async (dispatch) => {
  try {
    dispatch({
      type: GET_AREAS_BY_PRODUCT_TITLE_REQUEST,
    });

    const { data } = await axios.get(
      filters !== []
        ? `https://afetapi.onrender.com/api/get-areas-by-productTitle?filters=${filters}`
        : `https://afetapi.onrender.com/api/get-areas-by-productTitle?filters=`
    );

    dispatch({
      type: GET_AREAS_BY_PRODUCT_TITLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_AREAS_BY_PRODUCT_TITLE_FAIL,
      error: error.response,
    });
  }
};



export const AddArea = (area) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_AREA_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/create-area`,
      area
    );

    dispatch({
      type: ADD_AREA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_AREA_FAIL,
      error: error.response,
    });
  }
};

export const AddProductToArea = (id, product) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_REQUIRED_PRODUCT_TO_AREA_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/areas/${id}/add-product`,
      product
    );

    dispatch({
      type: ADD_REQUIRED_PRODUCT_TO_AREA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_REQUIRED_PRODUCT_TO_AREA_FAIL,
      error: error.response,
    });
  }
};

export const RemoveProductFromArea =
  (areaId, productId) => async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_REQURIRED_PRODUCT_FROM_REQUEST,
      });

      const { data } = await axios.delete(
        `https://afetapi.onrender.com/api/areas/${areaId}/products/${productId}/remove`
      );

      dispatch({
        type: REMOVE_REQURIRED_PRODUCT_FROM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_REQURIRED_PRODUCT_FROM_FAIL,
        error: error.response,
      });
    }
  };

export const GetRequriredProducts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_REQURIRED_PRODUCTS_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/areas/${id}/requriredProducts`
    );

    dispatch({
      type: GET_REQURIRED_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_REQURIRED_PRODUCTS_FAIL,
      error: error.response,
    });
  }
};

export const DeleteArea = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_AREA_REQUEST,
    });

    const { data } = await axios.delete(
      `https://afetapi.onrender.com/api/areas/${id}/delete`
    );

    dispatch({
      type: DELETE_AREA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_AREA_FAIL,
      error: error.response,
    });
  }
};

export const AddPersonToArea = (id, person) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_REQURIRED_PERSON_TO_AREA_REQUEST,
    });

    const { data } = await axios.post(
      `https://afetapi.onrender.com/api/areas/${id}/add-person`,
      person
    );

    dispatch({
      type: ADD_REQURIRED_PERSON_TO_AREA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_REQURIRED_PERSON_TO_AREA_FAIL,
      error: error.response,
    });
  }
};

export const RemovePersonFromArea = (areaId, personId) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_REQURIRED_PERSON_TO_AREA_REQUEST,
    });

    const { data } = await axios.delete(
      `https://afetapi.onrender.com/api/areas/${areaId}/people/${personId}/remove`
    );

    dispatch({
      type: REMOVE_REQURIRED_PERSON_TO_AREA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_REQURIRED_PERSON_TO_AREA_FAIL,
      error: error.response,
    });
  }
};

export const GetRequriredPeople = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_REQURIRED_PEOPLE_REQUEST,
    });

    const { data } = await axios.get(
      `https://afetapi.onrender.com/api/areas/${id}/requriredPeople`
    );

    dispatch({
      type: GET_REQURIRED_PEOPLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_REQURIRED_PEOPLE_FAIL,
      error: error.response,
    });
  }
};
