import {LOGIN, SIGNUP} from './types';
const initialState = {
  id: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        id: action.payload.id,
      };
    case SIGNUP:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
}
