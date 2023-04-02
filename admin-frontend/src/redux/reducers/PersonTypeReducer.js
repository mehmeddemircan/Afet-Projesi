import {
  ADD_PERSONTYPE_FAIL,
  ADD_PERSONTYPE_REQUEST,
  ADD_PERSONTYPE_RESET,
  ADD_PERSONTYPE_SUCCESS,
  DELETE_PERSONTYPE_FAIL,
  DELETE_PERSONTYPE_REQUEST,
  DELETE_PERSONTYPE_RESET,
  DELETE_PERSONTYPE_SUCCESS,
  GET_ALL_PERSONTYPE_FAIL,
  GET_ALL_PERSONTYPE_REQUEST,
  GET_ALL_PERSONTYPE_SUCCESS,
  UPDATE_PERSONTYPE_FAIL,
  UPDATE_PERSONTYPE_REQUEST,
  UPDATE_PERSONTYPE_RESET,
  UPDATE_PERSONTYPE_SUCCESS,
} from "../constants/PersonTypeConstants";
import { combineReducers } from "redux";
const GET_ALL_PERSONTYPE_INITIAL_STATE = {
  personTypes: [
    {
      name: "",
    },
  ],
};
export const getAllPersonTypeReducer = (
  state = GET_ALL_PERSONTYPE_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GET_ALL_PERSONTYPE_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_PERSONTYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        personTypes: action.payload,
      };

    case GET_ALL_PERSONTYPE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const ADD_PERSON_TYPE_INITIAL_STATE = { personType: { name: "" } };

export const addPersonTypeReducer = (
  state = ADD_PERSON_TYPE_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ADD_PERSONTYPE_REQUEST:
      return { ...state, loading: true };

    case ADD_PERSONTYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        personType: action.payload,
      };

    case ADD_PERSONTYPE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case ADD_PERSONTYPE_RESET:
      return {
        ...ADD_PERSON_TYPE_INITIAL_STATE,
        success: false,
      };
    default:
      return state;
  }
};

const DELETE_UPDATE_PERSONTYPE_INITIAL_STATE = {
  updated: {
    name: "",
  },
  updateSuccess: false,
  deleted: false,
};

export const deleteUpdatePersonTypeReducer = (
  state = DELETE_UPDATE_PERSONTYPE_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DELETE_PERSONTYPE_REQUEST:
    case UPDATE_PERSONTYPE_REQUEST:
      return { ...state, loading: true };

    case DELETE_PERSONTYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
      };

    case UPDATE_PERSONTYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        updated: action.payload,
        updateSuccess: true,
      };

    case DELETE_PERSONTYPE_FAIL:
    case UPDATE_PERSONTYPE_FAIL:
      return { ...state, error: action.payload };

    case DELETE_PERSONTYPE_RESET:
      return {
        ...DELETE_UPDATE_PERSONTYPE_INITIAL_STATE,
      };
    case UPDATE_PERSONTYPE_RESET:
      return {
        ...DELETE_UPDATE_PERSONTYPE_INITIAL_STATE,
      };
    default:
      return state;
  }
};



const personTypeReducer = combineReducers({
  getAllPersonType: getAllPersonTypeReducer,
  addPersonType: addPersonTypeReducer,
  deleteUpdatePersonType: deleteUpdatePersonTypeReducer,
});

export default personTypeReducer