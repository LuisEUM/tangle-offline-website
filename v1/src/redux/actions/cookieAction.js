import { ActionTypes } from "../constants/action-types";
import { cookiesReducer } from "../reducers/cookiesReducer";

export const allowAllCookies = () => {
  return {
    type: ActionTypes.ALLOW_ALL_COOKIES,
  };
};

export const allowSelectedCookies = () => {
  return {
    type: ActionTypes.ALLOW_ALL_COOKIES,
  };
};

export const showSettings = (show) => {
  return {
    type: ActionTypes.SHOW_SETTINGS,
    payload: show,
  };
};