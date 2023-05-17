import { combineReducers } from "redux";
import { ADD_CLOTHING_TO_BASKET_FAIL, ADD_CLOTHING_TO_BASKET_REQUEST, ADD_CLOTHING_TO_BASKET_RESET, ADD_CLOTHING_TO_BASKET_SUCCESS, ADD_MEAL_TO_BASKET_FAIL, ADD_MEAL_TO_BASKET_REQUEST, ADD_MEAL_TO_BASKET_RESET, ADD_MEAL_TO_BASKET_SUCCESS, ADD_SHELTER_TO_BASKET_FAIL, ADD_SHELTER_TO_BASKET_REQUEST, ADD_SHELTER_TO_BASKET_RESET, ADD_SHELTER_TO_BASKET_SUCCESS, FILTER_BY_ROLE_FAIL, FILTER_BY_ROLE_REQUEST, FILTER_BY_ROLE_RESET, FILTER_BY_ROLE_SUCCESS, GET_USER_CLOTHING_BASKET_FAIL, GET_USER_CLOTHING_BASKET_REQUEST, GET_USER_CLOTHING_BASKET_SUCCESS, GET_USER_MEAL_BASKET_FAIL, GET_USER_MEAL_BASKET_REQUEST, GET_USER_MEAL_BASKET_SUCCESS, GET_USER_SHELTER_BASKET_FAIL, GET_USER_SHELTER_BASKET_REQUEST, GET_USER_SHELTER_BASKET_SUCCESS, REMOVE_CLOTHING_FROM_BASKET_FAIL, REMOVE_CLOTHING_FROM_BASKET_REQUEST, REMOVE_CLOTHING_FROM_BASKET_RESET, REMOVE_CLOTHING_FROM_BASKET_SUCCESS, REMOVE_MEAL_FROM_BASKET_FAIL, REMOVE_MEAL_FROM_BASKET_REQUEST, REMOVE_MEAL_FROM_BASKET_RESET, REMOVE_MEAL_FROM_BASKET_SUCCESS, REMOVE_SHELTER_FROM_BASKET_FAIL, REMOVE_SHELTER_FROM_BASKET_REQUEST, REMOVE_SHELTER_FROM_BASKET_RESET, REMOVE_SHELTER_FROM_BASKET_SUCCESS } from "../constants/UserConstants";

