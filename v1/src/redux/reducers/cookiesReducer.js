import { ActionTypes } from "../constants/action-types";

const intialState = {
    essential: true,
    marketing: true,
    functional: true,
    analytics: true,
    accepted: false,
    showSettings: false,
};

export const cookiesReducer = (state = intialState, action) => {
    switch (action.type) {
        case ActionTypes.ALLOW_ALL_COOKIES:
            return { 
                ...state,
                accepted: true
            };
        case ActionTypes.ALLOW_SELECTED_COOKIES:
            return { 
                ...state, 
                accepted: true
            };
        case ActionTypes.SHOW_SETTINGS:
            return { 
                ...state, 
                showSettings: action.payload 
            };
        default:
            return state;
    }
};
