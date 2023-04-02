import { combineReducers } from "redux";
import {
  ADD_AREA_FAIL,
  ADD_AREA_REQUEST,
  ADD_AREA_RESET,
  ADD_AREA_SUCCESS,
  ADD_REQUIRED_PRODUCT_TO_AREA_FAIL,
  ADD_REQUIRED_PRODUCT_TO_AREA_REQUEST,
  ADD_REQUIRED_PRODUCT_TO_AREA_RESET,
  ADD_REQUIRED_PRODUCT_TO_AREA_SUCCESS,
  ADD_REQURIRED_PERSON_TO_AREA_FAIL,
  ADD_REQURIRED_PERSON_TO_AREA_REQUEST,
  ADD_REQURIRED_PERSON_TO_AREA_RESET,
  ADD_REQURIRED_PERSON_TO_AREA_SUCCESS,
  DELETE_AREA_FAIL,
  DELETE_AREA_REQUEST,
  DELETE_AREA_RESET,
  DELETE_AREA_SUCCESS,
  GET_ALL_AREA_FAIL,
  GET_ALL_AREA_REQUEST,
  GET_ALL_AREA_SUCCESS,
  GET_AREAS_BY_PRODUCT_TITLE_FAIL,
  GET_AREAS_BY_PRODUCT_TITLE_REQUEST,
  GET_AREAS_BY_PRODUCT_TITLE_RESET,
  GET_AREAS_BY_PRODUCT_TITLE_SUCCESS,
  GET_REQURIRED_PEOPLE_FAIL,
  GET_REQURIRED_PEOPLE_REQUEST,
  GET_REQURIRED_PEOPLE_SUCCESS,
  GET_REQURIRED_PRODUCTS_FAIL,
  GET_REQURIRED_PRODUCTS_REQUEST,
  GET_REQURIRED_PRODUCTS_SUCCESS,
  REMOVE_REQURIRED_PERSON_TO_AREA_FAIL,
  REMOVE_REQURIRED_PERSON_TO_AREA_REQUEST,
  REMOVE_REQURIRED_PERSON_TO_AREA_RESET,
  REMOVE_REQURIRED_PERSON_TO_AREA_SUCCESS,
  REMOVE_REQURIRED_PRODUCT_FROM_FAIL,
  REMOVE_REQURIRED_PRODUCT_FROM_REQUEST,
  REMOVE_REQURIRED_PRODUCT_FROM_RESET,
  REMOVE_REQURIRED_PRODUCT_FROM_SUCCESS,
  UPDATE_AREA_FAIL,
  UPDATE_AREA_REQUEST,
  UPDATE_AREA_RESET,
  UPDATE_AREA_SUCCESS,
} from "../constants/AreaConstants";

const GET_ALL_AREA_INITIAL_STATE = {
  areas: [
    {
      _id: "",
      name: "",
      coordinates: null,
      requrired_products: [],
      requrired_people: [],
    },
  ],
};

export const getAllAreaReducer = (state = GET_ALL_AREA_INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_AREA_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        areas: action.payload,
      };

    case GET_ALL_AREA_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAreasByProductTitleReducer = (
  state = { areas: [] },
  action
) => {
  switch (action.type) {
    case GET_AREAS_BY_PRODUCT_TITLE_REQUEST:
      return { ...state, loading: true };

    case GET_AREAS_BY_PRODUCT_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        areas: action.payload,
      };

    case GET_AREAS_BY_PRODUCT_TITLE_FAIL:
      return { ...state, loading: false, error: action.payload };

    case GET_AREAS_BY_PRODUCT_TITLE_RESET:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

const ADD_AREA_INITIAL_STATE = {
  area: {
    _id: "",
    name: "",
    coordinates: {
      longitude: 0,
      latitude: 0,
    },
    requrired_products: [],
    requrired_people: [],
  },
  success: false,
};

export const addAreaReducer = (state = ADD_AREA_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_AREA_REQUEST:
      return { ...state, loading: true };

    case ADD_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        area: action.payload,
      };

    case ADD_AREA_FAIL:
      return { ...state, loading: false, error: action.payload };

    case ADD_AREA_RESET:
      return { ...ADD_AREA_INITIAL_STATE };
    default:
      return state;
  }
};

const ADD_PRODUCT_TO_AREA_INITIAL_STATE = {
  addedProduct: false,
  message: "",
};

export const addProductToAreaReducer = (
  state = ADD_PRODUCT_TO_AREA_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ADD_REQUIRED_PRODUCT_TO_AREA_REQUEST:
      return { ...state, loading: true };

    case ADD_REQUIRED_PRODUCT_TO_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        addedProduct: true,
        message: action.payload.message,
      };

    case ADD_REQUIRED_PRODUCT_TO_AREA_FAIL:
      return {
        ...state,
        loading: false,
        addedProduct: false,
        error: action.payload,
      };

    case ADD_REQUIRED_PRODUCT_TO_AREA_RESET:
      return { ...ADD_PRODUCT_TO_AREA_INITIAL_STATE };
    default:
      return state;
  }
};

