import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  addAreaReducer,
  addPersonToAreaReducer,
  addProductToAreaReducer,
  deleteUpdateAreaReducer,
  getAllAreaReducer,
  getAreasByProductTitleReducer,
  getRequriredPeopleReducer,
  getRequriredProductsReducer,
  removePersonFromAreaReducer,
  removeProductFromAreaReducer,
} from "./reducers/AreaReducer";
import {
  addPersonTypeReducer,
  deleteUpdatePersonTypeReducer,
  getAllPersonTypeReducer,
} from "./reducers/PersonTypeReducer";
import {
  addCategoryReducer,
  deleteUpdateCategoryReducer,
  getAllCategoryReducer,
  getCategoriesReducer,
} from "./reducers/CategoryReducer";
import {
  addSubCategoryReducer,
  deleteUpdateSubCategoryReducer,
  getAllSubCategoryReducer,
} from "./reducers/SubCategoryReducer";
import {
  addRemoveTaskToUserReducer,
  addTaskToUserReducer,
  getAllUserLocationsReducer,
  getAllUserReducer,
  getNotAddedTasksReducer,
  getUserTasksReducer,
  searchUsersReducer,
  updateUserLocationReducer,
  updateUserRoleReducer,
} from "./reducers/UserReducer";
import {
  authReducer,
  forgotResetPasswordReducer,
} from "./reducers/AuthReducer";
import {
  addProductReducer,
  deleteUpdateProductReducer,
  getAllProductReducer,
  getSingleProductReducer,
} from "./reducers/ProductReducer";
import {
  getAllFormCategoryReducer,
  getSingleFormCategoryReducer,
} from "./reducers/FormCategoryReducer";
import {
  deleteUpdateGetHelpFormReducer,
  getApprovedFormsByCategoryIdReducer,
  getFormsByCategoryIdReducer,
} from "./reducers/FormReducer";
import { addNewTaskReducer, getAllTaskReducer, updateTaskReducer } from "./reducers/TaskReducer";

const rootReducer = combineReducers({
  getAllArea: getAllAreaReducer,
  getAllPersonType: getAllPersonTypeReducer,
  addPersonType: addPersonTypeReducer,
  deleteUpdatePersonType: deleteUpdatePersonTypeReducer,
  addArea: addAreaReducer,
  getAllCategory: getAllCategoryReducer,
  addCategory: addCategoryReducer,
  deleteUpdateCategory: deleteUpdateCategoryReducer,
  getAllSubCategory: getAllSubCategoryReducer,
  addSubCategory: addSubCategoryReducer,
  deleteUpdateSubCategory: deleteUpdateSubCategoryReducer,
  getAllUser: getAllUserReducer,
  searchUsers: searchUsersReducer,
  updateUserRole: updateUserRoleReducer,
  auth: authReducer,
  forgotResetPassword: forgotResetPasswordReducer,
  addProduct: addProductReducer,
  getAllProduct: getAllProductReducer,
  getCategories: getCategoriesReducer,
  deleteUpdateProduct: deleteUpdateProductReducer,
  getSingleProduct: getSingleProductReducer,
  addProductToArea: addProductToAreaReducer,
  getRequriredProducts: getRequriredProductsReducer,
  removeProductFromArea: removeProductFromAreaReducer,
  deleteUpdateArea: deleteUpdateAreaReducer,
  addPersonToArea: addPersonToAreaReducer,
  removePersonFromArea: removePersonFromAreaReducer,
  getRequriredPeople: getRequriredPeopleReducer,
  getAreasByProductTitle: getAreasByProductTitleReducer,
  getAllFormCategory: getAllFormCategoryReducer,
  getFormsByCategoryId: getFormsByCategoryIdReducer,
  getSingleFormCategory: getSingleFormCategoryReducer,
  deleteUpdateGetHelpForm: deleteUpdateGetHelpFormReducer,

  getAllUserLocations: getAllUserLocationsReducer,
  updateUserLocation: updateUserLocationReducer,
  getApprovedFormsByCategoryId: getApprovedFormsByCategoryIdReducer,
  addRemoveTaskToUser:addRemoveTaskToUserReducer,
  getNotAddedTasks: getNotAddedTasksReducer,
  getUserTasks : getUserTasksReducer,
  getAllTask : getAllTaskReducer,
  addNewTask : addNewTaskReducer ,
  updateTask : updateTaskReducer

});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
