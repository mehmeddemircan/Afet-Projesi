import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import areaReducer from "./reducers/AreaReducer";
import personTypeReducer from "./reducers/PersonTypeReducer";
import categoryReducer from "./reducers/CategoryReducer";
import subCategoryReducer from "./reducers/SubCategoryReducer";
import userReducer, {
  getAllUserLocationsReducer,
  updateUserLocationReducer,
} from "./reducers/UserReducer";
import {
  authReducer,
  forgotResetPasswordReducer,
} from "./reducers/AuthReducer";
import productReducer from "./reducers/ProductReducer";
import formCategoryReducer from "./reducers/FormCategoryReducer";
import formReducer from "./reducers/FormReducer";
import taskReducer from "./reducers/TaskReducer";
import countryReducer from "./reducers/CountryReducer";
import cityReducer from "./reducers/CityReducer";
import brandReducer from "./reducers/BrandReducer";
import clothesReducer from "./reducers/ClothesReducer";
import mealProductReducer from "./reducers/MealReducer";
import clothingNeedFormReducer from "./reducers/ClothingNeedFormReducer";
import shelterNeedFormReducer from "./reducers/ShelterNeedFormReducer";
import mealNeedFormReducer from "./reducers/MealNeedFormReducer";
import shelterReducer from "./reducers/ShelterReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  area: areaReducer,
  product: productReducer,
  category: categoryReducer,
  subcategory: subCategoryReducer,
  personType: personTypeReducer,
  task: taskReducer,
  user: userReducer,
  formCategory: formCategoryReducer,
  form: formReducer,
  country : countryReducer,
  city : cityReducer ,
  brand : brandReducer ,
  clothes : clothesReducer , 
  mealProduct : mealProductReducer ,
  shelter : shelterReducer , 
  clothingNeedForm : clothingNeedFormReducer ,  
  shelterNeedForm : shelterNeedFormReducer,
  mealNeedForm : mealNeedFormReducer,
  forgotResetPassword: forgotResetPasswordReducer,
  getAllUserLocations: getAllUserLocationsReducer,
  updateUserLocation: updateUserLocationReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
