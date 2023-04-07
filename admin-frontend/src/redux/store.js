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