export const getAllUserLocationsReducer = (
    state = {
      userLocations: [],
    },
    action
  ) => {
    switch (action.type) {
  
      case FILTER_BY_ROLE_REQUEST : 
        return { ...state, loading: true };
 
      case FILTER_BY_ROLE_SUCCESS : 
        return {
          ...state,
          loading: false,
          success: true,
          userLocations: action.payload,
        };
  
   
      case FILTER_BY_ROLE_FAIL : 
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
        case FILTER_BY_ROLE_RESET : 
        return {
          ...state,
          success : false ,
          
        }
      default:
        return state;
    }
  

  };


  export const getUserClothingBasketReducer = (
    state = {
      clothingBasket: [],
    },
    action
  ) => {
    switch (action.type) {
  
      case GET_USER_CLOTHING_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case GET_USER_CLOTHING_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          success: true,
          clothingBasket: action.payload,
        };
  
   
      case GET_USER_CLOTHING_BASKET_FAIL : 
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

  export const addClothingToBasketReducer = (
    state = {
      message : ""
    },
    action
  ) => {
    switch (action.type) {
  
      case ADD_CLOTHING_TO_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case ADD_CLOTHING_TO_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          isClothingAdded: true,
          message: action.payload.message,
        };
  
   
      case ADD_CLOTHING_TO_BASKET_FAIL : 
        return {
          ...state,
          loading: false,
          isClothingAdded: false,
          error: action.payload,
        };
      case ADD_CLOTHING_TO_BASKET_RESET : 
        return {
          ...state,
          isClothingAdded : false
        }
       
      default:
        return state;
    }
  

  };

  export const removeClothingFromBasketReducer = (
    state = {
      message : ""
    },
    action
  ) => {
    switch (action.type) {
  
      case REMOVE_CLOTHING_FROM_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case REMOVE_CLOTHING_FROM_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          isClothingRemoved: true,
          message: action.payload.message,
        };
  
   
      case REMOVE_CLOTHING_FROM_BASKET_FAIL : 
        return {
          ...state,
          loading: false,
          isClothingRemoved: false,
          error: action.payload,
        };
      case REMOVE_CLOTHING_FROM_BASKET_RESET : 
        return {
          ...state,
          isClothingRemoved : false
        }
       
      default:
        return state;
    }
  

  };


  export const getUserShelterBasketReducer = (
    state = {
      shelterBasket: [],
    },
    action
  ) => {
    switch (action.type) {
  
      case GET_USER_SHELTER_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case GET_USER_SHELTER_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          success: true,
          shelterBasket: action.payload,
        };
  
   
      case GET_USER_SHELTER_BASKET_FAIL : 
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

  export const addShelterToBasketReducer = (
    state = {
      message : ""
    },
    action
  ) => {
    switch (action.type) {
  
      case ADD_SHELTER_TO_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case ADD_SHELTER_TO_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          isShelterAdded: true,
          message: action.payload.message,
        };
  
   
      case ADD_SHELTER_TO_BASKET_FAIL : 
        return {
          ...state,
          loading: false,
          isShelterAdded: false,
          error: action.payload,
        };
      case ADD_SHELTER_TO_BASKET_RESET : 
        return {
          ...state,
          isShelterAdded : false
        }
       
      default:
        return state;
    }
  

  };
  export const removeShelterFromBasketReducer = (
    state = {
      message : ""
    },
    action
  ) => {
    switch (action.type) {
  
      case REMOVE_SHELTER_FROM_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case REMOVE_SHELTER_FROM_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          isShelterRemoved: true,
          message: action.payload.message,
        };
  
   
      case REMOVE_SHELTER_FROM_BASKET_FAIL : 
        return {
          ...state,
          loading: false,
          isShelterRemoved: false,
          error: action.payload,
        };
      case REMOVE_SHELTER_FROM_BASKET_RESET : 
        return {
          ...state,
          isShelterRemoved : false
        }
       
      default:
        return state;
    }
  

  };

  export const getUserMealBasketReducer = (
    state = {
      mealBasket: [],
    },
    action
  ) => {
    switch (action.type) {
  
      case GET_USER_MEAL_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case GET_USER_MEAL_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          success: true,
          mealBasket: action.payload,
        };
  
   
      case GET_USER_MEAL_BASKET_FAIL : 
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

  export const addMealToBasketReducer = (
    state = {
      message : ""
    },
    action
  ) => {
    switch (action.type) {
  
      case ADD_MEAL_TO_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case ADD_MEAL_TO_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          isMealAdded: true,
          message: action.payload.message,
        };
  
   
      case ADD_MEAL_TO_BASKET_FAIL : 
        return {
          ...state,
          loading: false,
          isMealAdded: false,
          error: action.payload,
        };
      case ADD_MEAL_TO_BASKET_RESET : 
        return {
          ...state,
          isMealAdded : false
        }
       
      default:
        return state;
    }
  

  };

  export const removeMealFromBasketReducer = (
    state = {
      message : ""
    },
    action
  ) => {
    switch (action.type) {
  
      case REMOVE_MEAL_FROM_BASKET_REQUEST : 
        return { ...state, loading: true };
 
      case REMOVE_MEAL_FROM_BASKET_SUCCESS : 
        return {
          ...state,
          loading: false,
          isMealRemoved: true,
          message: action.payload.message,
        };
  
   
      case REMOVE_MEAL_FROM_BASKET_FAIL : 
        return {
          ...state,
          loading: false,
          isMealRemoved: false,
          error: action.payload,
        };
      case REMOVE_MEAL_FROM_BASKET_RESET : 
        return {
          ...state,
          isMealRemoved : false
        }
       
      default:
        return state;
    }
  

  };


  const userReducer = combineReducers({
    getAllUserLocations : getAllUserLocationsReducer,
    getUserClothingBasket : getUserClothingBasketReducer,
    addClothingToBasket : addClothingToBasketReducer,
    removeClothingFromBasket : removeClothingFromBasketReducer,
    getUserShelterBasket : getUserShelterBasketReducer,
    addShelterToBasket : addShelterToBasketReducer,
    removeShelterFromBasket : removeShelterFromBasketReducer,
    getUserMealBasket : getUserMealBasketReducer,
    addMealToBasket : addMealToBasketReducer,
    removeMealFromBasket : removeMealFromBasketReducer
  })

  export default userReducer