export const getRequriredProductsReducer = (
  state = { requrired_products: [] },
  action
) => {
  switch (action.type) {
    case GET_REQURIRED_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case GET_REQURIRED_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        requrired_products: action.payload,
      };

    case GET_REQURIRED_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const removeProductFromAreaReducer = (
  state = {
    message: "",
    isRemoved: false,
  },
  action
) => {
  switch (action.type) {
    case REMOVE_REQURIRED_PRODUCT_FROM_REQUEST:
      return { ...state, loading: true, isRemoved: false };

    case REMOVE_REQURIRED_PRODUCT_FROM_SUCCESS:
      return {
        ...state,
        loading: false,
        isRemoved: true,
        message: action.payload.message,
      };

    case REMOVE_REQURIRED_PRODUCT_FROM_FAIL:
      return {
        ...state,
        loading: false,
        isRemoved: false,
        error: action.payload,
      };

    case REMOVE_REQURIRED_PRODUCT_FROM_RESET:
      return { ...state };
    default:
      return state;
  }
};

const DELETE_UPDATE_AREA_INITIAL_STATE = {
  message: "",
  isDeleted: false,
  isUpdated: false,
};

export const deleteUpdateAreaReducer = (
  state = DELETE_UPDATE_AREA_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DELETE_AREA_REQUEST:
    case UPDATE_AREA_REQUEST:
      return { ...state, loading: true };

    case DELETE_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
        message: action.payload.message,
      };

    case UPDATE_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        // updated: action.payload,
        isUpdated: true,
      };

    case DELETE_AREA_FAIL:
    case UPDATE_AREA_FAIL:
      return { ...state, isDeleted: false, error: action.payload };

    case DELETE_AREA_RESET:
      return {
        ...DELETE_UPDATE_AREA_INITIAL_STATE,
      };
    case UPDATE_AREA_RESET:
      return {
        ...DELETE_UPDATE_AREA_INITIAL_STATE,
      };
    default:
      return state;
  }
};

export const addPersonToAreaReducer = (
  state = {
    addedPerson: false,
    message: "",
  },
  action
) => {
  switch (action.type) {
    case ADD_REQURIRED_PERSON_TO_AREA_REQUEST:
      return { ...state, loading: true };

    case ADD_REQURIRED_PERSON_TO_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        addedPerson: true,
        message: action.payload.message,
      };

    case ADD_REQURIRED_PERSON_TO_AREA_FAIL:
      return {
        ...state,
        loading: false,
        addedPerson: false,
        error: action.payload,
      };

    case ADD_REQURIRED_PERSON_TO_AREA_RESET:
      return { ...state, addedPerson: false };
    default:
      return state;
  }
};

export const removePersonFromAreaReducer = (
  state = {
    message: "",
    isRemoved: false,
  },
  action
) => {
  switch (action.type) {
    case REMOVE_REQURIRED_PERSON_TO_AREA_REQUEST:
      return { ...state, loading: true, isRemoved: false };

    case REMOVE_REQURIRED_PERSON_TO_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        isRemoved: true,
        message: action.payload.message,
      };

    case REMOVE_REQURIRED_PERSON_TO_AREA_FAIL:
      return {
        ...state,
        loading: false,
        isRemoved: false,
        error: action.payload,
      };

    case REMOVE_REQURIRED_PERSON_TO_AREA_RESET:
      return { ...state, isRemoved: false };
    default:
      return state;
  }
};

export const getRequriredPeopleReducer = (
  state = { requrired_people: [] },
  action
) => {
  switch (action.type) {
    case GET_REQURIRED_PEOPLE_REQUEST:
      return { ...state, loading: true };

    case GET_REQURIRED_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        requrired_people: action.payload,
      };

    case GET_REQURIRED_PEOPLE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const areaReducer = combineReducers({
  getAllArea: getAllAreaReducer,
  addArea: addAreaReducer,
  addProductToArea: addProductToAreaReducer,
  deleteUpdateArea: deleteUpdateAreaReducer,
  addPersonToArea: addPersonToAreaReducer,
  getRequriredProducts: getRequriredProductsReducer,
  removeProductFromArea: removeProductFromAreaReducer,
  getRequriredPeople: getRequriredPeopleReducer,
  getAreasByProductTitle: getAreasByProductTitleReducer,
  removePersonFromArea: removePersonFromAreaReducer,
});

export default areaReducer;
