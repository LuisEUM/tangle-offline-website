import { ActionTypes } from "../constants/action-types";
import contentFile from '../../content.json'

const intialState = {
  language: contentFile.english
};

export const languageReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
