import {LOGIN, SIGNUP, SET_USER, CLEAR_USER} from './types';
const initialState = {
  id: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        id: action.payload.id,
      };
    case SIGNUP:
      return {
        ...state,
        id: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        id: action.payload,
      };
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
}
