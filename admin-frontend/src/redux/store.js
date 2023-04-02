import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import areaReducer, {
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
import personTypeReducer, {
  addPersonTypeReducer,
  deleteUpdatePersonTypeReducer,
  getAllPersonTypeReducer,
} from "./reducers/PersonTypeReducer";
import categoryReducer, {
  addCategoryReducer,
  deleteUpdateCategoryReducer,
  getAllCategoryReducer,
  getCategoriesReducer,
} from "./reducers/CategoryReducer";
import subCategoryReducer, {
  addSubCategoryReducer,
  deleteUpdateSubCategoryReducer,
  getAllSubCategoryReducer,
} from "./reducers/SubCategoryReducer";
import userReducer, {
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
import productReducer, {
  addProductReducer,
  deleteUpdateProductReducer,
  getAllProductReducer,
  getSingleProductReducer,
} from "./reducers/ProductReducer";
import formCategoryReducer, {
  getAllFormCategoryReducer,
  getSingleFormCategoryReducer,
} from "./reducers/FormCategoryReducer";
import formReducer, {
  deleteUpdateGetHelpFormReducer,
  getApprovedFormsByCategoryIdReducer,
  getFormsByCategoryIdReducer,
} from "./reducers/FormReducer";
import taskReducer, {
  addNewTaskReducer,
  getAllTaskReducer,
  updateTaskReducer,
} from "./reducers/TaskReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  area: areaReducer,
  product : productReducer,
  category: categoryReducer,
  subcategory: subCategoryReducer,
  personType : personTypeReducer,
  task : taskReducer,
  user : userReducer,
  formCategory : formCategoryReducer,
  form : formReducer,

  forgotResetPassword: forgotResetPasswordReducer,
  getAllUserLocations: getAllUserLocationsReducer,
  updateUserLocation: updateUserLocationReducer,

  // getAllArea: getAllAreaReducer,
  // addArea: addAreaReducer,
  // addProductToArea: addProductToAreaReducer,
  // deleteUpdateArea: deleteUpdateAreaReducer,
  // addPersonToArea: addPersonToAreaReducer,
  // getRequriredProducts: getRequriredProductsReducer,
  // removeProductFromArea: removeProductFromAreaReducer,
  // getRequriredPeople: getRequriredPeopleReducer,
  // getAreasByProductTitle: getAreasByProductTitleReducer,
  // removePersonFromArea: removePersonFromAreaReducer,

  // addProduct: addProductReducer,
  // getAllProduct: getAllProductReducer,
  // deleteUpdateProduct: deleteUpdateProductReducer,
  // getSingleProduct: getSingleProductReducer,


  // getAllPersonType: getAllPersonTypeReducer,
  // addPersonType: addPersonTypeReducer,
  // deleteUpdatePersonType: deleteUpdatePersonTypeReducer,
  // getAllCategory: getAllCategoryReducer,
  // addCategory: addCategoryReducer,
  // deleteUpdateCategory: deleteUpdateCategoryReducer,
  // getCategories: getCategoriesReducer,
  // getAllSubCategory: getAllSubCategoryReducer,
  // addSubCategory: addSubCategoryReducer,
  // deleteUpdateSubCategory: deleteUpdateSubCategoryReducer,
  // getAllUser: getAllUserReducer,
  // searchUsers: searchUsersReducer,
  // updateUserRole: updateUserRoleReducer,
    // getAllFormCategory: getAllFormCategoryReducer,
  // getSingleFormCategory: getSingleFormCategoryReducer,
  // getFormsByCategoryId: getFormsByCategoryIdReducer,
  // deleteUpdateGetHelpForm: deleteUpdateGetHelpFormReducer,
  // getApprovedFormsByCategoryId: getApprovedFormsByCategoryIdReducer,
 
  // addRemoveTaskToUser: addRemoveTaskToUserReducer,
  // getNotAddedTasks: getNotAddedTasksReducer,
  // getUserTasks: getUserTasksReducer,
  // getAllTask: getAllTaskReducer,
  // addNewTask: addNewTaskReducer,
  // updateTask: updateTaskReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
