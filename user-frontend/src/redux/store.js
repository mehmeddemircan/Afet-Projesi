import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import brandReducer from "./reducers/BrandReducer";
import areaReducer from "./reducers/AreaReducer";
import formReducer from "./reducers/FormReducer";
import cityCountryReducer from "./reducers/CityCountryReducer";



const rootReducer = combineReducers({
    auth : authReducer,
    brand : brandReducer ,
    area : areaReducer , 
    form : formReducer,
    cityCountry :  cityCountryReducer
})

const initialState = {}

const middleware = [thunk];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;