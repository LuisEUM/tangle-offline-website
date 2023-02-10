import { combineReducers } from "redux";
import { languageReducer } from "./languageReducer";
import { cookiesReducer } from "./cookiesReducer";
const reducers = combineReducers({
  language: languageReducer,
  cookies: cookiesReducer,
});
export default reducers;